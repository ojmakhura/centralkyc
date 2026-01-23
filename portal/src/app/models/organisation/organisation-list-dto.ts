import { FormBuilder } from "@angular/forms";

import {KycComplianceStatus} from '@models/kyc/kyc-compliance-status';
import {GeneralStatus} from '@models/general-status';

export class OrganisationListDTO {
    id: string | any;
    
    code: string | any;
    
    name: string | any;
    
    registrationNo: string | any;
    
    status: GeneralStatus | any;
    
    contactEmailAddress: string | any;
    
    kycStatus: KycComplianceStatus | any;
    
    isClient: boolean | any = false;
    
    constructor() {
        this.id = null;
        this.code = null;
        this.name = null;
        this.registrationNo = null;
        this.status = null;
        this.contactEmailAddress = null;
        this.kycStatus = null;
        this.isClient = null;
    }
}
