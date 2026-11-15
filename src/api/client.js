import config from '@/config'

export async function apiRequest(endpoint, options = {}) {
    const response = await fetch(
        config.API_BASE_URL + endpoint,
        {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        }
    )

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.message || 'API request failed')
    }

    return result
}
