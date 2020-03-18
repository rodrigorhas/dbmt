import * as mongodb from 'mongodb';
import { ConnectorContext } from '../types/common';
import { AbstractConnector } from './AbstractConnector';

export class MongoDBConnector extends AbstractConnector<mongodb.MongoClient> {
  public async create(options?: ConnectorContext) {
    const env = options && options.env || this.env;
    const connection = await mongodb.connect(env.URI, {
      useUnifiedTopology: true
    });

    this.connection = connection;

    return {
      connection,
      dispose: () => this.dispose()
    };
  }

  public async dispose() {
    this.connection.close(true);
  }
}
