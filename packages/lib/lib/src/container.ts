import { ConnectionManager, DriverConfig } from './drivers';
import { Pipeline, StaticPipeline } from './pipeline';

export class ApplicationContainer {
  constructor (private env: any) {}

  public async runPipeline(
    pipeline: StaticPipeline<Pipeline>,
    configMap: Record<string, DriverConfig<any, any>>,
  ) {
    const pipe = new pipeline();

    const connectionManager = new ConnectionManager(configMap, this.env)

    /* create connections and map to ConnectionManager */
    /* await connectionManager.createStepConnections(pipeline.steps) */

    await pipe.create()
    await pipe.run(pipeline.steps, connectionManager)

    await connectionManager.dispose();
  }
}
