import Head from 'next/head';
import React from 'react';
import db from '../../../db.json';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Quiz League of Legends</title>

        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:image" content={db.bg} />

        <meta name="description" content={db.description} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz-base-ten-nu.vercel.app/" />
        <meta property="twitter:title" content="Quiz League of Legends" />
        <meta property="twitter:description" content={db.description} />
        <meta property="twitter:image" content="https://lvgames.net/wallpaper/Spirit_Blossom_Kindred_LoL_1920x1080.jpg" />

      </Head>
    </div>
  );
}

export default IndexPage;
