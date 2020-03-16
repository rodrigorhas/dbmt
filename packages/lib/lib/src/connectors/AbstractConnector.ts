import { ConnectorContext } from '../types';

export interface IAbstractConnector<T> {
  create(
    options: ConnectorContext
  ): Promise<{
    connection: T;
    dispose(): Promise<any>;
  }>;

  dispose(): Promise<any>;
}

export abstract class AbstractConnector<T> implements IAbstractConnector<T> {
  public connection!: T;

  constructor(protected env: any) {}

  create(
    options: ConnectorContext
  ): Promise<{ connection: T; dispose(): Promise<any> }> {
    throw new Error(`Method not implemented at ${this.constructor.name}.`);
  }

  dispose(): Promise<any> {
    throw new Error(`Method not implemented at ${this.constructor.name}.`);
  }
}
