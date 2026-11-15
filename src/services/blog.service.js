import { apiRequest } from '@/api/client'

export const BlogService = {
    async getBySlug(slug) {
      return await apiRequest("/blogs/slug/" + slug)
    },

    async getAll(page = 1, limit = 10) {
      return await apiRequest("/blogs?page=" + parseInt(page) + "&limit=" + parseInt(limit))
    }
}
