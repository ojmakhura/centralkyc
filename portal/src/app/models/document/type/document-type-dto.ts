import { FormBuilder } from "@angular/forms";
import {AuditableDTO} from '@models/auditable-dto';


export class DocumentTypeDTO extends AuditableDTO {
    code: string | any;
    
    name: string | any;
    
    description: string | any;
    
    constructor() {
        super();
        this.code = null;
        this.name = null;
        this.description = null;
    }
}
