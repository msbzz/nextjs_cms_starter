
import { theme, Box, Button, Text, Image } from "../../../theme/components";

export default function PagehomeHerosection(props){
  /*Hero Section */ 
  //console.log('PagehomeHerosection ==>',props)
  return (
      <Box
        tag="main"
        styleSheet={{
          flex: 1,
          paddingTop: theme.space.x20,
          paddingHorizontal: theme.space.x4,
          background: `linear-gradient(${theme.colors.primary.x900}, ${theme.colors.primary.x700})`,
          color: theme.colors.neutral.x000,
          display: "flex",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          flexWrap: "nowrap",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          styleSheet={{
            maxWidth: "450px",
          }}
        >
          <Text tag="h1" variant="display1">
            {/* Title */}
            Mergulhe em Tecnologia!
          </Text>
          <Text tag="p" variant="body1">
            {/* Description */}
            Você vai estudar, praticar, discutir e se aprofundar em uma
            plataforma que respira tecnologia.
          </Text>
          {/* CTALink */}
          <Button href="/faq" colorVariant="neutral">
          {/* CTAText */}
            Principais dúvidas
          </Button>
        </Box>

        <Image
          src="https://www.alura.com.br/assets/img/home/homeNova/ilustra-alura-escafandro.1647533643.svg"
          styleSheet={{
            maxWidth: {
              xs: "200px",
              sm: "initial",
            },
            marginVertical: theme.space.x10,
          }}
        />
      </Box>
        
  )
   

  } ;
           
      
