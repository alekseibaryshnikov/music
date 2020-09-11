import React from 'react';

export interface SongType {
    id: number,
    band: string,
    name: Function
}

const styles = {
    row: {
        display: 'flex',
        padding: '5px',
        position: 'relative' as 'relative',
        zIndex: 0
    },
    column: {
        idx: {
            width: '10%'
        },
        title: {
            width: '90%'
        }
    }
};

const Song: React.FC<{ song: SongType, track: Function, background?: string }> = (props: { song: SongType, track: Function, background?: string }) => {
    const { song: { id, band, name }, background, track } = props;

    return <div style={{ background, ...styles.row }} onClick={() => track()}>
        <div style={styles.column.idx}>{id}</div>
        <div style={styles.column.title}>{`${band} - ${name}`}</div>
    </div>
};

export { Song };