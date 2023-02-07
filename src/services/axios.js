import axios from 'axios';

export const host = 'http://localhost:3000'

const csrfToken = document.querySelector('[name="csrf-token"]') || {
    content: 'no-csrf-token',
};

const instance = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken.content,
        'Access-Control-Allow-Origin': host
    },
    baseURL: host,
});

instance.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

export default instance;