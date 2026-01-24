import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, computed, inject, Input, OnDestroy, OnInit, signal } from '@angular/core';
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

class RegisterParams {
  identificationType!: string;
  identificationNumber!: string;
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
    Loader,
    FormField
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit, OnDestroy, AfterViewChecked {

  requestId!: string;
  token!: string;

  clientRequestApiStore = inject(ClientRequestApiStore);
  route = inject(ActivatedRoute)

  tokenConfirmed = computed(() => this.clientRequestApiStore.tokenConfirmed());
  identityConfirmationToken = computed(() => this.clientRequestApiStore.identityConfirmationToken());

  registerSignal = signal<RegisterParams>({
    identificationType: '',
    identificationNumber: ''
  });

  registerForm = form(this.registerSignal, (path) => {
    required(path.identificationType, { message: 'Please select organisation or individual' });
    required(path.identificationNumber, { message: 'Identification number is required'});
  });

  constructor() { }

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

  ngAfterViewChecked(): void {
    if(this.requestId && this.token) {

      this.clientRequestApiStore.confirmToken({requestId: this.requestId, token: this.token});
    }
  }

  finish() {}

  confirmIdentification(stepper: MatStepper) {
    const params = this.registerSignal();
    const type = params.identificationType?.toString().trim();
    const id = (params.identificationNumber || '').toString().trim();

    // if (!type) {
    //   console.warn('Entity type not selected');
    //   return;
    // }

    // if (!id) {
    //   console.warn('Identification number is required');
    //   return;
    // }

    // TODO: call backend validation if needed. Advance to next step on success.
    stepper.next();
  }
}
