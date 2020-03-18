import { StaticMigration, Migration } from "core/migration";
import { ConnectionManager } from "core/drivers";

export interface RuntimeContext {
  steps: Array<StaticMigration<Migration>>,
  connectionManager: ConnectionManager,
  data: any
}