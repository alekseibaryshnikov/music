import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs, selectSongs } from '../../redux/features/songs';
import { Song } from './Song';

const Songs: React.FC = () => {
    const styles = {
        component: {
            border: '1px solid #c6c6c6',
            borderRadius: '5px',
            margin: '5px'
        }
    };

    const dispatch = useDispatch();
    const songs = useSelector(selectSongs);

    useEffect(() => {
        dispatch(fetchSongs())
    }, [dispatch])

    return <div style={styles.component}>
        {songs.map((song, idx) => <Song song={song} track={() => { }} background={getBackgroundForSong(idx)} />)}
    </div>
};

function getBackgroundForSong(idx: number): string {
    return idx % 2 === 0 ? '#fff' : '#ececec';
}

export { Songs };