import * as mariadb from 'mariadb';
import { AbstractConnector } from './AbstractConnector';

export class MariaDBConnector extends AbstractConnector<mariadb.Connection> {
  public async create() {
    const connection = await mariadb.createConnection(
      this.env.URI || {
        host: this.env.HOST,
        user: this.env.USER,
        password: this.env.PASSWORD,
        database: this.env.DATABASE
      }
    );

    this.connection = connection;

    return {
      connection,
      dispose: () => connection.end()
    };
  }

  public async dispose() {
    this.connection.end();
  }
}
