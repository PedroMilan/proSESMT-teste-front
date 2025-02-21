import Head from "next/head";
import React from "react";

interface TemplateProps {
  children: React.ReactNode;
}

//Template que padroniza o Favicon e o Título

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>COVID-19</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {children}
    </>
  );
};

export { Template };
