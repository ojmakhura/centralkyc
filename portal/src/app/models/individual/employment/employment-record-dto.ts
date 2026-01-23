import { FormBuilder } from "@angular/forms";
import {AuditableDTO} from '@models/auditable-dto';

import {KycRecordDTO} from '@models/kyc/kyc-record-dto';
import {OrganisationListDTO} from '@models/organisation/organisation-list-dto';
import {SalaryRangeDTO} from '@models/settings/salary-range-dto';

export class EmploymentRecordDTO extends AuditableDTO {
    kycRecords: Array<KycRecordDTO> | any;
    
    positions: Array<string> | any;
    
    employmentStart: Date | any;
    
    employmentEnd: Date | any;
    
    name: string | any;
    
    identityNo: string | any;
    
    individualId: string | any;
    
    employer: OrganisationListDTO | any;
    

    salaryRange: SalaryRangeDTO | any;
    constructor() {
        super();
        this.kycRecords = [];
        this.positions = [];
        this.employmentStart = null;
        this.employmentEnd = null;
        this.name = null;
        this.identityNo = null;
        this.individualId = null;
        this.employer = null;
        this.salaryRange = null;
    }
}
