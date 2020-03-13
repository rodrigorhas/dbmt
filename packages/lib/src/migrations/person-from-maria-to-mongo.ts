import { Migration } from '@mnc-cli/migration';

@Migration({
  name: 'person-from-maria-to-mongo',
  drivers: [MongoDriver, MariaDriver]
})
export class PersonFromMariaToMongoMigration {
  constructor(private mongo: MongoDriver, private maria: MariaDriver) {}

  public run() {}
}
