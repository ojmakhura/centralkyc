
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { KycRecordDTO } from '@app/model/bw/co/centralkyc/individual/kyc/kyc-record-dto';
import { KycRecordApi } from '@app/service/bw/co/centralkyc/individual/kyc/kyc-record-api';
import { RestApiResponse } from '@app/model/rest-api-response.model';

export type KycRecordApiState = AppState<any, any> & {};

const initialState: KycRecordApiState = {
  data: null,
  dataList: [],
  dataPage: new Page<any>(),
  searchCriteria: new SearchObject<any>(),
  status: 0,
  loading: false,
  success: false,
  messages: [],
  loaderMessage: '',
  details: '',
  error: false
};

export const KycRecordApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const kycRecordApi = inject(KycRecordApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return kycRecordApi.findById(data.id, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<KycRecordDTO | any>) => {
                patchState(
                  store, 
                  {
                    data: response?.data,
                    loading: false, 
                    status: (response?.status) ,
                    success: true, 
                    messages: [response.message || 'Success!!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, { 
                    status: (error?.status || 0), 
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
      findByIdentityNo: rxMethod<{identityNo: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return kycRecordApi.findByIdentityNo(data.identityNo, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<KycRecordDTO[] | any[]>) => {
                patchState(
                  store, 
                  {
                    dataList: response?.data, 
                    loading: false, 
                    status: (response?.status) ,
                    success: true, 
                    messages: [response.message || 'Success!!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, { 
                    status: (error?.status || 0), 
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
      findByIndividual: rxMethod<{individualId: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return kycRecordApi.findByIndividual(data.individualId, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<KycRecordDTO[] | any[]>) => {
                patchState(
                  store, 
                  {
                    dataList: response?.data, 
                    loading: false, 
                    status: (response?.status) ,
                    success: true, 
                    messages: [response.message || 'Success!!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, { 
                    status: (error?.status || 0), 
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
          return kycRecordApi.getAll().pipe(
            tapResponse({
              next: (response: RestApiResponse<KycRecordDTO[] | any[]>) => {
                patchState(
                  store, 
                  {
                    dataList: response?.data, 
                    loading: false, 
                    status: (response?.status) ,
                    success: true, 
                    messages: [response.message || 'Success!!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, { 
                    status: (error?.status || 0), 
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
          return kycRecordApi.getAllPaged(data.pageNumber, data.pageSize, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<Page<KycRecordDTO> | any>) => {
                patchState(
                  store, 
                  {
                    dataPage: response?.data,
                    loading: false, 
                    status: (response?.status) ,
                    success: true, 
                    messages: [response.message || 'Success!!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, { 
                    status: (error?.status || 0), 
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
          return kycRecordApi.pagedSearch(data.criteria, data.pageNumber, data.pageSize, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<Page<KycRecordDTO> | any>) => {
                patchState(
                  store, 
                  {
                    dataPage: response?.data,
                    loading: false, 
                    status: (response?.status) ,
                    success: true, 
                    messages: [response.message || 'Success!!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, { 
                    status: (error?.status || 0), 
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
          return kycRecordApi.remove(data.id, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<boolean | any>) => {
                patchState(
                  store, 
                  {
                    data: response?.data,
                    loading: false, 
                    status: (response?.status) ,
                    success: true, 
                    messages: [response.message || 'Success!!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, { 
                    status: (error?.status || 0), 
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
      save: rxMethod<{kycRecord: KycRecordDTO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return kycRecordApi.save(data.kycRecord, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<KycRecordDTO | any>) => {
                patchState(
                  store, 
                  {
                    data: response?.data,
                    loading: false, 
                    status: (response?.status) ,
                    success: true, 
                    messages: [response.message || 'Success!!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, { 
                    status: (error?.status || 0), 
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
          return kycRecordApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<KycRecordDTO[] | any[]>) => {
                patchState(
                  store, 
                  {
                    dataList: response?.data, 
                    loading: false, 
                    status: (response?.status) ,
                    success: true, 
                    messages: [response.message || 'Success!!'],
                    error: false,
                  }
                );
              },
              error: (error: any) => {
                patchState(
                  store, { 
                    status: (error?.status || 0), 
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
