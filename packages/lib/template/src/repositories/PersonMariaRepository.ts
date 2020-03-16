import { MariaDBConnector } from 'src/lib/connectors';

export class PersonMariaRepository {
  constructor(private connection: MariaDBConnector) {}

  public loadPerson() {
    this.connection;
  }

  public transformMariaToMongoFormat(data: any) {}
}
