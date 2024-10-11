
import { Menu } from "../../components/commons/Menu";
import { Footer } from "../../components/commons/Footer";
import SEOBlocks from "./SEOBlocks";
import PagehomeHerosection from "./PagehomeHerosection";
import PagFaqDisplayQuestions from '../cmsSections/pagFaqDisplayQuestions'
import PagFaqDisplayScreen from "./PagFaqDisplayScreen";
export const cmsSections= {
  
  PagefaqDisplayquestionsectionRecord:(props)=>{
    return <PagFaqDisplayQuestions {...props}/>;
  },
  
  PagefaqDisplayScreeeRecord:(props)=>{
    <PagFaqDisplayScreen {...props}/>
  },

  CommonSeoBlockRecord:(props)=> <SEOBlocks {...props}/>,
  CommonMenuRecord:(props)=> <Menu {...props}/>,
  PagehomeHerosectionRecord:(props)=> <PagehomeHerosection {...props}/>,
  CommonFooterRecord:(props)=><Footer {...props}/>
}
 