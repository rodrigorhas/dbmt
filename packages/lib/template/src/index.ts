import { ApplicationContainer } from './lib/container';
import { WhitelabelUnifyAccessPipeline } from './pipelines';

const container = new ApplicationContainer();
container.prepare(WhitelabelUnifyAccessPipeline, [{}]);
