"use client";
import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import { SliderData } from "../components/SliderData";
import Slider from "../components/Slider";
import Instagram from "../components/Instagram";
import work from "./work";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated by Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Hero
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive."
      />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}
