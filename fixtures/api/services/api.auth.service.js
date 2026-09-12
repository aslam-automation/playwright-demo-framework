import { BaseApi } from './api.base.service.js';
import { apiPaths } from '../paths.api.js';

export class AuthApi extends BaseApi {
  async login(username, password) {
    return this.apiClient.post(apiPaths.auth.login, {
      username,
      password,
    });
  }

  async me() {
    return this.apiClient.get(apiPaths.auth.me);
  }
}
