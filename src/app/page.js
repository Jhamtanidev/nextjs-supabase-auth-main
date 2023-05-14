'use client';

import Link from 'next/link';

import Auth from 'src/components/Auth';
import { useAuth, VIEWS } from 'src/components/AuthProvider';
import Account from '../components/Account';
// import Data from 'src/app/dashboard/page.js';
// import { ThemeSupa } from '@supabase/auth-ui-shared';
// import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Home() {
  const { initial, user, view, signOut } = useAuth();
  // const session = useSession();
  // const supabase = useSupabaseClient();

  // const handleData=()=> {
  //   <Data />

  // }
  if (initial) {
    return <div className="card h-72">Loading...</div>;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }

  if (user) {
    return (
      <div>
        <div className="card">
          <h2>Welcome!</h2>
          <code className="highlight">{user.role}</code>
          <Link className="button" href="/profile">
            Go to Profile
          </Link>
          <Link className="button" href="/dashboard">
            Go to Dashboard
          </Link>
          <button type="button" className="button-inverse" onClick={signOut}>
            Sign Out
          </button>
        </div>
        <div className="container" style={{ padding: '50px 0 100px 0' }}>
          {/* <Data /> */}
        </div>
      </div>
    );
  }

  return <Auth view={view} />;
}
