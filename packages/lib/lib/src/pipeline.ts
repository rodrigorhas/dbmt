import { Migration, StaticMigration } from './migration';
import { Type } from './types';

export interface StaticPipeline<T> {
  new (...args: any[]): T;

  id: string;
  description?: string;
  steps: Array<StaticMigration<Migration>>
}

export abstract class Pipeline {
  public static id: string;
  public static description?: string;

  public static steps: Array<Type<Migration>>

  public create() {}
  public run() {}
}
