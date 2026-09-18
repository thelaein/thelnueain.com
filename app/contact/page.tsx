import type { Metadata } from "next";
import { ContactClient } from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact — Let's Make Something Useful",
  description:
    "Have a product idea, a complicated workflow, or something worth improving? Let's design it. Contact Thel Nu — UI/UX Designer open to opportunities and collaborations.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Thel Nu",
    description: "Let's make something useful — get in touch for product design collaborations.",
    url: "https://thelnueain.com/contact",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Contact — Thel Nu" }],
  },
};

export default function ContactPage() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="eyebrow reveal in">
          <span className="dot" />
          Contact
        </div>
        <h1 className="reveal in">
          Let&apos;s make
          <br />
          something useful.
        </h1>
        <ContactClient />
      </div>
    </section>
  );
}
