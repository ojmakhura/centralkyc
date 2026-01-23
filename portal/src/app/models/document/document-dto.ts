import { FormBuilder } from "@angular/forms";
import {AuditableDTO} from '@models/auditable-dto';

import {TargetEntity} from '@models/target-entity';

export class DocumentDTO extends AuditableDTO {
    target: TargetEntity | any;
    
    documentTypeId: string | any;
    
    documentType: string | any;
    
    url: string | any;
    
    targetId: string | any;
    
    metadata: any | any;
    
    fileName: string | any;
    
    constructor() {
        super();
        this.target = null;
        this.documentTypeId = null;
        this.documentType = null;
        this.url = null;
        this.targetId = null;
        this.metadata = null;
        this.fileName = null;
    }
}
