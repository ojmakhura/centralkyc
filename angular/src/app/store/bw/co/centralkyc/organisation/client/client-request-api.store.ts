import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { ClientRequestDTO } from '@app/model/bw/co/centralkyc/organisation/client/client-request-dto';
import { ClientRequestApi } from '@app/service/bw/co/centralkyc/organisation/client/client-request-api';
import { ClientRequestStatus } from '@app/model/bw/co/centralkyc/organisation/client/client-request-status';
import { ClientRequestSearchCriteria } from '@app/model/bw/co/centralkyc/organisation/client/client-request-search-criteria';

export type ClientRequestApiState = AppState<ClientRequestDTO, ClientRequestDTO> & {};

const initialState: ClientRequestApiState = {
  data: new ClientRequestDTO(),
  dataList: [],
  dataPage: new Page<any>(),
  searchCriteria: new SearchObject<any>(),
  loading: false,
  success: false,
  messages: [],
  loaderMessage: '',
  details: '',
  error: false,
};

export const ClientRequestApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const clientRequestApi = inject(ClientRequestApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      downloadRequestTemplate: rxMethod<void>(
        switchMap(() => {
          patchState(store, { loading: true, loaderMessage: 'Downloading template ...' });
          return clientRequestApi.downloadRequestTemplate().pipe(
            tapResponse({
              next: (response: Blob | any) => {
                patchState(store, {
                  // data: response,
                  loading: false,
                  success: true,
                  messages: ['Template downloaded successfully!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.message || 'An error occurred while downloading the template'],
                });
              },
            }),
          );
        }),
      ),
      findByDocument: rxMethod<{ documentId: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.findByDocument(data.documentId).pipe(
            tapResponse({
              next: (response: ClientRequestDTO[] | any[]) => {
                patchState(store, {
                  dataList: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      findByDocumentPaged: rxMethod<{ documentId: string | any; pageNumber: number | any; pageSize: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.findByDocumentPaged(data.documentId, data.pageNumber, data.pageSize).pipe(
            tapResponse({
              next: (response: Page<ClientRequestDTO> | any) => {
                patchState(store, {
                  dataPage: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      findById: rxMethod<{ id: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.findById(data.id).pipe(
            tapResponse({
              next: (response: ClientRequestDTO | any) => {
                patchState(store, {
                  data: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      findByIndividual: rxMethod<{ organisationId: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.findByIndividual(data.organisationId).pipe(
            tapResponse({
              next: (response: ClientRequestDTO[] | any[]) => {
                patchState(store, {
                  dataList: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      findByIndividualPaged: rxMethod<{
        organisationId: string | any;
        pageNumber: number | any;
        pageSize: number | any;
      }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.findByIndividualPaged(data.organisationId, data.pageNumber, data.pageSize).pipe(
            tapResponse({
              next: (response: Page<ClientRequestDTO> | any) => {
                patchState(store, {
                  dataPage: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      findByOrganisation: rxMethod<{ organisationId: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.findByOrganisation(data.organisationId).pipe(
            tapResponse({
              next: (response: ClientRequestDTO[] | any[]) => {
                patchState(store, {
                  dataList: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      findByOrganisationPaged: rxMethod<{
        organisationId: string | any;
        pageNumber: number | any;
        pageSize: number | any;
      }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.findByOrganisationPaged(data.organisationId, data.pageNumber, data.pageSize).pipe(
            tapResponse({
              next: (response: Page<ClientRequestDTO> | any) => {
                patchState(store, {
                  dataPage: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      findByStatus: rxMethod<{ status: ClientRequestStatus | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.findByStatus(data.status).pipe(
            tapResponse({
              next: (response: ClientRequestDTO[] | any[]) => {
                patchState(store, {
                  dataList: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      findByStatusPaged: rxMethod<{
        status: ClientRequestStatus | any;
        pageNumber: number | any;
        pageSize: number | any;
      }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.findByStatusPaged(data.status, data.pageNumber, data.pageSize).pipe(
            tapResponse({
              next: (response: Page<ClientRequestDTO> | any) => {
                patchState(store, {
                  dataPage: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      getAll: rxMethod<void>(
        switchMap(() => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.getAll().pipe(
            tapResponse({
              next: (response: ClientRequestDTO[] | any[]) => {
                patchState(store, {
                  dataList: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      getAllPaged: rxMethod<{ pageNumber: number | any; pageSize: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.getAllPaged(data.pageNumber, data.pageSize).pipe(
            tapResponse({
              next: (response: Page<ClientRequestDTO> | any) => {
                patchState(store, {
                  dataPage: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      pagedSearch: rxMethod<{ criteria: SearchObject<ClientRequestSearchCriteria> | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.pagedSearch(data.criteria).pipe(
            tapResponse({
              next: (response: Page<ClientRequestDTO> | any) => {
                patchState(store, {
                  dataPage: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      remove: rxMethod<{ id: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.remove(data.id).pipe(
            tapResponse({
              next: (response: boolean | any) => {
                patchState(store, {
                  data: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      save: rxMethod<{ clientRequest: ClientRequestDTO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.save(data.clientRequest).pipe(
            tapResponse({
              next: (response: ClientRequestDTO | any) => {
                patchState(store, {
                  data: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      search: rxMethod<{ criteria: SearchObject<ClientRequestSearchCriteria> | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.search(data.criteria).pipe(
            tapResponse({
              next: (response: ClientRequestDTO[] | any[]) => {
                patchState(store, {
                  dataList: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
      uploadRequests: rxMethod<{ file: File | any; organisationId: string }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return clientRequestApi.uploadRequests(data.file, data.organisationId).pipe(
            tapResponse({
              next: (response: Page<ClientRequestDTO> | any) => {
                patchState(store, {
                  dataPage: response,
                  loading: false,
                  success: true,
                  messages: ['Success!!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  status: error?.status || 0,
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                });
              },
            }),
          );
        }),
      ),
    };
  }),
);
