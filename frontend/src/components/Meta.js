import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href="#" />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to BarsFashion",
  description: "Best online fashion store",
  keywords: "clothes, fashion, designer clothes, cheap clothes",
};

export default Meta;
