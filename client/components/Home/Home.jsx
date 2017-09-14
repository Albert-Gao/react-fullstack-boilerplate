import React from 'react';
import HomeIMG from './Home.png';
import style from './Home.scss';

function Home() {
    return (
        <div className="Home">
            <p>I am home!</p>
            <img src={HomeIMG} alt="" />
        </div>
    );
}

export default Home;
