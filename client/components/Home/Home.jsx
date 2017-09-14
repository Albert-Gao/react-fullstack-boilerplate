import React from 'react';
import HomeIMG from './Home.png'
import styles from './Home.scss';

const Home = () => {
    return (
        <div className={styles.Home}>
            <p>I am home</p>
            <img src={HomeIMG} alt=""/>
        </div>
    );
};

export default Home;
