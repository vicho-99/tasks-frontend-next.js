import api from './api';

export function createTask({ form }) {
    return api.post('/tasks', form);
}

export function getTasks() {
    return api.get('/tasks');
}

export function getTaskById({ id }) {
    return api.get('/tasks/' + id);
}

export function updateTask({ form, id }) {
    return api.patch('/tasks/' + id, form);
}

export function deleteTask({ id }) {
    return api.delete('/tasks/' + id);
}