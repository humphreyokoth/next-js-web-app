import { server } from "../config";
import Head from "next/head";
// import styles from "../styles/Layout.module.css";
import ArticleList from "../components/ArticleList";


export default function Home({articles}) {
  //  console.log(articles);
  return (
    <div>
      <Head>
        <title>EduNext JS</title>
        <meta
          name="keywords"
          content="edu outbox ,web development, programming"
        />
      </Head>
      <h1>EDU NEXT JS CRUSH COURSE</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `${server}/api/articles`
  );

  const articles = await res.json();
  return {
    props: {
      articles
    }
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );

//   const articles = await res.json();
//   return {
//     props: {
//       articles
//     }
//   };
// };
