import Head from "next/head";
import Sidebar from '../sidebar/sidebar'

export const Page = (props) => {
  const pageTitle = `${
    props.currentPage === "Home"
      ? "Sociable - A Social network"
      : `${props.currentPage} Sociable`
  }`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-touch-icon.png"
          />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32x32.png"
          />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16x16.png"
          />

        <link rel="manifest" href="/static/manifest/site.webmanifest" />
        <meta name="title" content={pageTitle} />
        <meta name="description" content={props.desc} />

      </Head>

      <main className="w-full flex-1">
        <nav className="w-full">
        <Sidebar />
        </nav>
        
        {props.children}

      </main>
    </>
  );
};
