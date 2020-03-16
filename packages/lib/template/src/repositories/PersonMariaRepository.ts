import { MariaDBConnector } from "@dbmt/lib/dist/connectors";

export class PersonMariaRepository {
  constructor(private connection: MariaDBConnector) {}

  public loadPerson() {
    this.connection;
  }

  public transformMariaToMongoFormat(data: any) {}
}
