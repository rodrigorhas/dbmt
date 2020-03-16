import { Pipeline } from '@dbmt/lib';
import { PersonBasicStructureMigration } from '../migrations/PersonBasicStructure';
import { PopulateAccountsMigration } from '../migrations/PopulateAccounts';
import { PopulatePasswordsMigration } from '../migrations/PopulatePasswords';
import { PopulatePersonResponsibleMigration } from '../migrations/PopulatePersonResponsible';
import { PopulatePhoneNumbersMigration } from '../migrations/PopulatePhoneNumbers';

export class WhitelabelUnifyAccessPipeline extends Pipeline {
  public static id = 'whitelabel-unify-access-pipeline';
  public static description = `Should migrate all whitelabel data from relational to mongodb`;

  public static steps = [
    PersonBasicStructureMigration,
    PopulatePersonResponsibleMigration,
    PopulatePhoneNumbersMigration,
    PopulatePasswordsMigration,
    PopulateAccountsMigration
  ];

  /* create method can be used to customize steps */
  public create() {}

  public run() {}
}
