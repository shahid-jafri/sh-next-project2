// components/Home.js
import Link from 'next/link';

function Home(){
  return (
    <div>
      <h1><b>Welcome To PIAIC</b></h1>
      <Link href="/name">
        <>Go to Name Page</>
      </Link>
    </div>
  );
};

export default Home;