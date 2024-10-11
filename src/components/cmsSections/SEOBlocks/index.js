import Head from "next/head";

export default function SeoBlocks(props) {
  // Common SEO Block

  //console.log('>>>SeoBlocks props<<<<<<',props.title)
  const title = props.title;
  return (
    <Head>
      <title>
         {title}
      </title>
    </Head>
  );
}
