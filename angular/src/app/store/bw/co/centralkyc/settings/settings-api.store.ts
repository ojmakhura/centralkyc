import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { SettingsDTO } from '@app/model/bw/co/centralkyc/settings/settings-dto';
import { SettingsApi } from '@app/service/bw/co/centralkyc/settings/settings-api';
import { RestApiResponse } from '@app/model/rest-api-response.model';
import { TargetEntity } from '@app/model/bw/co/centralkyc/target-entity';
import { DocumentTypePurpose } from '@app/model/bw/co/centralkyc/settings/document-type-purpose';

export type SettingsApiState = AppState<SettingsDTO, SettingsDTO> & {};

const initialState: SettingsApiState = {
  data: {},
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

export const SettingsApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const settingsApi = inject(SettingsApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{ id: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return settingsApi.findById(data.id).pipe(
            tapResponse({
              next: (response: SettingsDTO | any) => {
                patchState(store, {
                  data: response,
                  loading: false,
                  success: true,
                  messages: [ 'Success!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
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
          return settingsApi.getAll().pipe(
            tapResponse({
              next: (response: SettingsDTO[] | any[]) => {
                let dataList = response || [];

                let data = null;
                if (dataList.length > 0) {
                  data = dataList[0];
                }

                patchState(store, {
                  dataList: response,
                  data: data,
                  loading: false,
                  success: true,
                  messages: [ 'Success!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
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
          return settingsApi.getAllPaged(data.pageNumber, data.pageSize).pipe(
            tapResponse({
              next: (response: Page<SettingsDTO> | any) => {
                patchState(store, {
                  dataPage: response,
                  loading: false,
                  success: true,
                  messages: [ 'Success!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
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
      pagedSearch: rxMethod<{ criteria: string | any; pageNumber: number | any; pageSize: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return settingsApi.pagedSearch(data.criteria, data.pageNumber, data.pageSize).pipe(
            tapResponse({
              next: (response: Page<SettingsDTO> | any) => {
                patchState(store, {
                  dataPage: response,
                  loading: false,
                  success: true,
                  messages: [ 'Success!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
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
          return settingsApi.remove(data.id).pipe(
            tapResponse({
              next: (response: boolean | any) => {
                patchState(store, {
                  data: response,
                  loading: false,
                  success: true,
                  messages: [ 'Success!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
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
      save: rxMethod<{ setttings: SettingsDTO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return settingsApi.save(data.setttings).pipe(
            tapResponse({
              next: (response: SettingsDTO | any) => {
                patchState(store, {
                  data: response,
                  loading: false,
                  success: true,
                  messages: [ 'Success!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
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
      search: rxMethod<{ criteria: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return settingsApi.search(data.criteria).pipe(
            tapResponse({
              next: (response: SettingsDTO[] | any[]) => {
                patchState(store, {
                  dataList: response,
                  loading: false,
                  success: true,
                  messages: [ 'Success!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
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
      uploadTemplate: rxMethod<{ template: File; target: TargetEntity }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Uploading template ...' });
          return settingsApi.uploadTemplate(data.template, data.target).pipe(
            tapResponse({
              next: (response: SettingsDTO) => {
                patchState(store, {
                  data: response,
                  loading: false,
                  success: true,
                  messages: [ 'Template uploaded successfully!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.message || 'An error occurred during template upload'],
                });
              },
            }),
          );
        }),
      ),
      attachDocumentType: rxMethod<{ documentTypeId: string; purpose: DocumentTypePurpose }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Attaching document type ...' });
          return settingsApi.attachDocumentType(data.documentTypeId, data.purpose).pipe(
            tapResponse({
              next: (response: SettingsDTO) => {
                patchState(store, {
                  data: response,
                  loading: false,
                  success: true,
                  messages: [ 'Document type attached successfully!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.message || 'An error occurred while attaching document type'],
                });
              },
            }),
          );
        }),
      ),
      detachDocumentType: rxMethod<{ documentTypeId: string; purpose: DocumentTypePurpose }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Detaching document type ...' });
          return settingsApi.detachDocumentType(data.documentTypeId, data.purpose).pipe(
            tapResponse({
              next: (response: SettingsDTO) => {
                patchState(store, {
                  data: response,
                  loading: false,
                  success: true,
                  messages: [ 'Document type detached successfully!'],
                  error: false,
                });
              },
              error: (error: any) => {
                patchState(store, {
                  loading: false,
                  success: false,
                  error: true,
                  messages: [error.message || 'An error occurred while detaching document type'],
                });
              },
            }),
          );
        }),
      ),
    };
  }),
);
