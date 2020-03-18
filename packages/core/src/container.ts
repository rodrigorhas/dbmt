import { ConnectionManager, DriverConfig } from './drivers';
import { Logger } from './logger';
import { MigrationConnectionDescriptor } from './migration';
import { Pipeline, StaticPipeline } from './pipeline';
import { RuntimeContext } from './types/container';

export class ApplicationContainer {
  constructor (private env: any) {}

  public async runPipeline(
    pipeline: StaticPipeline<Pipeline>,
    configMap: Record<string, DriverConfig<any, any>>,
    contextData: any,
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

    const context: RuntimeContext = {
      steps: pipeline.steps,
      connectionManager,
      data: contextData,
    }

    await pipe.create()
    await pipe.run(context)

    await connectionManager.dispose();
  }

  public async execute(scope: (container: this) => Promise<any>) {
    await scope(this)
    Logger.end();
  }
}
