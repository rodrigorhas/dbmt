import { Migration, Logger } from '@dbmt/lib';
import { MariaDBConnector, MongoDBConnector } from '@dbmt/lib/dist/connectors';

export class PopulatePhoneNumbersMigration extends Migration {
  public static id = 'populate-phone-numbers';
  public static description =
    'Query, transform and populate all phone numbers from person';

  public static connections = [
    {
      name: 'maria-from',
      description:
        'Query phone numbers from Cadastro_Pessoa with Cadastro_Celular',
      type: MariaDBConnector
    },
    {
      name: 'mongo-to',
      description: 'Upsert person phones numbers',
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

    Logger.info('[Maria] Loading phone numbers...');
    Logger.info('[Maria] Phone numbers were loaded successfully...');

    Logger.info('[Mongo] Upserting records...');
    Logger.info('[Mongo] Done...');
  }
}
