"use client"
import { useState } from "react";
import Dropdown from '../components/Dropdown';
import Card from "../components/Card";

const Home = () => {

const [location, setLocation] = useState('')
    return (
        <div>
             <main className="container mx-auto pt-5">
         <h1 className="text-2xl font-bold mb-6 text-center">Select Location:</h1>
      <Dropdown setLocation={setLocation} />
         <div className="w-full rounded-lg shadow-xl min-h-screen md:p-5 border">
       { location && <h2 className="text-2xl p-4"> Find Rooms in: <span className="text-red-500">{location}</span> area: </h2>}
        <hr />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 w-full pt-10 gap-7">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      </div>

    </main>
        </div>
    );
};

export default Home;