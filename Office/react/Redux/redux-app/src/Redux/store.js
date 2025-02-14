import { configureStore } from '@reduxjs/toolkit'
import counterRedux  from './counter/counterslice'

export const store = configureStore({
  reducer: {
    counter:counterRedux,
  },
})
