import { PersonMariaRepository } from '@/repositories/PersonMariaRepository';
import { Logger, Migration } from '@dbmt/lib';
import { MariaDBConnector, MongoDBConnector } from '@dbmt/lib/dist/connectors';

export class PersonBasicStructureMigration extends Migration {
  public name = 'person-basic-structure';
  public description =
    'Query all basic informations from person and create the mongo main structure';

  public static connections = [
    {
      name: 'maria-from',
      description: 'Query almost everything from Cadastro_Pessoa',
      type: MariaDBConnector
    },
    {
      name: 'mongo-to',
      description: 'Creates the main structure at mongo',
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

    const personRepository = new PersonMariaRepository(maria);

    Logger.info('[Maria] Querying person from Cadastro_Pessoa table...');
    Logger.info('[Maria] Transforming received data');

    Logger.info('[Mongo] Upserting records...');
    Logger.info('[Mongo] Done...');
  }
}
