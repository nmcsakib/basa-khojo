
import { Metadata } from "next";
import AddPost from "./AddPost";

export const metadata: Metadata = {
  title: "Basa Khojo | Add Post",
  description: "Add a new post to Basa Khojo.",
};

export default function AddPostPage() {
  return (

    <AddPost />

  );
}
