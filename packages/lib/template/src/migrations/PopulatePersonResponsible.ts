import { Migration } from '@dbmt/lib';
import { MariaDBConnector, MongoDBConnector } from '@dbmt/lib/dist/connectors';

export class PopulatePersonResponsibleMigration extends Migration {
  public static id = 'populate-person-responsible';
  public static description =
    'Query, transform and populate the person responsible';

  public static connections = [
    {
      name: 'maria-from',
      description:
        'Query responsible person by person.responsibleUser.id at Cadastro_Pessoa.idResponsaval',
      type: MariaDBConnector
    },
    {
      name: 'mongo-to',
      description: 'Upsert person.responsibleUser',
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
