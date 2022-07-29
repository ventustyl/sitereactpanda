import React from "react";
import {FormText, FormH2, FormP, FormBloc, FormInput, FormBouton, FormInputComm,} from "./FormContactElements";
// import Sam from "../../images/sam.jpg";


export default function FormContact() {
  return( 
  <>
  <FormText>
    <FormH2>Contactez-nous</FormH2>
    <FormP>Notre équipe vous répond du lundi au vendredi de 9h à 18H et même parfois plus tard à l'adresse contact@pandatea.fr</FormP>
    <FormP>Pour toute question concernant votre commande pensez à indiquer votre numéro de commande et/ou l'email avec lequel vous avez passé commande.</FormP>
  </FormText>
<FormBloc>
<form>
  <label>
    <FormInput>
    <input placeholder="Nom (obligatoire)" type="text" name="name"  style = {{outline:"none", border :"none", width:"98%", borderColor:"#cfb79b", padding:"1% " }} />
    </FormInput>
    <FormInput>
    <input placeholder="E-mail (obligatoire)" type="text" name="email"  style = {{outline:"none", border :"none", width:"98%", borderColor:"#cfb79b", padding:"1% " }} />
    </FormInput>
    <FormInput>
    <input placeholder="Téléphone" type="text" name="telephone" style = {{outline:"none",border :"none", width:"98%", borderColor:"#cfb79b", padding:"1% " }} />
    </FormInput>
    <FormInputComm>
    <input placeholder="" type="text"  name="commentaires"  style = {{outline:"none", border :"none",height:250, width:"98%", borderColor:"#cfb79b" }}/>
   
    </FormInputComm>
 
  </label>
  <FormBouton>
  <input height="200px"  type="submit" value="ENVOYER"  style = {{border :"none", background:"none", color:"white", height:"40px", fontSize:"16px", fontFamily: "Intel, sans-serif", fontWeight : "700"}}/>
  </FormBouton>
</form>
   
</FormBloc>
  </>);
}
