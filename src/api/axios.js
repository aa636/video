import axios from 'axios'
import {localCache} from "./cache";

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://192.168.43.186:8080',
        timeout: 5000
    })

    instance.interceptors.request.use(function (config) {
      config.headers['Content-Type'] = "application/json";
      config.headers.Authorization = localCache.get("token");
      return config;
    }, function (error) {
        return Promise.reject(error);
    });

    instance.interceptors.response.use(function (response) {
      console.log(response);
        return response.data;
    }, function (error) {
        return Promise.reject(error);
    });

    return instance(config)
}
