import api from './api'

export const login = (data) => api.post('/api/login', data)
export const register = (data) => api.post('/api/cadastro', data)