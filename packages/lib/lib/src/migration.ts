import { Type } from './types';
import { AbstractConnector } from './connectors/AbstractConnector';
import { ConnectionManager } from './drivers';

interface MigrationRequiredConnection<T extends AbstractConnector<any>> {
  name: string;
  description: string;
  type: Type<T>;
}

export abstract class Migration {
  static id: string;
  static description?: string;

  static connections: Array<MigrationRequiredConnection<any>>;

  constructor(protected connectionManager: ConnectionManager) {}
}
