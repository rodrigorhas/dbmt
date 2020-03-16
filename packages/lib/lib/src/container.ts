import { Pipeline, StaticPipeline } from './pipeline';
import { Type } from './types';

export class ApplicationContainer {
  public prepare(pipeline: StaticPipeline<Pipeline>, connectionConfigs: any[]) {
    const pipe = new pipeline();

    console.log(pipeline.steps);
  }
}
