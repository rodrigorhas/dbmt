import { Migration } from './migration';

export abstract class Pipeline {
  public id!: string;
  public description?: string;

  public steps: Migration[] = [];
}
