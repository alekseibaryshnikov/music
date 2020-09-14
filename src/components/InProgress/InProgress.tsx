import React from 'react';
import styles from './InProgress.module.css';

const InProgress: React.FC = () => {
    return <div className={`${styles.container } text-center`}>
        <div>Загрузка...</div>
    </div>
}

export { InProgress };