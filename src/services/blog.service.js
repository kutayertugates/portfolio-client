import { apiRequest } from '@/api/client'

export const BlogService = {
    async getBySlug(slug) {
        return await apiRequest("/blogs/slug/" + slug)
    }
}
