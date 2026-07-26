"use client";

import ContactForm from "@/src/components/contact/ContactForm";
import ContactMap from "@/src/components/contact/ContactMap";
import { CTA } from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

export default function contact() {
  return (
    <>
      <Navbar />
      <main className="my-20">
        <ContactMap />
        <ContactForm />
      </main>
      <CTA />
      <Footer />
    </>
  );
}
