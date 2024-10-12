# nextjs_cms_starter

- Este projeto é fruto do curso de 'Next.js: trabalhando com um CMS Next.js' da plataforma ALURA

## Introdução

Esse projeto foi ministrado pelo instrutor Mario Souto e faz parte da terceira etapa do curso "Next.js Full Stack: Arquitetura de Componentes Front-end". Nessa fase, foi explorado como construir uma aplicação utilizando Next.js integrada com DatoCMS.
 
 https://www.datocms.com/


  - DatosCms

 <img src="/public/image/datoscms2.gif" alt="datoscms" width="500"/>

## Apresentação do projeto

 - O projeto foi iniciado com um template básico utilizando os componentes apresentados nos projetos anteriores e, ao longo do curso, foram apresentadas todas as etapas para criar uma arquitetura robusta, onde foi conseguido, com base em uma query GraphQL, montar e renderizar uma página de forma dinâmica.

  - Projeto Concluido

 <img src="/public/image/proj2.gif" alt="projeto" width="500"/>


 ## Instalação do Projeto

### 1. Clonar o Repositório

Primeiramente, faça o download do código fonte deste repositório no GitHub utilizando o comando:

```bash
git clone https://github.com/msbzz/nextjs_cms_starter.git
```

### 2. Instalar as Dependências

Navegue até a pasta do projeto e instale todas as dependências necessárias utilizando o **npm** (que é instalado junto com o Node.js):

```bash
cd nextjs_cms_starter
npm install ou yarn install
```

## Aplicativos de Interface de Usuário (IU)

Neste projeto utilizei o **vscode** mas é compatível com qualquer editor de código

- **Visual Studio Code**: Um editor leve e poderoso para desenvolvimento de aplicações web. Você pode baixá-lo [aqui](https://code.visualstudio.com/).


### Executando o Projeto

Estando com seu projeto pronto no datosCMS, as dependências instaladas e as variáveis de ambiente configuradas, você pode iniciar o servidor de desenvolvimento do Next.js com o comando:

```bash
npm run dev ou yarn dev
```

O projeto estará acessível em `http://localhost:3000`  


### Tópicos abordados no curso

- Aqui foi abordade como construir uma aplicação utilizando Next.js integrada com DatoCMS. Iniciamos com um template básico e, ao longo do curso, passamos por todas as etapas para criar uma arquitetura robusta, onde conseguimos, com base em uma query GraphQL, montar e renderizar uma página de forma dinâmica.
 
  - **Funcionalidades e Potencial** 
    - Customizar queries GraphQL e fazer múltiplas consultas para diferentes cenários.
    - Otimizar o código para adaptar ao seu contexto e às necessidades do projeto.
    - Implementar e manipular componentes dinâmicos com o `SectionRender`, além de utilizar HOCs para encapsulamento e gerenciamento de temas e outros providers.

  - **Estrutura e Organização**
    No DatoCMS, organizamos o conteúdo em três tipos principais de modelos:
    1. **Páginas**: Modelos para diferentes telas.
    2. **Conteúdo Global**: Elementos que aparecem em várias páginas, como o footer.
    3. **Conteúdo de Seções**: Blocos específicos que constituem o conteúdo de cada página.

    Com essa estrutura, é possível criar uma "Screen Sample" para definir os componentes que cada tipo de página deve renderizar, o que torna o gerenciamento mais eficiente e flexível.

  - **## Ferramentas Utilizadas**

    Foi apresentado o **API Explorer** do DatoCMS, que permite criar queries e explorar as opções disponíveis de forma interativa. Também foi mencionado o **Prop Explorer**, que é útil para filtrar dados específicos e explorar diferentes atributos dos conteúdos de forma visual

  - **Aprendizados**

    Além de criar páginas e componentes dinâmicos, abordamos técnicas para:
     - Gerar páginas de forma incremental usando `getStaticPaths` e manipular o comportamento com `fallback`.
     - Aproveitar recursos como o `pageHOC` para encapsular lógicas comuns e reutilizáveis.
     - Integrar o DatoCMS de forma que mesmo quem não é especialista em GraphQL possa utilizar e tirar proveito.
