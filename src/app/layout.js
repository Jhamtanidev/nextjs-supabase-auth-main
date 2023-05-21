/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { AuthProvider } from 'src/components/AuthProvider';
import createClient from 'src/lib/supabase-server';

import Footer from './Footer/footer';
// import Navbar from './Navbar/Navbar';
import Nav from './Navbar/Nav';

// import "../app/layout.module.css";
import 'src/styles/globals.css';

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;
  console.log(session);
  return (
    <html lang="en">
      <body>
        <div>
          <Nav />
        </div>
        <section className="min-h-screen py-2">
          <div className="flex flex-col items-center justify-center">
            <main className="flex w-full flex-1 shrink-0 flex-col items-center justify-center px-4 text-center sm:px-8 md:px-16 lg:px-32">
              <h1 className="mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
                Wander<span className="font-black text-blue-400">Sub</span>
              </h1>
              <AuthProvider accessToken={accessToken}>{children}</AuthProvider>
            </main>
          </div>
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </html>
  );
}
