
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { BranchDTO } from '@app/model/bw/co/centralkyc/organisation/branch/branch-dto';
import { BranchApi } from '@app/service/bw/co/centralkyc/organisation/branch/branch-api';
import { RestApiResponse } from '@app/model/rest-api-response.model';

export type BranchApiState = AppState<any, any> & {};

const initialState: BranchApiState = {
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

export const BranchApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const branchApi = inject(BranchApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return branchApi.findById(data.id, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<BranchDTO | any>) => {
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
      findByOrganisation: rxMethod<{organisationId: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return branchApi.findByOrganisation(data.organisationId, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<BranchDTO[] | any[]>) => {
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
      findByOrganisationPaged: rxMethod<{organisationId: string | any , pageNumber: number | any , pageSize: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return branchApi.findByOrganisationPaged(data.organisationId, data.pageNumber, data.pageSize, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<BranchDTO[] | any[]>) => {
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
          return branchApi.getAll().pipe(
            tapResponse({
              next: (response: RestApiResponse<BranchDTO[] | any[]>) => {
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
          return branchApi.getAllPaged(data.pageNumber, data.pageSize, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<Page<BranchDTO> | any>) => {
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
          return branchApi.pagedSearch(data.criteria, data.pageNumber, data.pageSize, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<Page<BranchDTO> | any>) => {
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
          return branchApi.remove(data.id, ).pipe(
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
      save: rxMethod<{branch: BranchDTO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return branchApi.save(data.branch, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<BranchDTO | any>) => {
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
          return branchApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<BranchDTO[] | any[]>) => {
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
