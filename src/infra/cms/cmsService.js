

const TOKEN = process.env.NEXT_PUBLIC_CMS_TOKEN;

const globalQuery = `
query{
  globalFooter{
     description
    }
}`;

const BASE_ENDPOINT ='https://graphql.datocms.com/';
const PREVIEW_ENDPOINT ='https://graphql.datocms.com/preview';

export async function cmsService({
  query,
  variables,
  preview
}){
  
 const END_POINT= preview ? PREVIEW_ENDPOINT:BASE_ENDPOINT;
  //console.log('cmsService QUERY  ==>>> ',query)
  try{
    const pageContentResponse= await fetch(END_POINT,{
      method:'POST',
      headers:{
        'Content-type':'application/json',
        'Authorization':'Bearer ' + TOKEN
      },
      body: JSON.stringify({
        query,
        variables,
      })
    })
    .then(async(repostaDoSever)=>{
        const body = await repostaDoSever.json();
        if(!body.errors) return body;
        throw new Error(JSON.stringify(body));
    })
    
    const globalContentResponse= await fetch(END_POINT,{
      method:'POST',
      headers:{
        'Content-type':'application/json',
        'Authorization':'Bearer ' + TOKEN
      },
      body: JSON.stringify({
        query:globalQuery,
      })
    })

    .then(async(repostaDoSever)=>{
        const body = await repostaDoSever.json();
        if(!body.errors) return body;
        throw new Error(JSON.stringify(body));
    })
  
    return{
      data: {
        ...pageContentResponse.data,
        globalContent:{
        ...globalContentResponse.data,
        },
      },
    }
  }
  catch(err){
    throw new Error(err.message);
    
  }

  
}
