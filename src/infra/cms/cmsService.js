

const TOKEN = process.env.NEXT_PUBLIC_CMS_TOKEN;

export async function cmsService({query}){
   
  const pageContentResponse= await fetch('https://graphql.datocms.com',{
    method:'POST',
    headers:{
      'Content-type':'application/json',
      'Authorization':'Bearer ' + TOKEN
    },
    body: JSON.stringify({
      query
    })
  })
  .then(async(repostaDoSever)=>{
      const body = await repostaDoSever.json();
      return body;
  })

  console.log('pageContentResponse ==> ',pageContentResponse)

  return{
    data:pageContentResponse,
  }  
}
