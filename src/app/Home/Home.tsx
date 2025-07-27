"use client"
import { useEffect, useState } from "react";
import Dropdown from '../components/Dropdown';
import Card from "../components/Card";
import Modal from "../components/Modal";
interface LocationObject {
  division?: string;
  district?: string;
  upazila?: string;
  union?: string;
   university?: {
    
    "id": string,
    "bn_name": string,
    "en_name": string,
    "short_form": string,
    "district": string
    };
}

interface Post {
    _id: string;
    title: string;
    images: string[];
    location: {
        division?: string;
        university?: {
            district: string;
        };
    };
    rent: string;
    availableRooms: string;
}
const Home = () => {

const [location, setLocation] = useState<LocationObject>({})
const [role, setRole] = useState<"" | "male" | "female">('')
const [posts, setPosts] = useState([])

useEffect(() => {
  if(!role) return
 fetch(`/api/posts?gender=${role}`)
 .then(res => res.json())
 .then(data => setPosts(data));

},[role])
console.log(posts);
    return (
        <div>
          <Modal setRole={setRole}/>
             <main className="max-w-[1600px] mx-auto py-5">
         <h1 className="text-2xl font-bold mb-6 text-center text-slate-200 myFont tracking-widest">লোকেশান নির্বাচন করুন:</h1>
      <Dropdown uni={true} setLocation={setLocation} />
         <div className="w-full rounded-t-lg min-h-screen md:p-5">
       { (location.division || location.university) && <h2 className="text-2xl md:text-3xl p-5 text-slate-200 myFont tracking-widest"><span className="text-red-400">{location.union || location.upazila || location.district || location.division || location.university?.bn_name}</span> এরিয়াতে বাসা/মেস খুজুন: </h2>}
     
      <div className="grid md:grid-cols-3 lg:grid-cols-4 w-full gap-7">
        {
          posts.map((post: Post) => <span key={post._id}>
          <Card post={post}/>
          </span>)
        }
      </div>
      </div>

    </main>
        </div>
    );
};

export default Home;