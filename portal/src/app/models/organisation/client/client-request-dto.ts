import { FormBuilder } from "@angular/forms";
import {AuditableDTO} from '@models/auditable-dto';

import {KycComplianceStatus} from '@models/kyc/kyc-compliance-status';
import {TargetEntity} from '@models/target-entity';
import {IndividualIdentityType} from '@models/individual/individual-identity-type';
import {ClientRequestStatus} from '@models/organisation/client/client-request-status';

export class ClientRequestDTO extends AuditableDTO {
    name: string | any;
    
    registration: string | any;
    
    identityType: IndividualIdentityType | any;
    
    emailAddress: string | any;
    
    status: ClientRequestStatus | any = ClientRequestStatus.PENDING;
    
    organisationId: string | any;
    
    organisation: string | any;
    
    organisationRegistrationNo: string | any;
    
    documentId: string | any;
    
    fileName: string | any;
    
    fileUrl: string | any;
    
    documentTypeId: string | any;
    
    documentType: string | any;
    
    target: TargetEntity | any;
    
    targetId: string | any;
    
    targetKycStatus: KycComplianceStatus | any;
    
    constructor() {
        super();
        this.name = null;
        this.registration = null;
        this.identityType = null;
        this.emailAddress = null;
        this.status = null;
        this.organisationId = null;
        this.organisation = null;
        this.organisationRegistrationNo = null;
        this.documentId = null;
        this.fileName = null;
        this.fileUrl = null;
        this.documentTypeId = null;
        this.documentType = null;
        this.target = null;
        this.targetId = null;
        this.targetKycStatus = null;
    }
}
