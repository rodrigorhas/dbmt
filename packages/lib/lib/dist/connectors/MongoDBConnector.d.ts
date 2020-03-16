import * as mongodb from 'mongodb';
import { ConnectorContext } from '../types';
import { AbstractConnector } from './AbstractConnector';
export declare class MongoDBConnector extends AbstractConnector<mongodb.MongoClient> {
    create(options: ConnectorContext): Promise<{
        connection: mongodb.MongoClient;
        dispose: () => Promise<void>;
    }>;
    dispose(): Promise<void>;
}
