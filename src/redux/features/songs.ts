import { createSlice } from '@reduxjs/toolkit';
import { getSongs } from '../../api/someApi';
import { SongType } from '../../components/Songs/Song';

const slice = createSlice({
    name: 'songs',
    initialState: new Array<SongType>(),
    reducers: {
        loadSongs(state, action) {
            return [...state, ...action.payload].sort((a: SongType, b: SongType) => a.id > b.id ? 1 : -1);
        }
    }
});

export const { loadSongs } = slice.actions;

export const selectSongs = (state: { songs: Array<SongType> }) => state.songs;

export const fetchSongs = () => {
    return async (dispatch: Function) => {
        try {
            dispatch(loadSongs(await getSongs()));
        } catch (error) {
            console.error(error);
        }
    };
};

export default slice.reducer;