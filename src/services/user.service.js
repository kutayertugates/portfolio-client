import { apiRequest } from '@/api/client'

export const UserService = {
    async getById(id) {
        return await apiRequest('/user/' + id)
    }
}
