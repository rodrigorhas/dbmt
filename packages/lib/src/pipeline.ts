import { ConnectionManager } from './drivers';
import { Logger } from './logger';
import { Migration, StaticMigration } from './migration';

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
  public async run(steps: Array<StaticMigration<Migration>>, connectionManager: ConnectionManager) {
    const constructor = this.constructor as StaticPipeline<Pipeline>;

    Logger.info(`[dbmt] Running pipeline '${constructor.id}'`)

    for (const step of steps) {
      const migration = new step(connectionManager)
      
      Logger.info(`[dbmt] Starting migration '${step.id}'`)
      await migration.run()
      Logger.info(`[dbmt] Done migration '${step.id}'`)
    }

    Logger.info(`[dbmt] Done pipeline '${constructor.id}'`)
  }
}
