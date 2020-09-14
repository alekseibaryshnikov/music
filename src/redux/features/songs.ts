import { createSlice } from '@reduxjs/toolkit';
import { getSongs, SongType } from '../../api/someApi';

const slice = createSlice({
    name: 'songs',
    initialState: {
        tracked: -1,
        songList: new Array<SongType>()
    },
    reducers: {
        loadSongs(state, action) {
            state.songList = [...state.songList, ...action.payload].sort((a: SongType, b: SongType) => a.id > b.id ? 1 : -1);
        },
        track(state, action) {
            state.tracked = state.tracked === action.payload ? -1 : action.payload;
        }
    }
});

export const { loadSongs } = slice.actions;
export const { track } = slice.actions;

export const selectSongs = (state: { songs: { songList: Array<SongType> } }) => state.songs.songList;
export const selectTracked = (state: { songs: { tracked: number } }) => state.songs.tracked;

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