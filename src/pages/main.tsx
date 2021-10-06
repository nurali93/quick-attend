import { signOut, useSession } from 'next-auth/react';
import Layout from 'components/Layout';

const Main = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <Layout>
      {!session && <h1>You&apos;re not logged in yet</h1>}
      {session && <h1>Hello, {session?.user?.name}!</h1>}
      <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
    </Layout>
  );
};

export default Main;
