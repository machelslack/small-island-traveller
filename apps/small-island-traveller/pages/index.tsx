'use client';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from '@emotion/styled';
import devConfig from '../config/dev';
import '../app/global.css';

const StyledPage = styled.div`
  .page {
  }
`;

// Make a request to the Google Cloud Translation API
async function fetchRequestToTranslateHTML(html: any, targetLanguage: any) {
  // const url = `https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_API_KEY}`;
  const url = `${devConfig.apiGateway.url}/api/translate`;

  const data = {
    q: html,
    target: targetLanguage,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
  };

  return await fetch(url, options).then((res) => res.json());
}

function Index() {
  return <StyledPage></StyledPage>;
}

export async function getServerSideProps({ req }: any) {
  const acceptLanguage = req.headers['accept-language'];

  const renderedHtml = <Index />;

  const staticData = await fetchRequestToTranslateHTML(
    renderedHtml,
    acceptLanguage
  );

  return {
    props: {
      acceptLanguage,
      html: JSON.stringify(staticData),
    },
  };
}

export default ({ html }: any) => {
  return html;
};
