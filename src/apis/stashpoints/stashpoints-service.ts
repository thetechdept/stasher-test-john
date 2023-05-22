
import queryStringBuilder from '@/helpers/query-string-builder'
import { setStashPoints } from './stashpoints-slice'

import { api } from '../api'

// Define our single API slice object
export const stashpointsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStashpoints: builder.mutation({
      query: (params) => {
        const url = `/v2/stashpoints?${queryStringBuilder(params)}`
        return {
          url,
          method: 'get',
        }
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setStashPoints(data))
        } catch (err) {
          // Error handling
        }
      },
    }),
  }),
})

// Export the auto-generated hook for the `getStashpoints` query endpoint
export const { useGetStashpointsMutation } = stashpointsApi
