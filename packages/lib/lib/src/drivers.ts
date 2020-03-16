import { Environment } from './environment';
import { AbstractConnector } from './connectors/AbstractConnector';
import { Type } from './types';

export class ConnectionManager {
  private instances = new Map();

  constructor(private env: Environment) {}

  public async connect<T>(name: string) {
    if (!this.instances.has(name)) {
    }

    return this.instances.get(name) as T;
  }
}

export interface DriverConfig<C extends AbstractConnector<any>, E> {
  namespace: string;
  name: string;
  type: Type<C>;
  setup(env: E, connection: Type<C>): Promise<C>;
}
