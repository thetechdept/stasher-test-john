import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api-staging.stasher.com/',
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */

export const api = createApi({
  reducerPath: 'stashpoints-api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Stashpoints'],
  endpoints: () => ({}),
})

export default api
