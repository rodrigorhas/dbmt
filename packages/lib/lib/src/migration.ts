import { Type } from './types';
import { AbstractConnector } from './connectors/AbstractConnector';
import { ConnectionManager } from './drivers';

export interface StaticMigration<T> {
  new (...args: any[]): T;

  id: string;
  description?: string;
  connections: Array<MigrationRequiredConnection<any>>;
}

interface MigrationRequiredConnection<T extends AbstractConnector<any>> {
  name: string;
  description: string;
  type: Type<T>;
}

export abstract class Migration {
  static id: string;
  static description?: string;
  static connections: Array<MigrationRequiredConnection<any>>;

  constructor(
    protected connectionManager: ConnectionManager
  ) {}

  public async run() {}
}
