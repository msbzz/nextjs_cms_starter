export default function PagFaqDisplayScreen(props) {


//console.log("FAQ QUESTION SCREEN cmsContent ==>>  ", cmsContent.contentFaqQuestion.title);
//console.log('footer =>',cmsContent.globalContent.globalFooter.description)
//console.log('>>FAQ QUESTION SCREEN data <<',cmsContent.allContentFaqQuestions[0].title);


  // Função para extrair texto do conteúdo aninhado em `span`

  // NOVA !!!
  const extractText = (document) => {
    let text = '';
    document.children.forEach((child) => {
      if (child.type === "paragraph") {
        child.children.forEach((span) => {
          if (span.type === "span") {
            text += span.value;
          }
        });
      }
    });
    return text;
  };



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
            {/* {cmsContent.contentFaqQuestion.title} */}
            TiTULO EM PAGE FAQ DISPLAY SCREEN
          </Text>

          {/* <StructuredText
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
          /> */}

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
