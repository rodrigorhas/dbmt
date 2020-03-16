import { PersonBasicStructureMigration } from './PersonBasicStructure';
import { PopulateAccountsMigration } from './PopulateAccounts';
import { PopulatePasswordsMigration } from './PopulatePasswords';
import { PopulatePersonResponsibleMigration } from './PopulatePersonResponsible';
import { PopulatePhoneNumbersMigration } from './PopulatePhoneNumbers';

export { PersonBasicStructureMigration } from './PersonBasicStructure';
export { PopulateAccountsMigration } from './PopulateAccounts';
export { PopulatePasswordsMigration } from './PopulatePasswords';
export { PopulatePersonResponsibleMigration } from './PopulatePersonResponsible';
export { PopulatePhoneNumbersMigration } from './PopulatePhoneNumbers';

export default [
  PersonBasicStructureMigration,
  PopulateAccountsMigration,
  PopulatePasswordsMigration,
  PopulatePersonResponsibleMigration,
  PopulatePhoneNumbersMigration
];
