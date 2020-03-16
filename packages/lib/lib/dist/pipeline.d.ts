import { Migration } from './migration';
export declare abstract class Pipeline {
    id: string;
    description?: string;
    steps: Migration[];
}
