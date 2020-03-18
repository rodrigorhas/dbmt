import { Logger } from './logger';
import { Migration, StaticMigration } from './migration';
import { RuntimeContext } from './types/container';

export interface StaticPipeline<T> {
  new (...args: any[]): T;

  id: string;
  description?: string;
  steps: Array<StaticMigration<Migration>>
}

export abstract class Pipeline {
  public static id: string;
  public static description?: string;

  public static steps: Array<StaticMigration<Migration>>

  public async create() {}
  public async run(context: RuntimeContext) {
    const constructor = this.constructor as StaticPipeline<Pipeline>;

    Logger.info(`[dbmt] Running pipeline '${constructor.id}'`)

    for (const step of context.steps) {
      const migration = new step(context.connectionManager)
      
      Logger.info(`[dbmt] Starting migration '${step.id}'`)
      await migration.run(context)
      Logger.info(`[dbmt] Done migration '${step.id}'`)
    }

    Logger.info(`[dbmt] Done pipeline '${constructor.id}'`)
  }
}
