import Head from "next/head";
import { Footer } from "../../components/commons/Footer";
import { Menu } from "../../components/commons/Menu";
import { Box, Text, theme } from "../../theme/components";
import { cmsService } from "../../infra/cms/cmsService";
import { renderNodeRule, StructuredText } from "react-datocms";
import { isHeading } from "datocms-structured-text-utils";
import { pageHOC } from "../../components/wrappers/pageHOC";
import CMSProvider from "../../infra/cms/CMSProvider";
import { CMSSectionRender } from "../../infra/cms/CMSSectionRender";

export async function getStaticPaths() {
  const pathsQuery = `
query($first:IntType,$skip:IntType){
 allContentFaqQuestions(first:$first,skip:$skip){
  id
  title
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
  //console.log(">>>FAQQuestionScreen teste allContentFaqQuestions <<<", data.allContentFaqQuestions);

  const paths1 = data.allContentFaqQuestions.map(({ id }) => {
    return {
      params: { id },
    }
  })

  // const paths = "";
  console.log(">>>FAQQuestionScreen teste paths1 <<<", paths1);

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

  return {
    props: {
      cmsContent: data,
      id,
      title: 'Title temp',//data.contentFaqQuestion.title,
      content: 'Content temp',//data.contentFaqQuestion.content,
    },
  };
}

// function FAQQuestionScreen({ props }) {
//   // return <h1>FAQQuestionScreen</h1>;
//   console.log('>>> FAQQuestionScreen///CMSSectionRender <<<',props);
//   <CMSSectionRender pageName="pageFaq" {...props}/>
// }

function FAQQuestionScreen({ cmsContent, props }) {
  console.log("FAQ QUESTION SCREEN cmsContent ==>>  ", props);
  //console.log("FAQ QUESTION SCREEN cmsContent ==>>  ", cmsContent.contentFaqQuestion.title);
  //console.log('footer =>',cmsContent.globalContent.globalFooter.description)

  //console.log('>>FAQ QUESTION SCREEN data <<',cmsContent.allContentFaqQuestions[0].title);
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
            data={cmsContent.contentFaqQuestion.content}
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

          {/* <pre>
            {JSON.stringify(content,null,4)}
          </pre> */}
          {/* <Box dangerouslySetInnerHTML={{ __html: content }} /> */}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default pageHOC(FAQQuestionScreen);
