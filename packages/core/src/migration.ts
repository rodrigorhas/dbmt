import { Type } from './types/common';
import { AbstractConnector } from './connectors/AbstractConnector';
import { ConnectionManager } from './drivers';
import { RuntimeContext } from './types/container';

export interface StaticMigration<T> {
  new (...args: any[]): T;

  id: string;
  description?: string;
  connections: Array<MigrationConnectionDescriptor<any>>;
}

export interface MigrationConnectionDescriptor<T extends AbstractConnector<any>> {
  name: string;
  description: string;
  type: Type<T>;
}

export abstract class Migration {
  static id: string;
  static description?: string;
  static connections: Array<MigrationConnectionDescriptor<any>>;

  constructor(
    protected connectionManager: ConnectionManager
  ) {}

  public async run(context: RuntimeContext): Promise<any> {}
}
