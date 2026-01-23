import { FormBuilder } from "@angular/forms";
import {AuditableDTO} from '@models/auditable-dto';

import {DocumentDTO} from '@models/document/document-dto';
import {KycComplianceStatus} from '@models/kyc/kyc-compliance-status';
import {DeclarationDTO} from '@models/kyc/declaration-dto';
import {SourceOfFunds} from '@models/source-of-funds';
import {EmploymentRecordDTO} from '@models/individual/employment/employment-record-dto';
import {TargetEntity} from '@models/target-entity';
import {IndividualIdentityType} from '@models/individual/individual-identity-type';

export class KycRecordDTO extends AuditableDTO {
    expiryDate: Date | any;
    
    uploadDate: Date | any;
    
    documents: Array<DocumentDTO> | any;
    
    name: string | any;
    
    identityNo: string | any;
    
    kycStatus: KycComplianceStatus | any;
    
    targetId: string | any;
    

    employmentRecord: EmploymentRecordDTO | any;
    target: TargetEntity | any;
    
    emailAddress: string | any;
    
    identityType: IndividualIdentityType | any;
    

    declaration: DeclarationDTO | any;
    sourceOfFunds: Array<SourceOfFunds> | any;
    
    sourceOfFundsDetails: string | any;
    
    constructor() {
        super();
        this.expiryDate = null;
        this.uploadDate = null;
        this.documents = [];
        this.name = null;
        this.identityNo = null;
        this.kycStatus = null;
        this.targetId = null;
        this.employmentRecord = null;
        this.target = null;
        this.emailAddress = null;
        this.identityType = null;
        this.declaration = null;
        this.sourceOfFunds = [];
        this.sourceOfFundsDetails = null;
    }
}
