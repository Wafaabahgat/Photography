import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import app from "../app/_app";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated by Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <app />

      <Hero
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive."
      />
    </div>
  );
}