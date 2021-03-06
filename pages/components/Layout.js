import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children, page }) => {
  return (
    <div className="w-full grid  m-0 p-0 place-content-center   ">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Portfolio N'DIAYE cheikh el Hadramy développeur web React | Nodejs "
        />
        <meta
          name="description"
          content="N'DIAYE Cheikh El Hadramy Portfolio développeur web React | Nodejs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="follow, index" />
        <meta
          name="google-site-verification"
          content="KHcPgwablcyL3jKwPR9ka4DXUrvajbruodOlVTqLSnI"
        />
        <title>{page}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className=" bg-gradient-to-b from-gray-800 via-gray-500 to-gray-700  flex flex-col justify-center items-center  ">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
