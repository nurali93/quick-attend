import type { NextPage } from "next";
import { signIn, signOut, useSession } from 'next-auth/react';
import Layout from 'components/Layout';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <Layout>
      {status === 'loading' && <p>Loading..</p>}
      {!session && (
        <>
          Not signed in <br />
          <button
            onClick={() =>
              signIn('google', { callbackUrl: 'http://localhost:3000/main' })
            }
          >
            Sign in
          </button>
        </>
      )}
      {session && (
        <>
          Signed in as {session?.user?.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </Layout>
  );
};

export default Home;
