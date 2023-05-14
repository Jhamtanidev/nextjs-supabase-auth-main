'use client';

import { useState, useEffect } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useAuth } from './AuthProvider';
import supabase from 'src/lib/supabase-browser';

export default function Account() {
  // const supabase = useSupabaseClient()
  // const {
  //    session ,
  // } = await supabase.auth.getSession();
  const { session } = useAuth();
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert('Error loading user data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from('profiles').upsert(updates);
      if (error) throw error;
      alert('Profile updated!');
    } catch (error) {
      alert('Error updating the data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="website"
          value={website || ''}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="avatar">AWATARurl</label>
        <input
          id="avatar"
          type="URL"
          value={URL || ''}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>

      <div class="flex h-screen w-full items-center justify-center">
        <div class="max-w-xs">
          <div class="rounded-lg bg-white py-3 shadow-xl">
            <div class="photo-wrapper p-2">
              <img
                class="mx-auto h-32 w-32 rounded-full"
                src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC4E03AQF8OXYzm5XZGg%2Fprofile-displayphoto-shrink_800_800%2F0%2F1627541582577%3Fe%3D2147483647%26v%3Dbeta%26t%3DYE9BFeY90QZ_fO9cqVVAxc98KE96qeyny0j6n7RR0vc&tbnid=R5XnZALNAr2hgM&vet=12ahUKEwiz4dPwq5j-AhWWDbcAHbS8BWAQMygKegUIARDOAQ..i&imgrefurl=https%3A%2F%2Fin.linkedin.com%2Fin%2Fdev-jhamtani-591556218&docid=gC4oUAOZfmXUgM&w=592&h=592&itg=1&q=jhamtani%20dev&client=firefox-b-d&ved=2ahUKEwiz4dPwq5j-AhWWDbcAHbS8BWAQMygKegUIARDOAQ"
                alt="Jhmatanidev"
              />
            </div>
            <div class="p-2">
              <h3 class="text-center text-xl font-medium leading-8 text-gray-900">
                {username}
              </h3>
              <div class="text-center text-xs font-semibold text-gray-400">
                <p>Web Developer</p>
              </div>
              <table class="my-3 text-xs">
                <tbody>
                  <tr>
                    <td class="px-2 py-2 font-semibold text-gray-500">Website</td>
                    <td class="px-2 py-2">{website}</td>
                  </tr>
                  {/* <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td class="px-2 py-2">+977 9955221114</td>
                </tr> */}
                  <tr>
                    <td class="px-2 py-2 font-semibold text-gray-500">Email</td>
                    <td class="px-2 py-2">{user.email}</td>
                  </tr>
                </tbody>
              </table>

              <div class="my-3 text-center">
                <a
                  class="text-xs font-medium italic text-indigo-500 hover:text-indigo-600 hover:underline"
                  href="/profile"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
