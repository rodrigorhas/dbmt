import { Migration } from '@dbmt/lib';
import { MariaDBConnector, MongoDBConnector } from '@dbmt/lib/dist/connectors';

export class PopulateAccountsMigration extends Migration {
  public static id = 'populate-accounts';
  public static description = 'Upsert user accounts from Conta_Conta';

  public static connections = [
    {
      name: 'maria-from',
      description: 'Query all persons passwords from Cadastro_Pessoa',
      type: MariaDBConnector
    },
    {
      name: 'mongo-to',
      description: 'Upsert alpha, numeric and temp passwords',
      type: MongoDBConnector
    }
  ];

  public async run() {
    const mongo = await this.connectionManager.connect<MongoDBConnector>(
      'mongo-to'
    );
    const maria = await this.connectionManager.connect<MariaDBConnector>(
      'maria-from'
    );
  }
}
