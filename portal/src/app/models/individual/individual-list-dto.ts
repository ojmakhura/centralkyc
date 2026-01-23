import { FormBuilder } from "@angular/forms";

import {KycComplianceStatus} from '@models/kyc/kyc-compliance-status';
import {Sex} from '@models/individual/sex';
import {IndividualIdentityType} from '@models/individual/individual-identity-type';
import { PepStatus } from "./pep-status";

export class IndividualListDTO {
    id: string | any;

    name: string | any;

    identityNo: string | any;

    identityType: IndividualIdentityType | any;

    emailAddress: string | any;

    kycStatus: KycComplianceStatus | any;

    sex: Sex | any;

    pepStatus: PepStatus | any;

    constructor() {
        this.id = null;
        this.name = null;
        this.identityNo = null;
        this.identityType = null;
        this.emailAddress = null;
        this.kycStatus = null;
        this.sex = null;
        this.pepStatus = null;
    }
}
