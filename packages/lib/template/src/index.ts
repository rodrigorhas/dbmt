import { WhitelabelUnifyAccessPipeline } from './pipelines';
import { ApplicationContainer } from '@dbmt/lib';

const container = new ApplicationContainer();
container.prepare(WhitelabelUnifyAccessPipeline, []);
