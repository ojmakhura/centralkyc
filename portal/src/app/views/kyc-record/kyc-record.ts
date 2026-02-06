import { CommonModule, JsonPipe } from '@angular/common';
import { AfterViewInit, Component, inject, linkedSignal, OnDestroy, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {
    this.settingsApiStore.getAll();
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
  }

}
