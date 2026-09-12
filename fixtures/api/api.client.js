import { config } from '../../config/api.config.cjs';

export class ApiClient {
  constructor(request, baseURL = config.baseURL) {
    this.request = request;
    this.baseURL = baseURL ? baseURL.replace(/\/$/, '') : '';
    this.defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  setAuthToken(token) {
    if (!token) {
      delete this.defaultHeaders.Authorization;
      return;
    }
    this.defaultHeaders.Authorization = `Bearer ${token}`;
  }

  _mergeOptions(options = {}) {
    const headers = { ...(options.headers || {}), ...this.defaultHeaders };
    return { ...options, headers };
  }

  _buildUrl(path) {
    if (!path) return this.baseURL;
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `${this.baseURL}${path.startsWith('/') ? '' : '/'}${path}`;
  }

  async get(path, options = {}) {
    const requestOptions = this._mergeOptions(options);
    return this.request.get(this._buildUrl(path), requestOptions);
  }

  async post(path, data, options = {}) {
    const requestOptions = this._mergeOptions({ ...options, data });
    return this.request.post(this._buildUrl(path), requestOptions);
  }

  async put(path, data, options = {}) {
    const requestOptions = this._mergeOptions({ ...options, data });
    return this.request.put(this._buildUrl(path), requestOptions);
  }

  async delete(path, options = {}) {
    const requestOptions = this._mergeOptions(options);
    return this.request.delete(this._buildUrl(path), requestOptions);
  }

  async json(response) {
    try {
      return await response.json();
    } catch (e) {
      return null;
    }
  }
}
