import link from 'next/link';

const Name=()=>  {
  return (
    <div>
      <h1>Name Page</h1>
      <Link href="/">
        <a>Go back to Home</a>
      </Link>
    </div>
  );
};

export default Name;