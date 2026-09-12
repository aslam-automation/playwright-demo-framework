import { BaseApi } from './api.base.service.js';

export class AuthApi extends BaseApi {
  async login(username, password) {
    return this.apiClient.post(process.env.API_LOGIN_PATH || '/login', {
      username,
      password,
    });
  }

  async me() {
    return this.apiClient.get(process.env.API_ME_PATH || '/me');
  }
}
