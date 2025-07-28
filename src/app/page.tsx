// app/page.tsx or app/home/page.tsx depending on your route structure
import { Metadata } from "next";
import HomeServer from "./Home/HomeServer";

export const metadata: Metadata = {
  title: "Basa Khojo | Homepage",
  description: "বাংলাদেশের যেকোনো ইউনিভার্সিটির আশেপাশে বাসা বা মেস খুঁজে নিন সহজেই।",
};

export default async function HomePage() {

  return <HomeServer />;
}
