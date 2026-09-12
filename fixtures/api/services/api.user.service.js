import { BaseApi } from './api.base.service.js';

export class UserApi extends BaseApi {
  async getUsers() {
    return this.apiClient.get(process.env.API_USERS_PATH || '/users');
  }

  async createUser(payload) {
    return this.apiClient.post(process.env.API_USERS_PATH || '/users', payload);
  }

  async getUserById(id) {
    return this.apiClient.get(`${process.env.API_USERS_PATH || '/users'}/${id}`);
  }
}
