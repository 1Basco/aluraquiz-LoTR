import Head from 'next/head'
import db from '../../../db.json'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Quiz League of Legends</title>
        
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:image" content={db.bg}></meta>

        <meta name="description" content={db.description} />
      </Head>
    </div>
  )
}

export default IndexPage
