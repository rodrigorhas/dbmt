import { ConnectionManager, DriverConfig } from './drivers';
import { Pipeline, StaticPipeline } from './pipeline';
import { MigrationConnectionDescriptor } from './migration';
import { Logger } from './logger';

export class ApplicationContainer {
  constructor (private env: any) {}

  public async runPipeline(
    pipeline: StaticPipeline<Pipeline>,
    configMap: Record<string, DriverConfig<any, any>>,
  ) {
    const pipe = new pipeline();

    const connectionManager = new ConnectionManager(configMap, this.env)
    connectionManager.addConnectionDescriptors(
      pipeline.steps.reduce((list: Array<MigrationConnectionDescriptor<any>>, item) => {
        if (!item.connections) {
          return list;
        }

        return list.concat(item.connections)
      }, [])
    )

    await pipe.create()
    await pipe.run(pipeline.steps, connectionManager)

    await connectionManager.dispose();
  }

  public async execute(scope: (container: this) => Promise<any>) {
    await scope(this)
    Logger.end();
  }
}
