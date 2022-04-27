import axiosClient from './axiosClient'

const boardAPI = {
  getAll(params) {
    const url = '/boards'
    return axiosClient.get(url, { params })
  },

  get(id) {
    const url = `/boards/${id}`
    return axiosClient.get(url)
  },

  add(data) {
    const url = '/boards'
    return axiosClient.post(url, data)
  },

  update(id, data) {
    const url = `/boards/${id}`
    return axiosClient.patch(url, data)
  },

  delete(id) {
    const url = `/boards/${id}`
    return axiosClient.delete(url)
  },
}
export default boardAPI
