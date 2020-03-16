import { Type } from './types';
import { AbstractConnector } from './connectors/AbstractConnector';
import { ConnectionManager } from './drivers';
interface MigrationRequiredConnection<T extends AbstractConnector<any>> {
    name: string;
    description: string;
    type: Type<T>;
}
export declare abstract class Migration {
    protected connectionManager: ConnectionManager;
    static id: string;
    static description?: string;
    static connections: Array<MigrationRequiredConnection<any>>;
    constructor(connectionManager: ConnectionManager);
}
export {};
