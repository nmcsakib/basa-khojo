// app/HomeServer.tsx
import { Suspense } from 'react';
import HomeClient from './HomeClient';
import Footer from '../components/Footer/Footer';

export default async function HomeServer() {

  return (
    <Suspense fallback={<div>লোড হচ্ছে...</div>}>
      <HomeClient />
      <Footer/>
    </Suspense>
  );
}
