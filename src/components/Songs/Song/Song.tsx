import React from 'react';
import { EyeIcon } from '../../common/icons/EyeIcon';
import styles from './Song.module.css';

export interface SongType {
    id: number,
    band?: string,
    name?: Function
}

interface SongProps {
    song: SongType,
    track: Function,
    trackedSong: number
}

const Song: React.FC<SongProps> = (props: SongProps) => {
    const { song: { id, band, name }, track, trackedSong } = props;

    return <tr className={styles.row} onClick={() => track(id)}>
        <td className='text-center'>{id}</td>
        <td className='text-left'>
            <div className={styles.title}>
                <div>
                    {`${band} - ${name}`}
                </div>
                    {trackedSong === id ? <EyeIcon /> : null}
            </div>
        </td>
    </tr>
};

export { Song };