import React, {useEffect, useState} from 'react';
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", ()=> {
            if(window.scrollY > 100){
            handleShow(true);
            }else handleShow(false);

        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])





    return (
        <div className={`nav ${show && "nav__black"}`}>
        <img className="nav__logo" 
        src="https://i.ytimg.com/vi/GV3HUDMQ-F8/maxresdefault.jpg"
        alt="Netflix Logo"
        />
        <img className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        Alt="Avatar"
        />
            
        </div>
    )
}

export default Nav;

