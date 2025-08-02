// app/page.tsx or app/home/page.tsx depending on your route structure
import { Metadata } from "next";
import HomeServer from "./Home/HomeServer";

export const metadata: Metadata = {
  title: "Basa Khojo | Find Flats, Houses & Mess for Rent in Bangladesh (বাসা খুঁজুন)",
  description: "The easiest way to find flats, houses, rooms, and messes for rent across Bangladesh. Search listings near your university or workplace. বাসা খুঁজুন সহজেই!",
  keywords: "flat rent dhaka, house rent, bachelor mess, family house, to-let, বাসা ভাড়া ঢাকা, মেস, to let in dhaka, rent in bangladesh",
};

export default async function HomePage() {

  return <HomeServer />;
}
