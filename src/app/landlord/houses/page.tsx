import { Metadata } from 'next';
import HousesClient from './HousesClient';

export const metadata: Metadata = {
  title: "Basa Khojo | My Houses",
  description: "View all your houses on Basa Khojo.",
};

const Houses = () => {
  return <HousesClient />;
};

export default Houses;
