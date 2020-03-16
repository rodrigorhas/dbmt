import { Environment } from './environment';
import { AbstractConnector } from './connectors/AbstractConnector';
import { Type } from './types';
export declare class ConnectionManager {
    private env;
    private instances;
    constructor(env: Environment);
    connect<T>(name: string): Promise<T>;
}
export interface DriverConfig<C extends AbstractConnector<any>, E> {
    namespace: string;
    name: string;
    type: Type<C>;
    setup(env: E, connection: Type<C>): Promise<C>;
}
