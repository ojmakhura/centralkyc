import { FormBuilder } from "@angular/forms";
import {AuditableDTO} from '@models/auditable-dto';

import {DocumentDTO} from '@models/document/document-dto';
import {SalaryRangeDTO} from '@models/settings/salary-range-dto';
import {DocumentTypeDTO} from '@models/document/type/document-type-dto';

export class SettingsDTO extends AuditableDTO {
    kycDuration: number | any;
    
    organisationDocuments: Array<DocumentTypeDTO> | any;
    
    individualDocuments: Array<DocumentTypeDTO> | any;
    
    indKycDocuments: Array<DocumentTypeDTO> | any;
    
    orgKycDocuments: Array<DocumentTypeDTO> | any;
    

    invoiceDocumentType: DocumentTypeDTO | any;

    invoiceTemplate: DocumentDTO | any;

    invoiceTemplateType: DocumentTypeDTO | any;

    quotationDocumentType: DocumentTypeDTO | any;

    quotationTemplateType: DocumentTypeDTO | any;

    quotationTemplate: DocumentDTO | any;

    clientRequestFileType: DocumentTypeDTO | any;
    salaryRanges: Array<SalaryRangeDTO> | any;
    
    constructor() {
        super();
        this.kycDuration = null;
        this.organisationDocuments = [];
        this.individualDocuments = [];
        this.indKycDocuments = [];
        this.orgKycDocuments = [];
        this.invoiceDocumentType = null;
        this.invoiceTemplate = null;
        this.invoiceTemplateType = null;
        this.quotationDocumentType = null;
        this.quotationTemplateType = null;
        this.quotationTemplate = null;
        this.clientRequestFileType = null;
        this.salaryRanges = [];
    }
}
