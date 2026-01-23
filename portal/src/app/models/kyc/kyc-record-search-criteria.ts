import { FormBuilder } from "@angular/forms";

import {KycComplianceStatus} from '@models/kyc/kyc-compliance-status';
import {TargetEntity} from '@models/target-entity';

export class KycRecordSearchCriteria {
    name: string | any;
    
    registration: string | any;
    
    target: TargetEntity | any;
    
    targetId: string | any;
    
    statuses: Array<KycComplianceStatus> | any;
    
    constructor() {
        this.name = null;
        this.registration = null;
        this.target = null;
        this.targetId = null;
        this.statuses = [];
    }
}
