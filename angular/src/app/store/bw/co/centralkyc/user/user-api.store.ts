
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { AppState } from '@app/store/app-state';
import { SearchObject } from '@app/model/search-object';
import { Page } from '@app/model/page.model';
import { UserDTO } from '@app/model/bw/co/centralkyc/user/user-dto';
import { UserApi } from '@app/service/bw/co/centralkyc/user/user-api';
import { RestApiResponse } from '@app/model/rest-api-response.model';

export type UserApiState = AppState<any, any> & {};

const initialState: UserApiState = {
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

export const UserApiStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any) => {
    const userApi = inject(UserApi);
    return {
      reset: () => {
        patchState(store, initialState);
      },
      addRole: rxMethod<{userId: string | any , role: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return userApi.addRole(data.userId, data.role, ).pipe(
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
      changePassword: rxMethod<{userId: string | any , newPassword: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return userApi.changePassword(data.userId, data.newPassword, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<string | any>) => {
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
      findByBranchId: rxMethod<{branchId: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return userApi.findByBranchId(data.branchId, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<UserDTO[] | any[]>) => {
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
      findByBranchName: rxMethod<{branch: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return userApi.findByBranchName(data.branch, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<UserDTO[] | any[]>) => {
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
      findByClientRoles: rxMethod<{roles: Set<string> | any , clientId: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return userApi.findByClientRoles(data.roles, data.clientId, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<UserDTO[] | any[]>) => {
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
      findByOrganisationId: rxMethod<{organisationId: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return userApi.findByOrganisationId(data.organisationId, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<UserDTO[] | any[]>) => {
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
      findByOrganisationName: rxMethod<{organisation: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return userApi.findByOrganisationName(data.organisation, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<UserDTO[] | any[]>) => {
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
      findByRealmRoles: rxMethod<{roles: Set<string> | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return userApi.findByRealmRoles(data.roles, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<UserDTO[] | any[]>) => {
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
      findUserById: rxMethod<{userId: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return userApi.findUserById(data.userId, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<UserDTO | any>) => {
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
      loadUsers: rxMethod<void>(
        switchMap(() => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return userApi.loadUsers().pipe(
            tapResponse({
              next: (response: RestApiResponse<UserDTO[] | any[]>) => {
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
      removeRole: rxMethod<{userId: string | any , role: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return userApi.removeRole(data.userId, data.role, ).pipe(
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
      saveUser: rxMethod<{user: UserDTO | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return userApi.saveUser(data.user, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<UserDTO | any>) => {
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
          return userApi.search(data.criteria, ).pipe(
            tapResponse({
              next: (response: RestApiResponse<UserDTO[] | any[]>) => {
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
      updateUserName: rxMethod<{userId: string | any , username: string | any }>(
        switchMap((data: any) => {
          patchState(store, { loading: true, loaderMessage: 'Loading ...' });
          return userApi.updateUserName(data.userId, data.username, ).pipe(
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
    }
  }),
);
