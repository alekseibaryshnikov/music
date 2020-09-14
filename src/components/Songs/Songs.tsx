import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs, selectSongs, selectTracked, track } from '../../redux/features/songs';
import { Song } from './Song/Song';
import styles from './Songs.module.css';
import { InProgress } from '../InProgress/InProgress';

const Songs: React.FC = () => {
    const dispatch = useDispatch();
    const songs = useSelector(selectSongs);
    const trackedSong = useSelector(selectTracked);

    useEffect(() => {
        dispatch(fetchSongs())
    }, [dispatch])

    if (!songs || songs.length === 0) {
        return <><InProgress /></>
    } else {
        return <div className={styles.container}>
            <table className={styles.table}>
                <colgroup>
                    <col width='10%' />
                    <col width='90%' />
                </colgroup>
                <thead className={styles.header}>
                    <tr>
                        <th>ID</th>
                        <th className={styles.left}>Песня</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map(song => <Song key={`${song.id}-${song.band}-${song.name}`} song={song} track={handleTrack.bind(null, song.id, dispatch)} trackedSong={trackedSong} />)}
                </tbody>
            </table>
        </div>
    }


};

function handleTrack(songId: number, dispatch: Function) {
    dispatch(track(songId))
}

export { Songs };