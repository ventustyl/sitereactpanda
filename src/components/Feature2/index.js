import React from 'react';

import { Sele, Mat, Contai, Ori, Fond, Thema, Thema2, Sele1, Ali, Feature2Global } from './Feature2Elements.js';


function Feature2() {
    return (
        <Feature2Global>
            <Ali>
                <Sele> Sélection d'été</Sele>
                <Sele1> Préparer les beaux jours</Sele1>
            </Ali>
            <Contai>
                <Thema>
                    <Fond>
                        <Mat>Thé Matcha cérémonie bio</Mat>
                        <Ori>Originaire du Japon</Ori>
                    </Fond>
                </Thema>
                <Thema2>
                    <Fond>
                        <Mat>Fouet à Matcha en bamboo</Mat>
                        <Ori>En bamboo naturel</Ori>
                    </Fond>
                </Thema2>
                <Thema2>
                    <Fond>
                        <Mat>Fouet à Matcha en bamboo</Mat>
                        <Ori>En bamboo naturel</Ori>
                    </Fond>
                </Thema2>
            </Contai>
        </Feature2Global>
    );
}

export default Feature2;
