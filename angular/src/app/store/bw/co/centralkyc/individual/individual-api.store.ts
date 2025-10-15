
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { IndividualListDTO } from '@app/model/bw/co/centralkyc/individual/individual-list-dto';
import { IndividualDTO } from '@app/model/bw/co/centralkyc/individual/individual-dto';
import { IndividualApi } from '@app/service/bw/co/centralkyc/individual/individual-api';
import { RestApiResponse } from '@app/model/rest-api-response.model';

export type IndividualApiState = AppState<any, any> & {};

const initialState: IndividualApiState = {
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

export const IndividualApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const individualApi = inject(IndividualApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return individualApi.findById(data.id, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<IndividualDTO | any>) => {
                patchState(
                  store, 
                  {
                    data: response?.data,
                    loading: false, 
                    status: (response?.status) ,
                    success: (response?.success || false), 
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
                    messages: [error.error.message || 'An error occurred'], 
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
          return individualApi.getAll().pipe(
            tapResponse({
              next: (response: RestApiResponse<IndividualListDTO[] | any[]>) => {
                patchState(
                  store, 
                  {
                    dataList: response?.data, 
                    loading: false, 
                    status: (response?.status) ,
                    success: (response?.success || false), 
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
                    messages: [error.error.message || 'An error occurred'], 
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
          return individualApi.getAllPaged(data.pageNumber, data.pageSize, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<Page<IndividualListDTO> | any>) => {
                patchState(
                  store, 
                  {
                    dataPage: response?.data,
                    loading: false, 
                    status: (response?.status) ,
                    success: (response?.success || false), 
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
                    messages: [error.error.message || 'An error occurred'], 
                  }
                );
              },
            }),
          );
        }),
      ),
      pagedSearch: rxMethod<{pageNumber: number | any , pageSize: number | any , criteria: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return individualApi.pagedSearch(data.pageNumber, data.pageSize, data.criteria, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<Page<IndividualListDTO> | any>) => {
                patchState(
                  store, 
                  {
                    dataPage: response?.data,
                    loading: false, 
                    status: (response?.status) ,
                    success: (response?.success || false), 
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
                    messages: [error.error.message || 'An error occurred'], 
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
          return individualApi.remove(data.id, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<boolean | any>) => {
                patchState(
                  store, 
                  {
                    data: response?.data,
                    loading: false, 
                    status: (response?.status) ,
                    success: (response?.success || false), 
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
                    messages: [error.error.message || 'An error occurred'], 
                  }
                );
              },
            }),
          );
        }),
      ),
      save: rxMethod<{individual: IndividualDTO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return individualApi.save(data.individual, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<IndividualDTO | any>) => {
                patchState(
                  store, 
                  {
                    data: response?.data,
                    loading: false, 
                    status: (response?.status) ,
                    success: (response?.success || false), 
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
                    messages: [error.error.message || 'An error occurred'], 
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
          return individualApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<IndividualListDTO[] | any[]>) => {
                patchState(
                  store, 
                  {
                    dataList: response?.data, 
                    loading: false, 
                    status: (response?.status) ,
                    success: (response?.success || false), 
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
                    messages: [error.error.message || 'An error occurred'], 
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
