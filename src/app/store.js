import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import logger from 'redux-logger';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';

export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
=======
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
>>>>>>> 5093073d9fee2a7193f885ed3db1f32a2902f4fd
});
