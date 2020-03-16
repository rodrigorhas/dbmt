import * as mongodb from 'mongodb';
import { ConnectorContext } from '../types';
import { AbstractConnector } from './AbstractConnector';

export class MongoDBConnector extends AbstractConnector<mongodb.MongoClient> {
  public async create(options: ConnectorContext) {
    const connection = await mongodb.connect(options.env.URI);

    return {
      connection,
      dispose: () => this.dispose()
    };
  }

  public async dispose() {
    this.connection.close(true);
  }
}
