import Head from "next/head";
import { Footer } from "../../components/commons/Footer";
import { Menu } from "../../components/commons/Menu";
import { Box, Text, theme } from "../../theme/components";
import { cmsService } from "../../infra/cms/cmsService";
import { renderNodeRule, StructuredText } from "react-datocms";
import { isHeading } from "datocms-structured-text-utils";
import { pageHOC } from "../../components/wrappers/pageHOC";
 


const extractText = (content) => {
  let text = '';
  // Verifica se o conteúdo tem a estrutura correta e acessa a chave 'value.document'
  if (content?.value?.document?.children) {
    content.value.document.children.forEach((child) => {
      if (child.type === "paragraph" && child.children) {
        child.children.forEach((span) => {
          if (span.type === "span" && span.value) {
            text += span.value;
          }
        });
      }
    });
  }
  return text;
};


export async function getStaticPaths() {
  const pathsQuery = `
query($first:IntType,$skip:IntType){
 allContentFaqQuestions(first:$first,skip:$skip){
  id
  title
  contentQuestion{
      value
    }
}
} 
`;
  const { data } = await cmsService({
    query: pathsQuery,
    variables: {
      first: 100,
      skip: 0,
    },
  });
   
  const paths1 = data.allContentFaqQuestions.map(({ id }) => {
    return {
      params: { id },
    }
  })

   //console.log(">>>FAQQuestionScreen teste paths1 <<<", paths1);

  return {
    paths: paths1,
    fallback: false,
  };
  // return {
  //   paths: [
  //     { params: { id: "YuEOq1NaRrC1I9gdHgttFA" } },
  //     { params: { id: "PWBRiq8VTl6kKbkDMAWiwQ" } },
  //     { params: { id: "Ay6h2U0TQHONKlY7rLmv5Q" } },
  //   ],
  //   fallback: false,
  //   fallback: false,
  // };
}

export async function getStaticProps({ params, preview }) {
   
  const { id } = params;

  const contentQuery = `
query($id:ItemId) {
 contentFaqQuestion(filter:{
  id:{
    eq: $id
  } }){
  id
  title
  contentQuestion{
      value
    }
}
} 
  `;

  const { data } = await cmsService({
    query: contentQuery,
    variables: {
      id: id,
    },
    preview,
  });

  const contentText = extractText(data.contentFaqQuestion.contentQuestion);     
 
  const props = {
    cmsContent: data,
    id,
    faqScreen:'faqScreen',
    title: data.contentFaqQuestion.title,
    content: contentText,//data.contentFaqQuestion.content,
  };
   console.log("FAQ QUESTION SCREEN getStaticProps desc ==>>  ",
    props)
  return {
    props,
  };
}

 
function FAQQuestionScreen({ cmsContent, props }) {
  
;
  //console.log("FAQ QUESTION SCREEN descri ==>>  ", cmsContent.contentFaqQuestion.contentQuestion);
  //console.log('footer =>',cmsContent.globalContent.globalFooter.description)

  //console.log('>>FAQ QUESTION SCREEN data <<',cmsContent.allContentFaqQuestions[0].title);
  //data.contentFaqQuestion.contentQuestion
  //console.log('>>FAQ QUESTION SCREEN cmsContent.contentFaqQuestion.content <<',cmsContent.contentFaqQuestion.contentQuestion);
 
  return (
    <>
      <Head>
        <title>FAQ - Alura</title>
      </Head>

      <Menu />

      <Box
        tag="main"
        styleSheet={{
          flex: 1,
          backgroundColor: theme.colors.neutral.x050,
          paddingTop: theme.space.x20,
          paddingHorizontal: theme.space.x4,
        }}
      >
        <Box
          styleSheet={{
            flexDirection: "column",
            width: "100%",
            maxWidth: theme.space.xcontainer_lg,
            marginHorizontal: "auto",
          }}
        >
          <Text tag="h1" variant="heading1"> 
            {cmsContent.contentFaqQuestion.title}
          </Text>

          <StructuredText
            data={cmsContent.contentFaqQuestion.contentQuestion}
            customNodeRules={[
              renderNodeRule(isHeading, ({ node, children, key }) => {
                // const tag =`h${node.level}`;
                const variant = `heading${node.level}`;

                return (
                  <Text tag={tag} variant={variant} key={key}>
                    {children}
                  </Text>
                );
              }),
            ]}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default pageHOC(FAQQuestionScreen);
