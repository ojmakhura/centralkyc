import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, computed, effect, inject, linkedSignal, OnDestroy, OnInit, signal } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { Loader } from "@app/@shared/loader/loader";
import { DocumentDTO } from "@app/models/bw/co/centralkyc/document/document-dto";
import { DocumentTypeDTO } from "@app/models/bw/co/centralkyc/document/type/document-type-dto";
import { IndividualIdentityType } from "@app/models/bw/co/centralkyc/individual/individual-identity-type";
import { Sex } from "@app/models/bw/co/centralkyc/individual/sex";
import { KycComplianceStatus } from "@app/models/bw/co/centralkyc/kyc/kyc-compliance-status";
import { PhoneType } from "@app/models/bw/co/centralkyc/phone-type";
import { SettingsDTO } from "@app/models/bw/co/centralkyc/settings/settings-dto";
import { TargetEntity } from "@app/models/bw/co/centralkyc/target-entity";
import { DocumentApi } from "@app/services/bw/co/centralkyc/document/document-api";
import { KycRecordApiStore } from "@app/store/bw/co/centralkyc/kyc/kyc-record-api.store";
import { SettingsApiStore } from "@app/store/bw/co/centralkyc/settings/settings-api.store";
import { TranslateModule } from "@ngx-translate/core";
import { ToastrService } from "ngx-toastr";
import { IndividualApi } from "@app/services/bw/co/centralkyc/individual/individual-api";
import { OrganisationApi } from "@app/services/bw/co/centralkyc/organisation/organisation-api";
import { IndividualListDTO } from "@app/models/bw/co/centralkyc/individual/individual-list-dto";
import { OrganisationListDTO } from "@app/models/bw/co/centralkyc/organisation/organisation-list-dto";
import { MatButtonModule } from "@angular/material/button";

interface UploadProgress {
  [documentTypeId: string]: {
    isUploading: boolean;
    progress: number;
  };
}

@Component({
  selector: 'app-edit-kyc-record',
  templateUrl: './edit-kyc-record.html',
  styleUrls: ['./edit-kyc-record.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    TranslateModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonModule,
    Loader,
    RouterModule
  ]
})
export class EditKycRecord implements OnInit, OnDestroy, AfterViewInit {

  kycRecordApiStore = inject(KycRecordApiStore);
  loading = linkedSignal(() => this.kycRecordApiStore.loading());
  loaderMessage = linkedSignal(() => this.kycRecordApiStore.loaderMessage());
  error = linkedSignal(() => this.kycRecordApiStore.error());
  kycRecord = linkedSignal(() => this.kycRecordApiStore.data());

  KycComplianceStatusT: any = KycComplianceStatus;
  KycComplianceStatusOptions = Object.keys(this.KycComplianceStatusT);
  TargetEntityT: any = TargetEntity;
  SexT: any = Sex;
  SexOptions = Object.keys(this.SexT);
  IndividualIdentityTypeT: any = IndividualIdentityType;
  IndividualIdentityTypeOptions = Object.keys(this.IndividualIdentityTypeT);
  PhoneTypeT: any = PhoneType;
  PhoneTypeOptions = Object.keys(this.PhoneTypeT);

  // Settings and document types
  settingsApiStore = inject(SettingsApiStore);
  settings = linkedSignal<SettingsDTO | null>(() => this.settingsApiStore.data());
  documentApi = inject(DocumentApi);
  document = linkedSignal(() => new DocumentDTO());

  // Individual and Organisation APIs
  individualApi = inject(IndividualApi);
  organisationApi = inject(OrganisationApi);
  individual = signal<IndividualListDTO | null>(null);
  organisation = signal<OrganisationListDTO | null>(null);

  // Document upload state
  uploadedDocuments = linkedSignal<DocumentDTO[]>(() => []);
  uploadProgress = signal<UploadProgress>({});

  // Computed property to get individual document types from settings
  individualDocumentTypes = computed(() => {
    const settings = this.settings();
    return settings?.individualDocuments || [];
  });
  kycIndDocumentTypes = computed(() => {
    const settings = this.settings();
    return settings?.indKycDocuments || [];
  });

  toaster: ToastrService = inject(ToastrService);
  protected router: Router = inject(Router);
  protected route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    // Watch for kycRecord changes and load target entity

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {

    this.route.queryParams.subscribe(params => {
      const kycRecordId = params['id'];
      if (kycRecordId) {
        this.kycRecordApiStore.findById({ id: kycRecordId });
      }
    });

    // Load settings
    this.settingsApiStore.getAll();
  }

}
