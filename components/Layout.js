import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children, page }) => {
  return (
    <div className="w-full grid m-0 p-0 ">
      <Head>
      <meta charSet="utf-8" />
      <meta name="keywords" content="Portfolio du développeur web React | Nodejs " />
      <meta name="description" content="N'DIAYE Cheikh El Hadramy Portfolio développeur web React | Nodejs" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
	    <meta name="robots" content="follow" />
        <title>{page}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="bg-gradient-to-t from-gray-900 via-gray-500 to-gray-900  ">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
