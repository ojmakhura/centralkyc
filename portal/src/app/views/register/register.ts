import { CommonModule } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, computed, effect, inject, Input, linkedSignal, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { Loader } from '@app/@shared/loader/loader';
import { form, FormField, required } from '@angular/forms/signals';
import { TranslateModule } from '@ngx-translate/core';
import { ClientRequestApiStore } from '@app/store/organisation/client/client-request-api.store';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { IndividualApiStore } from '@app/store/individual/individual-api.store';
import { IndividualDTO } from '@app/models/individual/individual-dto';
import { OrganisationApiStore } from '@app/store/organisation/organisation-api.store';
import { OrganisationDTO } from '@app/models/organisation/organisation-dto';
import { ToastrService } from 'ngx-toastr';
import { ClientRequestStatus } from '@app/models/organisation/client/client-request-status';
import { MatRadioModule } from '@angular/material/radio';
import Swal from 'sweetalert2';

class RegisterParams {
  identificationType: string = '';
  identificationNumber: string = '';
  individual: IndividualDTO | null = null;
  organisation: OrganisationDTO | null = null;
  registrationStatus: ClientRequestStatus | null = null;
}

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    Loader,
    FormField
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit, OnDestroy, AfterViewInit {

  requestId!: string;
  token!: string;

  toastr = inject(ToastrService);

  // ClientRequestStatus enum for template
  ClientRequestStatus = ClientRequestStatus;

  individualApiStore = inject(IndividualApiStore);
  individual = linkedSignal(() => this.individualApiStore.data());

  organisationApiStore = inject(OrganisationApiStore);

  clientRequestApiStore = inject(ClientRequestApiStore);
  route = inject(ActivatedRoute)

  tokenConfirmed = computed(() => this.clientRequestApiStore.tokenConfirmed());
  identityConfirmationToken = computed(() => this.clientRequestApiStore.identityConfirmationToken());

  requestEntityLoaded = computed(() => {
    const individualLoaded = this.individualApiStore.registrationIndividualLoaded();
    const organisationLoaded = this.organisationApiStore.registrationOrganisationLoaded();
    return individualLoaded || organisationLoaded;
  });

  registerSignal = signal<RegisterParams>(new RegisterParams());

  registerForm = form(this.registerSignal, (path) => {
    required(path.identificationType, { message: 'Please select organisation or individual' });
    required(path.identificationNumber, { message: 'Identification number is required' });
    required(path.registrationStatus, { message: 'Please select registration status' });
  });

  loading = computed(() => this.clientRequestApiStore.loading() || this.individualApiStore.loading() || this.organisationApiStore.loading());
  loaderMessage = computed(() => {
    if (this.clientRequestApiStore.loading()) {
      return this.clientRequestApiStore.loaderMessage();
    } else if (this.individualApiStore.loading()) {
      return this.individualApiStore.loaderMessage();
    } else if (this.organisationApiStore.loading()) {
      return this.organisationApiStore.loaderMessage();
    } else {
      return '';
    }
  });

  @ViewChild('stepper') stepper!: MatStepper;

  constructor() {

    effect(() => {
      if (this.identityConfirmationToken().length > 0) {

        console.log('IDENTITY CONFIRMATION TOKEN:', this.identityConfirmationToken());

      }
    });

    effect(() => {
      if (this.individual()) {
        console.log('LOADED INDIVIDUAL:', this.individual());
        this.registerSignal.update((data) => ({
          ...data,
          individual: this.individual()
        }));

        if (this.individual()?.id) {
          this.toastr.success('Individual details loaded successfully', 'Success');
        }
      }
    });

    effect(() => {
      if (this.organisationApiStore.data()) {
        console.log('LOADED ORGANISATION:', this.organisationApiStore.data());

        this.registerSignal.update((data) => ({
          ...data,
          organisation: this.organisationApiStore.data()
        }));

        if (this.organisationApiStore.data()?.id) {
          this.toastr.success('Organisation details loaded successfully', 'Success');
        }
      }
    });

    effect(() => {
      if (this.requestEntityLoaded()) {

        console.log('REQUEST ENTITY LOADED, ADVANCING STEPPER');
        // this.stepper.next();
      }
    });

  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.requestId = params['requestId'];
    });

    this.route.queryParams.subscribe(params => {

      this.token = params['token'];
    });
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    if (this.requestId && this.token) {

      console.log('CONFIRMING TOKEN WITH REQUEST ID:', this.requestId, ' AND TOKEN:', this.token);

      this.clientRequestApiStore.confirmToken({ requestId: this.requestId, token: this.token });
    }
  }

  finish() { }

  confirmIdentification(stepper: MatStepper) {
    const params = this.registerSignal();
    const type = params.identificationType?.toString().trim();
    const id = (params.identificationNumber || '').toString().trim();

    this.individualApiStore.loadRequestIndividual({
      requestId: this.requestId,
      identityConfirmationToken: this.identityConfirmationToken(),
      identityNo: this.registerSignal().identificationNumber || ''
    });

    stepper.next();
  }

  detailsConfirmed(stepper: MatStepper) {
    stepper.next();
  }

  submitRegistration() {

    Swal.fire({
      title: 'Are you sure?',
      text: `You have selected to ${this.registerSignal().registrationStatus == ClientRequestStatus.ACCEPTED ? 'accept' : 'reject'}. This action cannot be undone.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientRequestApiStore.updateStatus({
          id: this.requestId,
          status: this.registerSignal().registrationStatus!
        });
        Swal.fire('Detached!', 'The document type has been detached from organisation documents.', 'success');
      }
    })
  }
}
