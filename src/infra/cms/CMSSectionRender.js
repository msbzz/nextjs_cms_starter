import { cmsSections } from "../../components/cmsSections";
import { getCMSContent } from "./CMSProvider";

export function CMSSectionRender({ pageName }) {

  //console.log('>>> CMSSectionRender pageName <<<',pageName);
 
  console.log('>>> CMSSectionRender pageName <<<',pageName);

  //${pageName}.pageContent[2].id
  //console.log(getCMSContent(`${pageName}.pageContent[2].description`))
  
  const sections = getCMSContent(`${pageName}.pageContent`);
  
  // console.log('PAGE CONTENT',`${pageName}.pageContent`)
  //console.log('>>>>>> CMSSectionRender  sections <<<',sections);

  return sections.map((sectionProps, id) => {
    console.log('>>> CMSSectionRender sections.map <<<',sectionProps.compomentName);
    const Component = cmsSections[sectionProps.compomentName];
      

    if(!Component) return null;

    return <Component {...sectionProps} key={id} />;
  });
}
