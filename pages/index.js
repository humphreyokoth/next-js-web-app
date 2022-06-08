import Head from 'next/head'

import styles from '../styles/Layout.module.css'

export default function Home({articles}) {
 console.log(articles);
  return (
    <div>
    <Head>
      <title>
        EduNext JS
        <meta name='keywords' content='edu outbox ,web development, programming'/>
      </title>
    </Head>
      <h1>EDU NEXT JS CRUSH COURSE</h1>
   {/* {articles.map((article)=> (<h3>{article.title}</h3>))} */}
    </div>
  )
}


export const getStatciProps = async () =>{
  const res = await fetch (`https://jsonplaceholder.typicode.com/posts?_limit=6`)

  const articles = await res.json()
  return {
    props:{
      articles
    }
  }
}