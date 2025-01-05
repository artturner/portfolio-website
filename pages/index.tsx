import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

// Use dynamic import for the Portfolio component
const Portfolio = dynamic(() => import('../components/Portfolio'), {
  ssr: true
});

const Home: NextPage = () => {
  return <Portfolio />;
};

export default Home;