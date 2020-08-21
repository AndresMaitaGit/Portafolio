import React from 'react';
import './mainHome.css';
import { MarcaLogo } from './components/MarcaLogo';
import { Welcome } from './components/Welcome';
import { Resumen } from './components/Resumen';
import { Cualidades } from './components/Cualidades';

export const MainHome = () => {
    return (
        <div>

                {/* Nombre Mait-A */}
                < MarcaLogo />

                {/* Bienvedido a Mi Portafolio */}
                <Welcome />

                {/* Resumen de quien soy y de que hago */}
                <Resumen />
                {/* Cualidades como programador */}
                <Cualidades />
        </div>
    )
}
