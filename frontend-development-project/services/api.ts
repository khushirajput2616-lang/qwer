import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8000',
})

export const brandApi = {
  save: (payload: { brandName: string; website: string }) => axios.post('/api/brand', payload),
  socialScan: () => axios.get('/api/social-scan'),
  appScan: () => axios.get('/api/app-scan'),
}
