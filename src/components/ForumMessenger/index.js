import React from "react";
import {  SectionForums, ArticleProfilSam, ArticleCommentaireSam, ArticleProfilSoumaya, ArticleCommentaireSoumaya, ArticleProfilJulien, ArticleCommentaireJulien , ArticleProfilGwendoline, ArticleCommentaireGwendoline, ArticleProfilStevens, ArticleCommentaireStevens, NomT3, CommT4 } from "./ForumMessengerElements";
import Sam from "../../images/sam.jpg";
import Julien from "../../images/julien.jpg";
import Soumaya from "../../images/soumaya.jpg";
import Gwendoline from "../../images/gwendoline.jpg";
import Stevens from "../../images/stevens.jpg";

export default function Forum() {
  return( <>
  <SectionForums>

    <ArticleProfilSam>    
     <img src={Sam} height="40%" width="40%" alt="Sam" />
    </ArticleProfilSam>   
    <ArticleCommentaireSam>
        <NomT3>Leang Ly</NomT3>
        <CommT4>Quel kiff grâce a panda-tea j'ai pu retrouver les saveurs de mon enfance.</CommT4>
    </ArticleCommentaireSam>

    <ArticleProfilSoumaya>
    <img  src={Soumaya} height="40%" width="40%" alt='Soumaya'/>
    </ArticleProfilSoumaya>
    <ArticleCommentaireSoumaya>
        <NomT3>Soumaya</NomT3>
        <CommT4>j'ai trop kiffée avec mes dattes Oasis.</CommT4>
    </ArticleCommentaireSoumaya>

    <ArticleProfilStevens>
   <img  src={Stevens}  height="40%" width="40%" alt='Stevens'/>
    </ArticleProfilStevens>
    <ArticleCommentaireStevens>
        <NomT3>Stevens</NomT3>
        <CommT4>Thé 2 kalité supèrieur,g guéri mais rumatizme est réussi miEu mendormire. G done 1 note de 5 étoiles</CommT4>
    </ArticleCommentaireStevens>

    <ArticleProfilJulien>
    <img  src={Julien}  height="40%" width="40%" alt='Julien' />
    </ArticleProfilJulien>
    <ArticleCommentaireJulien>
        <NomT3>Julien</NomT3>
        <CommT4>Lorem5000</CommT4>
    </ArticleCommentaireJulien>

    <ArticleProfilGwendoline>
    <img  src={Gwendoline}  height="40%" width="40%" alt='Gwendoline'/>
    </ArticleProfilGwendoline>
    <ArticleCommentaireGwendoline>
        <NomT3>Gwendoline</NomT3>
        <CommT4>Produit de qualité livraison rapide je recommande cette boutique !!!</CommT4>
    </ArticleCommentaireGwendoline>

   

  </SectionForums>   
  </>);
}
