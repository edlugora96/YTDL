import Link from "next/link";
import { Layout } from "$react/Layout";
import { Header } from "$react/Header";
import { Navbar } from "$react/Navbar";
import { Footer } from "$react/Footer";

const components = {
  Header,
  Navbar,
  Body: () => (
    <div>
      <h1>Lista de propiedades</h1>
      <Link href="/">
        <a>Go back</a>
      </Link>
    </div>
  ),
  Footer
};
const Properties = () => {
  return <Layout property components={components} />;
};

export default Properties;
