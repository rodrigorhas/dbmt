import { AbstractConnector, ConnectorConnection } from './connectors/AbstractConnector';
import { MigrationConnectionDescriptor, StaticMigration, Migration } from './migration';
import { Type } from './types/common';
import { Logger } from './logger';

export class ConnectionManager {
  private instances = new Map<string, ConnectorConnection<any>>();
  private migrationsConnectionDescriptors = new Map();

  constructor(
    private configMap: Record<string, DriverConfig<any, any>>,
    private env: any
  ) {}

  public async connect<T extends AbstractConnector<any>>(
    name: string,
    descriptor?: MigrationConnectionDescriptor<any>
  ) {

    const config = descriptor || this.migrationsConnectionDescriptors.get(name)

    /* Connection does not exists at this point */
    if(!this.instances.has(config.name)) {
      const connectionType = config.type.name;
      const connectionAlias = config.name;

      Logger.debug(`[dbmt] Attempting to create a connection named '${connectionAlias}' of type ${connectionType}`)

      const driverConfig = this.configMap[connectionAlias];
      const connector: AbstractConnector<any> = await driverConfig.setup(
        this.env[driverConfig.namespace],
        config.type
      )

      const connection = await connector.create()
      Logger.debug(`[dbmt] Connection '${connectionAlias}' of type ${connectionType} was succeeded`);

      this.instances.set(name, connection);
    }

    return this.instances.get(name) as T;
  }

  public addConnectionDescriptors (descriptors: Array<MigrationConnectionDescriptor<any>>) {
    descriptors.forEach(item => {
      this.migrationsConnectionDescriptors.set(item.name, item);
    });
  }

  public async createStepConnections (steps: StaticMigration<Migration>[]) {
    for (const step of steps) {
      for (const setpConnectionRequirements of step.connections) {
        await this.connect(setpConnectionRequirements.name, setpConnectionRequirements)
      }
    }

    return this.instances;
  }

  public async dispose () {
    for (const [name, instance] of Array.from(this.instances.entries())) {
      Logger.debug(`[dbmt] Disposing ${name} connection of type ${instance.connection.constructor.name}`)
      await instance.dispose()
    }
  }
}

export interface DriverConfig<C extends AbstractConnector<any>, E> {
  namespace: string;
  name: string;
  type: Type<C>;
  setup(env: E, connection: Type<C>): Promise<C>;
}
