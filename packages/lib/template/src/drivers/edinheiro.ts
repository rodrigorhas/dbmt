import { IEdinheiroEnvironment } from '@/environments/edinheiro';
import { MariaDBConnector, MongoDBConnector } from '@dbmt/lib/dist/connectors';
import { DriverConfig } from '@dbmt/lib/dist/drivers';

export const EdinheiroMongoProduction: DriverConfig<
  MongoDBConnector,
  IEdinheiroEnvironment
> = {
  namespace: 'edinheiro',
  name: 'mongo-production',
  type: MongoDBConnector,
  async setup(env, connection) {
    return new connection(env.production.mongo);
  }
};

export const EdinheiroMongoDevelopment: DriverConfig<
  MongoDBConnector,
  IEdinheiroEnvironment
> = {
  namespace: 'edinheiro',
  name: 'mongo-development',
  type: MongoDBConnector,
  async setup(env, connection) {
    return new connection(env.development.mongo);
  }
};

export const EdinheiroMariaProduction: DriverConfig<
  MariaDBConnector,
  IEdinheiroEnvironment
> = {
  namespace: 'edinheiro',
  name: 'maria-production',
  type: MariaDBConnector,
  async setup(env, connection) {
    return new connection(env.production.maria);
  }
};

export const EdinheiroMariaDevelopment: DriverConfig<
  MariaDBConnector,
  IEdinheiroEnvironment
> = {
  namespace: 'edinheiro',
  name: 'maria-development',
  type: MariaDBConnector,
  async setup(env, connection) {
    return new connection(env.development.maria);
  }
};

export default [
  EdinheiroMongoProduction,
  EdinheiroMongoDevelopment,
  EdinheiroMariaProduction,
  EdinheiroMariaDevelopment
];
