import Head from 'next/head';
import React from 'react';
import db from '../../../db.json';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Quiz Senhor dos Anéis</title>

        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:image" content={db.bg} />

        <meta name="description" content={db.description} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz-base-ten-nu.vercel.app/" />
        <meta property="twitter:title" content="Quiz Senhor dos Anéis" />
        <meta property="twitter:description" content={db.description} />
        <meta property="twitter:image" content="https://c.wallhere.com/photos/ae/d8/1920x1080_px_closeup_Earth_map_middle_rings_text_The_Lord_Of_The_Rings-828748.jpg!d" />

      </Head>
    </div>
  );
}

export default IndexPage;
