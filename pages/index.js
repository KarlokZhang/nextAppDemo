import Head from "next/head";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
        debitis corrupti voluptates maiores error, distinctio suscipit ea,
        repellendus consequatur reprehenderit numquam impedit sapiente rem
        doloremque quos laborum consectetur, nobis tenetur?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eos
        ipsa dolor ea rem quae dignissimos, repellat nemo ex nam, iure quibusdam
        corporis exercitationem, at laudantium a? Laudantium, consectetur
        eveniet.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
