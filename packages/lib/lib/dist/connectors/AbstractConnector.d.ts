import { ConnectorContext } from '../types';
export interface IAbstractConnector<T> {
    create(options: ConnectorContext): Promise<{
        connection: T;
        dispose(): Promise<any>;
    }>;
    dispose(): Promise<any>;
}
export declare abstract class AbstractConnector<T> implements IAbstractConnector<T> {
    protected env: any;
    connection: T;
    constructor(env: any);
    create(options: ConnectorContext): Promise<{
        connection: T;
        dispose(): Promise<any>;
    }>;
    dispose(): Promise<any>;
}
