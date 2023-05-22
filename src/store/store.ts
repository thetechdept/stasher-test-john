import { configureStore, PreloadedState, combineReducers } from '@reduxjs/toolkit'

import { api } from '@/apis/api'
import stashpointsReduder from '@/apis/stashpoints/stashpoints-slice'
import searchReduder from '@/apis/search/search-slice'

const rootReducer = combineReducers({
  stashpoints: stashpointsReduder,
  search: searchReduder,
  [api.reducerPath]: api.reducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>

export const setupStore = (preloadedState?: PreloadedState<RootState>) => (
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['FLUSH', 'REHYDRATE', 'PAUSE', 'PERSIST', 'PURGE', 'REGISTER'],
      },
    }).concat(api.middleware),
    preloadedState,
  })
)

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

export type AppStore = ReturnType<typeof setupStore>
