import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default async function About() {
  return (
    <main>
      <h1>About</h1>
      <p>We are social media company!</p>
    </main>
  );
}
