import { configureStore } from '@reduxjs/toolkit';
import songs from './features/songs';

export const Store = configureStore({ reducer: { songs } });