
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { KycInvoiceDTO } from '@app/model/bw/co/centralkyc/invoice/kyc-invoice-dto';
import { KycInvoiceApi } from '@app/service/bw/co/centralkyc/invoice/kyc-invoice-api';
import { RestApiResponse } from '@app/model/rest-api-response.model';

export type KycInvoiceApiState = AppState<any, any> & {};

const initialState: KycInvoiceApiState = {
  data: null,
  dataList: [],
  dataPage: new Page<any>(),
  searchCriteria: new SearchObject<any>(),
  loading: false,
  success: false,
  messages: [],
  loaderMessage: '',
  details: '',
  error: false
};

export const KycInvoiceApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const kycInvoiceApi = inject(KycInvoiceApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return kycInvoiceApi.findById(data.id, ).pipe(
            tapResponse({
              next: (response: KycInvoiceDTO | any) => {
                patchState(
                  store,
                  {
                    data: response,
                    loading: false,
                    success: true,
                    messages: [ 'Success!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, {
                    loading: false,
                    success: false,
                    error: true,
                    messages: [error.message || 'An error occurred'],
                  }
                );
              },
            }),
          );
        }),
      ),
      getAll: rxMethod<void>(
        switchMap(() => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return kycInvoiceApi.getAll().pipe(
            tapResponse({
              next: (response: KycInvoiceDTO[] | any[]) => {
                patchState(
                  store,
                  {
                    dataList: response,
                    loading: false,
                    success: true,
                    messages: [ 'Success!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, {
                    loading: false,
                    success: false,
                    error: true,
                    messages: [error.message || 'An error occurred'],
                  }
                );
              },
            }),
          );
        }),
      ),
      getAllPaged: rxMethod<{pageNumber: number | any , pageSize: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return kycInvoiceApi.getAllPaged(data.pageNumber, data.pageSize, ).pipe(
            tapResponse({
              next: (response: Page<KycInvoiceDTO> | any) => {
                patchState(
                  store,
                  {
                    dataPage: response,
                    loading: false,
                    success: true,
                    messages: [ 'Success!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, {
                    loading: false,
                    success: false,
                    error: true,
                    messages: [error.message || 'An error occurred'],
                  }
                );
              },
            }),
          );
        }),
      ),
      pagedSearch: rxMethod<{criteria: string | any , pageNumber: number | any , pageSize: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return kycInvoiceApi.pagedSearch(data.criteria, data.pageNumber, data.pageSize, ).pipe(
            tapResponse({
              next: (response: Page<KycInvoiceDTO> | any) => {
                patchState(
                  store,
                  {
                    dataPage: response,
                    loading: false,
                    success: true,
                    messages: [ 'Success!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, {
                    loading: false,
                    success: false,
                    error: true,
                    messages: [error.message || 'An error occurred'],
                  }
                );
              },
            }),
          );
        }),
      ),
      remove: rxMethod<{id: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return kycInvoiceApi.remove(data.id, ).pipe(
            tapResponse({
              next: (response: boolean | any) => {
                patchState(
                  store,
                  {
                    data: response,
                    loading: false,
                    success: true,
                    messages: [ 'Success!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, {
                    loading: false,
                    success: false,
                    error: true,
                    messages: [error.message || 'An error occurred'],
                  }
                );
              },
            }),
          );
        }),
      ),
      save: rxMethod<{invoice: KycInvoiceDTO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return kycInvoiceApi.save(data.invoice, ).pipe(
            tapResponse({
              next: (response: KycInvoiceDTO | any) => {
                patchState(
                  store,
                  {
                    data: response,
                    loading: false,
                    success: true,
                    messages: [ 'Success!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, {
                    loading: false,
                    success: false,
                    error: true,
                    messages: [error.message || 'An error occurred'],
                  }
                );
              },
            }),
          );
        }),
      ),
      search: rxMethod<{criteria: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return kycInvoiceApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (response: KycInvoiceDTO[] | any[]) => {
                patchState(
                  store,
                  {
                    dataList: response,
                    loading: false,
                    success: true,
                    messages: [ 'Success!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, {
                    loading: false,
                    success: false,
                    error: true,
                    messages: [error.message || 'An error occurred'],
                  }
                );
              },
            }),
          );
        }),
      ),
    }
  }),
);
