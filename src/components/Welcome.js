import React from 'react';
import './welcome.css';

import * as Icon from 'react-feather';
import ReactAnime from 'react-animejs';

export const Welcome = () => {
    
    const {Anime} = ReactAnime;

    
    return (
        
            <Anime
                initial={[
                    {
                        targets: '.flecha',
                        translateY: -20,
                        direction: 'alternate',
                        loop: true,
                        easing: 'easeInOutSine'
                    }
                ]}
                >
                <div className="welcome">
                    <h1>
                        Bienvenido a mi <span> Portafolio <Icon.ArrowDown className="flecha" strokeWidth= {2.5} size={55} /></span>
                    </h1> 
                </div>
            </Anime>
    )
    
}
