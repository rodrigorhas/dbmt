import { WhitelabelUnifyAccessPipeline } from './pipelines';
import { ApplicationContainer, Logger } from '@dbmt/lib';
import { TaxipagMariaProduction, TaxipagMongoDevelopment } from './drivers/taxipag';
import environments from './environments';


async function main () {
  const container = new ApplicationContainer(environments);
  
  await container.runPipeline(WhitelabelUnifyAccessPipeline, {
    'maria-from': TaxipagMariaProduction,
    'mongo-to': TaxipagMongoDevelopment,
  });

  Logger.info('[dbmt] Done succesfully')
}

main()