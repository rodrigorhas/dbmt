import { ConnectorContext } from '../types';

export interface ConnectorConnection<T> {
  connection: T;
  dispose(): Promise<any>;
}

export interface IAbstractConnector<T> {
  create(
    options: ConnectorContext
  ): Promise<ConnectorConnection<T>>;

  dispose(): Promise<any>;
}

export abstract class AbstractConnector<T> implements IAbstractConnector<T> {
  public connection!: T;

  constructor(protected env: any) {}

  create(
    options?: ConnectorContext
  ): Promise<ConnectorConnection<T>> {
    throw new Error(`Method not implemented at ${this}.`);
  }

  dispose(): Promise<any> {
    throw new Error(`Method not implemented at ${this}.`);
  }
}
