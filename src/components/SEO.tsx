import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  jsonLd?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, jsonLd }) => {
  return (
    <Helmet>
      <title>{title} | Axxon Digital</title>
      <meta name="description" content={description} />
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
