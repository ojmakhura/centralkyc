import { CommonModule, JsonPipe } from '@angular/common';
import { AfterViewInit, Component, inject, linkedSignal, OnDestroy, OnInit } from '@angular/core';
import { TargetEntity } from '@app/models/bw/co/centralkyc/target-entity';
import { KycRecordApiStore } from '@app/store/bw/co/centralkyc/kyc/kyc-record-api.store';
import { SettingsApiStore } from '@app/store/bw/co/centralkyc/settings/settings-api.store';

@Component({
  selector: 'app-kyc-record',
  imports: [CommonModule],
  templateUrl: './kyc-record.html',
  styleUrl: './kyc-record.scss',
  providers: [
    JsonPipe
  ]
})
export class KycRecord implements OnInit, OnDestroy, AfterViewInit {

  settingsApiStore = inject(SettingsApiStore);
  kycRecordApiStore = inject(KycRecordApiStore);

  kycDocuments = linkedSignal(() => this.settingsApiStore.data().indKycDocuments);

  currentIndividualRecord = linkedSignal(() => this.kycRecordApiStore.currentIndividualRecord());
  currentOrganisationRecord = linkedSignal(() => this.kycRecordApiStore.currentOrganisationRecord());
  myRecords = linkedSignal(() => this.kycRecordApiStore.data());

  constructor() {}

  ngOnInit(): void {
    this.settingsApiStore.getAll();
    this.kycRecordApiStore.findMyCurrentIndividualRecord();
    this.kycRecordApiStore.findMyCurrentOrganisationRecord();
    this.kycRecordApiStore.findMyRecords();
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
  }

}
