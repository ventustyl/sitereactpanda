import React from 'react';
import { FeatureGlobal,  FeatureDiv, FeatureH2, FeatureP, FeatureBlock ,FeatureBlock1, FeatureBlockText1,FeatureBlockText11, FeatureBlockText12,FeatureBlock2, FeatureBlockText2,FeatureBlockText21, FeatureBlockText22,FeatureBlock3,FeatureBlockText3,FeatureBlockText31, FeatureBlockText32, } from './FeatureElements';



export default function Feature() {
    return (
        <FeatureGlobal> 
            <FeatureDiv> 
                <FeatureH2>          
                    Thés et Infusions bien-être pour toute la famille
                </FeatureH2>
                <FeatureP>
                    100% Biologiques. Sachets en coton mousseline.
                </FeatureP>        
            </FeatureDiv> 
            <FeatureBlock>
                <FeatureBlock1>                       
                    <FeatureBlockText1>
                        <FeatureBlockText11>
                             Démarrer une cure détox
                        </FeatureBlockText11>
                        <FeatureBlockText12>
                            Minceur et Digestion
                        </FeatureBlockText12>
                        </FeatureBlockText1>
                </FeatureBlock1>
                <FeatureBlock2>
                    <FeatureBlockText2>
                        <FeatureBlockText21>
                            Sélection remise en forme
                        </FeatureBlockText21>  
                        <FeatureBlockText22>
                            Arriver en forme pour l'été
                        </FeatureBlockText22>   
                    </FeatureBlockText2>
                </FeatureBlock2>
                <FeatureBlock3>
                    <FeatureBlockText3>
                        <FeatureBlockText31>
                            Tisane pour les enfants
                        </FeatureBlockText31>
                        <FeatureBlockText32>
                            Infusions à deguster en famille
                        </FeatureBlockText32>  
                    </FeatureBlockText3>
                </FeatureBlock3>
            </FeatureBlock>         
        </FeatureGlobal>
    )
}
;