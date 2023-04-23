
import { AuthProvider } from 'src/components/AuthProvider';
import createClient from 'src/lib/supabase-server';
import Navbar from './Navbar/Navbar';
import "../app/layout.css";
import 'src/styles/globals.css';
import Footer from './Footer/footer';

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }) {
  const supabase = createClient( process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;

  return (
    <html lang="en">
       
      <body  >
       <div>
        <Navbar/>
       </div>
       <section>
  <div class='air air1'></div>
  <div class='air air2'></div>
  <div class='air air3'></div>
  <div class='air air4'></div>

        <div className="flex min-h-screen flex-col items-center justify-center py-2">
          <main className="flex w-full flex-1 shrink-0 flex-col items-center justify-center px-8 text-center sm:px-20">
            <h1 className="mb-12 text-5xl font-bold sm:text-6xl">
              Wander<span className="font-black text-blue-400">Sub</span>
            </h1>
            <AuthProvider accessToken={accessToken}>{children}</AuthProvider>

          </main>

        </div>
        </section>
         
        
      </body>
      <footer>
          <div>
            <Footer/>
          </div>
         </footer> 
      
    </html>
  );
}
