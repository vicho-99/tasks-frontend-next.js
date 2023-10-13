import api from './api';

export function signIn({ form }) {
    return api.post('/auth/sign-in', form);
}