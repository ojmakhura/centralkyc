
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { DocumentDTO } from '@app/model/bw/co/centralkyc/document/document-dto';
import { DocumentApi } from '@app/service/bw/co/centralkyc/document/document-api';
import { RestApiResponse } from '@app/model/rest-api-response.model';
import { TargetEntity } from '@app/model/bw/co/centralkyc/target-entity';

export type DocumentApiState = AppState<any, any> & {};

const initialState: DocumentApiState = {
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

export const DocumentApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const documentApi = inject(DocumentApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findByDocumentType: rxMethod<{documentTypeId: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return documentApi.findByDocumentType(data.documentTypeId, ).pipe(
            tapResponse({
              next: (response: DocumentDTO[] | any[]) => {
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
                    messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                  }
                );
              },
            }),
          );
        }),
      ),
      findById: rxMethod<{id: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return documentApi.findById(data.id, ).pipe(
            tapResponse({
              next: (response: DocumentDTO | any) => {
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
              error: (error: DocumentDTO | any) => {
                patchState(
                  store, {
                    loading: false,
                    success: false,
                    error: true,
                    messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                  }
                );
              },
            }),
          );
        }),
      ),
      findByTarget: rxMethod<{target: TargetEntity | any , targetId: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return documentApi.findByTarget(data.target, data.targetId, ).pipe(
            tapResponse({
              next: (response: DocumentDTO[] | any[]) => {
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
                    status: (error?.status || 0),
                    loading: false,
                    success: false,
                    error: true,
                    messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
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
          return documentApi.getAll().pipe(
            tapResponse({
              next: (response: DocumentDTO[] | any[]) => {
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
                    messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
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
          return documentApi.getAllPaged(data.pageNumber, data.pageSize, ).pipe(
            tapResponse({
              next: (response: Page<DocumentDTO> | any) => {
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
              error: (error: Page<DocumentDTO> | any) => {
                patchState(
                  store, {
                    loading: false,
                    success: false,
                    error: true,
                    messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
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
          return documentApi.remove(data.id, ).pipe(
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
                    messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                  }
                );
              },
            }),
          );
        }),
      ),
      save: rxMethod<{document: DocumentDTO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return documentApi.save(data.document, ).pipe(
            tapResponse({
              next: (response: DocumentDTO | any) => {
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
              error: (error: DocumentDTO | any) => {
                patchState(
                  store, {
                    loading: false,
                    success: false,
                    error: true,
                    messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
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
          return documentApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (response: DocumentDTO[] | any[]) => {
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
                    messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
                  }
                );
              },
            }),
          );
        }),
      ),
      upload: rxMethod<{target: TargetEntity | any , targetId: string | any , documentTypeId: string | any , file: File | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return documentApi.upload(data.target, data.targetId, data.documentTypeId, data.file, ).pipe(
            tapResponse({
              next: (response: DocumentDTO | any) => {
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
              error: (error: DocumentDTO | any) => {
                patchState(
                  store, {
                    loading: false,
                    success: false,
                    error: true,
                    messages: [error.error?.message ? error.error.message : error.message || 'An error occurred'],
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
