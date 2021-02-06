import axios from 'axios';

export function apiCall(method, path, data) {
    return new Promise((resolve,reject) => {
        return axios[method.toLowerCase()](path, data)
            .then(res => {
                let articles = res.data
                return resolve(articles);
            })
            .catch(err => {
                return reject(err)
            })
    })
}