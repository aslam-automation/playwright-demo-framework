import { BaseApi } from './api.base.service.js';
import { apiPaths } from '../paths.api.js';

export class UserApi extends BaseApi {
  async getUsers() {
    return this.apiClient.get(apiPaths.users);
  }

  async createUser(payload) {
    return this.apiClient.post(apiPaths.users, payload);
  }

  async getUserById(id) {
    return this.apiClient.get(`${apiPaths.users}/${id}`);
  }
}
