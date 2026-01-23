import { FormBuilder } from "@angular/forms";

import {KycComplianceStatus} from '@models/kyc/kyc-compliance-status';
import {IndividualIdentityType} from '@models/individual/individual-identity-type';

export class IndividualSearchCriteria {
    emailAddress: string | any;
    
    identityNo: string | any;
    
    identityType: IndividualIdentityType | any;
    
    kycStatus: KycComplianceStatus | any;
    
    surname: string | any;
    
    middleName: string | any;
    
    firstName: string | any;
    
    constructor() {
        this.emailAddress = null;
        this.identityNo = null;
        this.identityType = null;
        this.kycStatus = null;
        this.surname = null;
        this.middleName = null;
        this.firstName = null;
    }
}
