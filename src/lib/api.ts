// API クライアント設定
import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || 'v1'

export const apiClient = axios.create({
    baseURL: `${API_BASE_URL}/api/${API_VERSION}`,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
})

// レスポンスインターセプター
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error)
        return Promise.reject(error)
    }
)

// API Functions
export const profileApi = {
    get: () => apiClient.get('/profile'),
    update: (data: any) => apiClient.put('/profile', { profile: data }),
}

export const skillsApi = {
    getAll: () => apiClient.get('/skills'),
    get: (id: number) => apiClient.get(`/skills/${id}`),
    create: (data: any) => apiClient.post('/skills', { skill: data }),
    update: (id: number, data: any) => apiClient.put(`/skills/${id}`, { skill: data }),
    delete: (id: number) => apiClient.delete(`/skills/${id}`),
}

export const projectsApi = {
    getAll: () => apiClient.get('/projects'),
    get: (id: number) => apiClient.get(`/projects/${id}`),
    create: (data: any) => apiClient.post('/projects', { project: data }),
    update: (id: number, data: any) => apiClient.put(`/projects/${id}`, { project: data }),
    delete: (id: number) => apiClient.delete(`/projects/${id}`),
}

export const healthApi = {
    check: () => apiClient.get('/health'),
}