export default async function handler(req,res){

  const previousPage = req.headers.referer;


  console.log('previousPage ===> ',previousPage);

   // SE TIVER LIGADO O PREVIEW DESLIGA 
  if(req.preview){
    console.log('SE TIVER LIGADO O PREVIEW DESLIGA')
    res.clearPreviewData();
    res.writeHead(307,{Location:previousPage});
    return res.end();
  }
  
const password ='12345'
if(req.query.password!==password){
  return res.status(401).json({message:'Invalid Password'});
}

  // SE TIVER DESLIGADO O PREVIEW LIGA 
  console.log('SE TIVER DESLIGADO O PREVIEW LIGA')
  res.setPreviewData({});
  res.writeHead(307,{Location:previousPage});
  res.end();
}
