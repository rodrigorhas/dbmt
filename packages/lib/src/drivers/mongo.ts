import mongodb from 'mongodb';
import { ConnectionDrive } from '@mnc-cli/driver';
import { Environment } from '@mnc-cli/env';

@ConnectionDrive({
  /* fallback to class name without driver as "mongo" */
  id: 'mongo',
  /* fallback to class name */
  name: 'MongoDB Driver'
})
export default class MongoDriver {
  constructor(private env: Environment) {}

  public setup() {
    const env = this.env.get('');
  }
}
