import { ITaxiPagEnvironment } from '@/environments/taxipag';
import { MariaDBConnector, MongoDBConnector } from '@dbmt/lib/dist/connectors';
import { DriverConfig } from '@dbmt/lib/dist/drivers';

export const TaxipagMongoProduction: DriverConfig<
  MongoDBConnector,
  ITaxiPagEnvironment
> = {
  namespace: 'taxipag',
  name: 'mongo-production',
  type: MongoDBConnector,
  async setup(env, connection) {
    return new connection(env.production.mongo);
  }
};

export const TaxipagMongoDevelopment: DriverConfig<
  MongoDBConnector,
  ITaxiPagEnvironment
> = {
  namespace: 'taxipag',
  name: 'mongo-development',
  type: MongoDBConnector,
  async setup(env, connection) {
    return new connection(env.development.mongo);
  }
};

export const TaxipagMariaProduction: DriverConfig<
  MariaDBConnector,
  ITaxiPagEnvironment
> = {
  namespace: 'taxipag',
  name: 'maria-production',
  type: MariaDBConnector,
  async setup(env, connection) {
    return new connection(env.production.maria);
  }
};

export const TaxipagMariaDevelopment: DriverConfig<
  MariaDBConnector,
  ITaxiPagEnvironment
> = {
  namespace: 'taxipag',
  name: 'maria-development',
  type: MariaDBConnector,
  async setup(env, connection) {
    return new connection(env.development.maria);
  }
};

export default [
  TaxipagMongoProduction,
  TaxipagMongoDevelopment,
  TaxipagMariaProduction,
  TaxipagMariaDevelopment
];
