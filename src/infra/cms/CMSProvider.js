import React from "react";
import get from "lodash/get";
const CMSContext = React.createContext({
  cmsContent:{}
});

export const getCMSContent = (path='')=>{
  const cmsContent=React.useContext(CMSContext).cmsContent;
  
  if(path==='') return cmsContent;

  const outPut = get(cmsContent,path);
  
  if(!outPut) throw new Error(`Não foi possível encontrar a chave "${path}". Reveja sua query e tente novamente.`)
  
  return outPut;
}


export const getCMSContent_V1 = ()=>{
   return  React.useContext(CMSContext).cmsContent;
}
export default function CMSProvider({cmsContent,children}){
   return (
    <CMSContext.Provider value ={{cmsContent}}>
      {children}
    </CMSContext.Provider>
  )
}
