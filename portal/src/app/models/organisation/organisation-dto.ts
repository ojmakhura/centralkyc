import { FormBuilder } from "@angular/forms";
import {AuditableDTO} from '@models/auditable-dto';

import {DocumentDTO} from '@models/document/document-dto';
import {PhoneNumber} from '@models/phone-number';
import {KycComplianceStatus} from '@models/kyc/kyc-compliance-status';
import {GeneralStatus} from '@models/general-status';
import {OrganisationDomain} from '@models/organisation/organisation-domain';
import {DocumentTypeDTO} from '@models/document/type/document-type-dto';

export class OrganisationDTO extends AuditableDTO {
    code: string | any;
    
    name: string | any;
    
    description: string | any;
    
    documents: Array<DocumentDTO> | any;
    
    registrationNo: string | any;
    
    phoneNumbers: Array<PhoneNumber> | any;
    
    physicalAddress: string | any;
    
    postalAddress: string | any;
    
    status: GeneralStatus | any;
    
    contactEmailAddress: string | any;
    
    clientKycDocuments: Array<DocumentTypeDTO> | any;
    
    isClient: boolean | any = false;
    
    clientRequestsFiles: Array<DocumentDTO> | any;
    
    domains: Array<OrganisationDomain> | any;
    
    kycStatus: KycComplianceStatus | any;
    
    countryOfRegistration: string | any;
    
    constructor() {
        super();
        this.code = null;
        this.name = null;
        this.description = null;
        this.documents = [];
        this.registrationNo = null;
        this.phoneNumbers = [];
        this.physicalAddress = null;
        this.postalAddress = null;
        this.status = null;
        this.contactEmailAddress = null;
        this.clientKycDocuments = [];
        this.isClient = null;
        this.clientRequestsFiles = [];
        this.domains = [];
        this.kycStatus = null;
        this.countryOfRegistration = null;
    }
}
