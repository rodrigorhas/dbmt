import { Migration } from '@dbmt/lib';
import { MariaDBConnector, MongoDBConnector } from '@dbmt/lib/dist/connectors';

export class PopulatePasswordsMigration extends Migration {
  public static id = 'populate-passwords';
  public static description =
    'Create alpha, numeric and temp passwords from Cadastro_Pessoa';

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
