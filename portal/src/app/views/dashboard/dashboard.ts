import { SettingsApiStore } from './../../store/bw/co/centralkyc/settings/settings-api.store';
import { AfterViewInit, Component, OnDestroy, OnInit, signal, inject } from '@angular/core';
import { KycRecordDTO } from '@app/models/bw/co/centralkyc/kyc/kyc-record-dto';
import { ClientRequestDTO } from '@app/models/bw/co/centralkyc/organisation/client/client-request-dto';
import { OrganisationListDTO } from '@app/models/bw/co/centralkyc/organisation/organisation-list-dto';
import { KycRecordApi } from '@app/services/bw/co/centralkyc/kyc/kyc-record-api';
import { KycRecordApiStore } from '@app/store/bw/co/centralkyc/kyc/kyc-record-api.store';

class DashboardForm {

  clientRequests: ClientRequestDTO[] = [];
  currentKycRecord: KycRecordDTO | null = null;
  organisations: OrganisationListDTO[] = [];
}

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit, OnDestroy, AfterViewInit {

  settingsApiStore = inject(SettingsApiStore);
  kycRecordApiStore = inject(KycRecordApiStore);
  kycRecordApi = inject(KycRecordApi);

  dashbboardSignal = signal(new DashboardForm());

  constructor() {}

  ngOnInit(): void {
    this.settingsApiStore.getAll();

    this.kycRecordApi.findMyRecords().subscribe({
      next: record => {
        console.log(record);
      }
    })
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
  }

}
