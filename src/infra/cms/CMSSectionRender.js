import { cmsSections } from "../../components/cmsSections";
import { getCMSContent } from "./CMSProvider"

export function CMSSectionRender({pageName}){
  //${pageName}.pageContent[2].id
  //console.log(getCMSContent(`${pageName}.pageContent[2].description`))
  const sections = getCMSContent(`${pageName}.pageContent`);
  
  return sections.map((sectionProps,id)=>{
    console.log(sectionProps);
    const Component = cmsSections[sectionProps.compomentName];
    return (
    <p key={id}>
      <Component/>
    </p>
    )
  });
}
