'use client';

import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Card from "../components/Card";
import Modal from "../components/RoleModal";
import InstallButton from "../components/InstallButton";
import { AiOutlineLoading } from "react-icons/ai";

export default function HomeClient() {
  const [location, setLocation] = useState<LocationObject>({});
  const [role, setRole] = useState<"" | "male" | "female">("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [hasRestored, setHasRestored] = useState(false);

  useEffect(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('✅ Service Worker registered'))
      .catch((err) => console.log('❌ SW registration failed:', err));
  }
}, []);

  useEffect(() => {
    const savedRole = sessionStorage.getItem("userRole");
    if (savedRole === "male" || savedRole === "female") {
      setRole(savedRole);
      setShowModal(false);
    }
  }, []);

useEffect(() => {
  const savedLocation = sessionStorage.getItem('locationFilters');
  if (savedLocation) {
    setLocation(JSON.parse(savedLocation));
  }
  setHasRestored(true);
}, []);

useEffect(() => {
  if (!hasRestored) return;
  if (Object.keys(location).length === 0) return;
  sessionStorage.setItem('locationFilters', JSON.stringify(location));
}, [location, hasRestored]);

// Fetch posts when location or role changes
useEffect(() => {
  if (!role) return;
  sessionStorage.setItem("userRole", role);

  const params = new URLSearchParams();
  if (role) params.set("gender", role);
  if (location.division) params.set("division", location.div_en!);
  if (location.district) params.set("district", location.dis_en!);
  if (location.upazila) params.set("upazila", location.upa_en!);
  if (location.union) params.set("union", location.uni_en!);
  if (location.university) params.set("district", location.university.district);

  setLoading(true);
  fetch(`/api/posts?${params.toString()}`)
    .then((res) => res.json())
    .then((data) => {
      setPosts(data);
      setHasFetched(true);
      setLoading(false);
    })
    .catch(() => {
      setPosts([]);
      setHasFetched(true);
      setLoading(false);
    });
}, [location, role]);


 

  return (
    <div>
      {showModal && (
        <Modal setRole={(r) => {
          setRole(r);
          setShowModal(false);
        }} />
      )}

      <main className="max-w-[1600px] mx-auto py-5">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-100 tracking-tight">Find Your Next Home: Flats, Houses & Mess</h2>
          <p className="text-slate-300 mt-2">Search thousands of verified listings for rent across Bangladesh. Your new home is just a few clicks away.</p>
        </div>

        <h1 className="text-2xl font-bold mb-6 text-center text-slate-200 myFont tracking-widest">
          লোকেশান নির্বাচন করুন:
        </h1>

        <Dropdown uni={true} setLocation={setLocation} />
      <InstallButton/>

        <div className="w-full min-h-screen p-5">
          {((location.division || location.university) && posts.length > 0) && (
            <h2 className="text-2xl md:text-3xl p-5 text-slate-200 myFont tracking-widest">
              <span className="text-red-400">
                {
                  location.union ||
                  location.upazila ||
                  location.district ||
                  location.division ||
                  location.university?.bn_name
                }
              </span>{" "}
              এরিয়াতে <span className="text-red-400 text-3xl">{posts.length}</span> টি বাসা/মেস পাওয়া গিয়েছে:
            </h2>
          )}

          {loading && (
            <h1 className="text-2xl text-white text-center flex justify-center items-center gap-2"><AiOutlineLoading className="animate-spin font-bold"/>লোড হচ্ছে...</h1>
          )}

          {!loading && hasFetched && posts.length === 0 && (
            <div className="text-3xl text-center text-red-400 mt-10 myFont tracking-widest">
              কোনো <span className="text-white">বাসা/মেস</span> খুঁজে পাওয়া যায়নি!
            </div>
          )}

          {!loading && posts.length > 0 && (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 w-full gap-7">
              {posts.map((post) => (
                <span key={post._id}>
                  <Card post={post} />
                </span>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
