import { Box, Text, Link, Image, theme } from "../../../theme/components";
 

export default function PagFaqDisplayQuestions(props) {
  // Função para extrair texto do conteúdo aninhado em `span`
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

  const categoriesMap = props.categories.map((category) => ({
    id: category.id,
    name: category.title,
    questions: category.question.map((question) => ({
      id: question.id,
      name: question.title,
      content: extractText(question.contentQuestion.value.document), // Extrai o conteúdo
    })),
  }));

  //console.log("+++ categoriesMap +++++ ", categoriesMap);
  const categories = categoriesMap;

  return (
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
          display: "flex",
          gap: theme.space.x4,
          flexDirection: {
            xs: "column",
            md: "row",
          },
          width: "100%",
          maxWidth: theme.space.xcontainer_lg,
          marginHorizontal: "auto",
        }}
      >
        {/* Block: Title Questions */}
        <Box
          styleSheet={{
            flex: 2,
            color: theme.colors.neutral.x900,
          }}
        >
          <Text
            tag="h1"
            variant="heading3"
            dangerouslySetInnerHTML={{
              __html: props.titleFaqs.title,
            }}
          />
          <Text
            styleSheet={{
              color: theme.colors.neutral.x500,
            }}
          >
            Confira aqui respostas para as principais dúvidas de nossos alunos
          </Text>

          <Image
            src="https://www.alura.com.br/assets/img/home/homeNova/ilustra-alura-escafandro.1647533643.svg"
            styleSheet={{
              maxWidth: "200px",
              marginVertical: theme.space.x10,
              marginHorizontal: "auto",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          />
        </Box>

        {/* Block: Questions */}
        <Box
          styleSheet={{
            flex: 3,
          }}
        >
          {categories.map(({ id, name, questions }) => (
            <Box key={id} tag="article">
              <h1>{name}</h1>
              <Box tag="ul">
                {questions.map((question) => (
                  <Box key={question.id} tag="li">
                    <Box tag="article">
                      <Link href={`/faq/${question.id}`}>
                        <Text tag="h2" variant="heading4">{question.name}</Text>
                        {/* <Text>{question.content}</Text> Exibe o conteúdo extraído */}
                      </Link>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
