import * as mariadb from 'mariadb';
import { AbstractConnector } from './AbstractConnector';
export declare class MariaDBConnector extends AbstractConnector<mariadb.Connection> {
    create(): Promise<{
        connection: mariadb.Connection;
        dispose: () => Promise<void>;
    }>;
    dispose(): Promise<void>;
}
