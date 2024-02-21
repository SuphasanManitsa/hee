import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import Login from './login';
function Hee() {
    return (
        <>
            <a href='/login' onClick={Login}>
                Navigate
            </a><br />

            {/* Using Link from react-router-dom */}
            <img src="https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/426274561_737061525156844_4535569219181556100_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeG1CLdjdjoDwKT0-dNBzXsKgwAvtRa-IiGDAC-1Fr4iIWn3fUNNtxXI7TMcLxJVHI6RAvleuMFA12NFj-kL6Po1&_nc_ohc=rjjlZcvuSjsAX9Q7lIX&_nc_ht=scontent-bkk1-2.xx&oh=00_AfA-8l8suhE3EAv1pgotvxStQoGPt8Lqyuw_KW0j_pzkcA&oe=65D23F09" alt="Hee" />
        </>
    )
}
export default Hee