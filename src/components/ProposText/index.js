import React from 'react';
import { ProposContainer, ProposH1, ProposP, ProposTitre, ProposFlex, ProposCard1, ProposCard2, ProposCard3, ProposCard4, ProposCard5, ProposCard6, ProposDiv } from './ProposTextElements';
import Image1 from '../../images/a propos/the-icon.svg'
import Image2 from '../../images/a propos/etoile-icon.svg'
import Image3 from '../../images/a propos/instagram-icon.svg'
import Image4 from '../../images/a propos/livraison-icon.svg'
import Image5 from '../../images/a propos/generals-faq.svg'
import Image6 from '../../images/a propos/reductions-icon.svg'
const ProposText = () => {
    return (
        <ProposContainer>

            <ProposH1>Qui sommes-nous ?</ProposH1>
            <ProposP>Nous sommes une marque française de thés et infusions à base d'ingrédients naturels et certifiés biologiques par Ecocert. Thibault, fondateur de Panda Tea, est passionné de plantes et docteur en pharmacie.
                Notre mission ? Promouvoir un mode de vie sain et équilibré pour un meilleur bien-être physique et moral.
                Nous sommes une équipe dédiée et passionnée : notre priorité est la satisfaction de notre clientèle.
                Nous ferons toujours tout notre possible pour vous conseiller et vous guider pour trouver les produits Panda Tea qui vous sont les plus adaptés !</ProposP>
            <ProposTitre>Panda Tea c'est :</ProposTitre>
            <ProposFlex>
                <ProposCard1>
                <ProposDiv>
                <img src={Image1} width="20%" height="20%" alt="background" />
                </ProposDiv>
                Des mélanges de plantes 100% bio, pensés pour leurs bienfaits et uniquement des arômes naturels + Des sachets en coton bio cousus à la main et un packaging entièrement recyclable.</ProposCard1>
                <ProposCard2>
                <ProposDiv>
                <img src={Image2} width="20%" height="20%" alt="background" />
                </ProposDiv>
                Des prix exclusifs pour nos revendeurs + Une facilité de paiement en 3 fois sans frais + Pas de budgets annuels ou d’obligations d’achats</ProposCard2>
                <ProposCard3>
                <ProposDiv>
                <img src={Image3} width="20%" height="20%" alt="background" />
                </ProposDiv>
                Une communauté de plus de 60 000 followers sur Instagram en France, Belgique, Luxembourg, Suisse</ProposCard3>
                <ProposCard4>
                <ProposDiv>
                <img src={Image4} width="20%" height="20%" alt="background" />
                </ProposDiv>
                Une livraison rapide en France et en Europe 2 à 4 jours.</ProposCard4>
                <ProposCard5>
                <ProposDiv>
                <img src={Image5} width="20%" height="20%" alt="background" />
                </ProposDiv>
                Une équipe à votre écoute pour vous conseiller au quotidien + Un programme de fidélité pour récompenser nos meilleurs clients</ProposCard5>
                <ProposCard6> 
                <ProposDiv>
                <img src={Image6} width="20%" height="20%" alt="background" />
                </ProposDiv>
                Une marque engagée partenaires de 1% for the Planet</ProposCard6>
            </ProposFlex>
        </ProposContainer>
    );
};

export default ProposText;