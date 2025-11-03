
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { DocumentTypeDTO } from '@app/model/bw/co/centralkyc/document/type/document-type-dto';
import { DocumentTypeApi } from '@app/service/bw/co/centralkyc/document/type/document-type-api';
import { RestApiResponse } from '@app/model/rest-api-response.model';

export type DocumentTypeApiState = AppState<any, any> & {};

const initialState: DocumentTypeApiState = {
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

export const DocumentTypeApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const documentTypeApi = inject(DocumentTypeApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{id: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return documentTypeApi.findById(data.id, ).pipe(
            tapResponse({
              next: (response: DocumentTypeDTO | any) => {
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
              error: (error: DocumentTypeDTO | any) => {
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
          return documentTypeApi.getAll().pipe(
            tapResponse({
              next: (response: DocumentTypeDTO[] | any[]) => {
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
          return documentTypeApi.getAllPaged(data.pageNumber, data.pageSize, ).pipe(
            tapResponse({
              next: (response: Page<DocumentTypeDTO> | any) => {
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
              error: (error: Page<DocumentTypeDTO> | any) => {
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
          return documentTypeApi.pagedSearch(data.criteria, data.pageNumber, data.pageSize, ).pipe(
            tapResponse({
              next: (response: Page<DocumentTypeDTO> | any) => {
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
              error: (error: Page<DocumentTypeDTO> | any) => {
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
          return documentTypeApi.remove(data.id, ).pipe(
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
              error: (error: boolean | any) => {
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
      save: rxMethod<{documentType: DocumentTypeDTO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return documentTypeApi.save(data.documentType, ).pipe(
            tapResponse({
              next: (response: DocumentTypeDTO | any) => {
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
              error: (error: DocumentTypeDTO | any) => {
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
          return documentTypeApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (response: DocumentTypeDTO[] | any[]) => {
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
