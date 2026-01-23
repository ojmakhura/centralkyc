import { FormBuilder } from "@angular/forms";
import {AuditableDTO} from '@models/auditable-dto';

import {KycRecordDTO} from '@models/kyc/kyc-record-dto';
import {PhoneNumber} from '@models/phone-number';
import {KycComplianceStatus} from '@models/kyc/kyc-compliance-status';
import {MaritalStatus} from '@models/individual/marital-status';
import {OrganisationListDTO} from '@models/organisation/organisation-list-dto';
import {EmploymentRecordDTO} from '@models/individual/employment/employment-record-dto';
import {EmploymentStatus} from '@models/individual/employment-status';
import {BranchDTO} from '@models/organisation/branch/branch-dto';
import {Sex} from '@models/individual/sex';
import {IndividualIdentityType} from '@models/individual/individual-identity-type';

export class IndividualDTO extends AuditableDTO {
    firstName: string | any;
    
    middleName: string | any;
    
    surname: string | any;
    
    identityNo: string | any;
    
    identityType: IndividualIdentityType | any;
    
    phoneNumbers: Array<PhoneNumber> | any;
    
    physicalAddress: string | any;
    
    postalAddress: string | any;
    
    emailAddress: string | any;
    
    hasUser: boolean | any = false;
    
    organisation: OrganisationListDTO | any;
    

    branch: BranchDTO | any;
    roles: Array<string> | any;
    

    latestKyc: KycRecordDTO | any;
    kycStatus: KycComplianceStatus | any;
    
    employmentRecords: Array<EmploymentRecordDTO> | any;
    
    username: string | any;
    
    sex: Sex | any;
    
    nationality: string | any;
    
    maritalStatus: MaritalStatus | any;
    
    employmentStatus: EmploymentStatus | any;
    
    constructor() {
        super();
        this.firstName = null;
        this.middleName = null;
        this.surname = null;
        this.identityNo = null;
        this.identityType = null;
        this.phoneNumbers = [];
        this.physicalAddress = null;
        this.postalAddress = null;
        this.emailAddress = null;
        this.hasUser = null;
        this.organisation = null;
        this.branch = null;
        this.roles = [];
        this.latestKyc = null;
        this.kycStatus = null;
        this.employmentRecords = [];
        this.username = null;
        this.sex = null;
        this.nationality = null;
        this.maritalStatus = null;
        this.employmentStatus = null;
    }
}
