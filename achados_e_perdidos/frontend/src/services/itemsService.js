import api from './api'

export const getItems = () => api.get('/itens')
export const getItemById = (id) => api.get(`/itens/${id}`)
export const createItem = (data) => api.post('/itens', data)
export const updateItem = (id, data) => api.put(`/itens/${id}`, data)
export const deleteItem = (id) => api.delete(`/itens/${id}`)
