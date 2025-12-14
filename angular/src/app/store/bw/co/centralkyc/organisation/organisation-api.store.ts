import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { OrganisationDTO } from '@app/model/bw/co/centralkyc/organisation/organisation-dto';
import { OrganisationListDTO } from '@app/model/bw/co/centralkyc/organisation/organisation-list-dto';
import { OrganisationApi } from '@app/service/bw/co/centralkyc/organisation/organisation-api';
import { RestApiResponse } from '@app/model/rest-api-response.model';
import { OrganisationSearchCriteria } from '@app/model/bw/co/centralkyc/organisation/organisation-search-criteria';

export type OrganisationApiState = AppState<any, any> & {};

const initialState: OrganisationApiState = {
  data: null,
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

export const OrganisationApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const organisationApi = inject(OrganisationApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      findById: rxMethod<{ id: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return organisationApi.findById(data.id).pipe(
            tapResponse({
              next: (response: OrganisationDTO | any) => {
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
          return organisationApi.getAll().pipe(
            tapResponse({
              next: (response: OrganisationListDTO[] | any[]) => {
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
      getAllPaged: rxMethod<{ pageNumber: number | any; pageSize: number | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return organisationApi.getAllPaged(data.pageNumber, data.pageSize).pipe(
            tapResponse({
              next: (response: Page<OrganisationListDTO> | any) => {
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
      pagedSearch: rxMethod<{ criteria: SearchObject<OrganisationSearchCriteria> | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return organisationApi.pagedSearch(data.criteria).pipe(
            tapResponse({
              next: (response: Page<OrganisationListDTO> | any) => {
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
          return organisationApi.remove(data.id).pipe(
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
      save: rxMethod<{ organisation: OrganisationDTO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return organisationApi.save(data.organisation).pipe(
            tapResponse({
              next: (response: OrganisationDTO | any) => {
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
      search: rxMethod<{ criteria: SearchObject<OrganisationSearchCriteria> | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return organisationApi.search(data.criteria).pipe(
            tapResponse({
              next: (response: OrganisationListDTO[] | any[]) => {
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
    };
  }),
);
