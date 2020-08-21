import React from 'react';
import "./cualidades.css";
import ReactAnime from 'react-animejs';


export const Cualidades = () => {


    const {Anime} = ReactAnime;
    
    return (


        <div className="container">
            <div className="row justify-content-md-center">

                <div className="col-sm-12 col-lg-4  div_img boxAnime_1">
                 <Anime
                    _onMouseEnter={[
                        {
                            targets: ".boxAnime_1",
                            scale: 1.1,
                            duration: 250,
                            easing: "linear"
                        }
                        ]}
                        _onMouseLeave={[
                        {
                            targets: ".boxAnime_1",
                            scale: 1,
                            duration: 250,
                            easing: "linear"
                        }
                    ]}
                    >
                <img  src="../assets/img/pensar.svg" width="130" alt="pensar" />
                    <h6 className="text_Habilidad">Pensamiento Logico</h6>
                 </Anime>
                </div>

                <div className="col-sm-12 col-lg-4  div_img boxAnime_2">
                <Anime
                    _onMouseEnter={[
                        {
                            targets: ".boxAnime_2",
                            scale: 1.1,
                            duration: 250,
                            easing: "linear"
                        }
                        ]}
                        _onMouseLeave={[
                        {
                            targets: ".boxAnime_2",
                            scale: 1,
                            duration: 250,
                            easing: "linear"
                        }
                    ]}
                    >
                <img className="text-center" src="../assets/img/enfoque.svg" width="130" alt="enfoque" />
                    <h6 className="text_Habilidad">Enfoque</h6>
                </Anime>
                </div>

                <div className="col-sm-12 col-lg-4  div_img boxAnime_3" >
                <Anime
                    _onMouseEnter={[
                        {
                            targets: ".boxAnime_3",
                            scale: 1.1,
                            duration: 250,
                            easing: "linear"
                        }
                        ]}
                        _onMouseLeave={[
                        {
                            targets: ".boxAnime_3",
                            scale: 1,
                            duration: 250,
                            easing: "linear"
                        }
                    ]}
                    >
                    <img src="../assets/img/pasion.svg" width="130"  alt="pasion"/>
                    <h6 className="text_Habilidad">Pasión</h6>
                    </Anime>
                </div>
            </div>
        </div>

    )
}
