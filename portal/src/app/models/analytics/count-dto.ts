import { FormBuilder } from "@angular/forms";


export class CountDTO {
    organisationCount: number | any = 0;
    
    individualCount: number | any = 0;
    
    requestCount: number | any = 0;
    
    compliantCount: number | any = 0;
    
    pepCount: number | any = 0;
    
    pepRelativeCount: number | any = 0;
    
    pepAssociateCount: number | any = 0;
    
    kycComplianceExpiredCount: number | any = 0;
    
    kycComplianceAbsentCount: number | any = 0;
    
    kycComplianceIncompleteCount: number | any = 0;
    
    subscriptionCountActive: number | any = 0;
    
    subscriptionCountInactive: number | any = 0;
    
    subscriptionCountCancelled: number | any = 0;
    
    paidInvoicesCount: number | any = 0;
    
    unpaidInvoicesCount: number | any = 0;
    
    invoicesCount: number | any = 0;
    
    subscriptionCount: number | any = 0;
    
    constructor() {
        this.organisationCount = null;
        this.individualCount = null;
        this.requestCount = null;
        this.compliantCount = null;
        this.pepCount = null;
        this.pepRelativeCount = null;
        this.pepAssociateCount = null;
        this.kycComplianceExpiredCount = null;
        this.kycComplianceAbsentCount = null;
        this.kycComplianceIncompleteCount = null;
        this.subscriptionCountActive = null;
        this.subscriptionCountInactive = null;
        this.subscriptionCountCancelled = null;
        this.paidInvoicesCount = null;
        this.unpaidInvoicesCount = null;
        this.invoicesCount = null;
        this.subscriptionCount = null;
    }
}
