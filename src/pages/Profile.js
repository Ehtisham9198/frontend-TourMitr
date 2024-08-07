import React from 'react';
import { useAuth } from '../context/auth';
import Layout from '../components/Layout';

const Profile = () => {
  const [auth, setAuth] = useAuth();

  return (
    <Layout title="Profile">
      <div className="flex justify-center items-start min-h-screen">
        <div className="w-full max-w-md mt-10 mx-auto p-5 bg-white shadow-lg rounded-lg" style={{ marginTop: '10%' }}>
          {auth.user ? (
            <div className="text-center">
              <img 
                src={`https://ui-avatars.com/api/?name=${auth.user.name}&background=random`} 
                alt="Profile" 
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h1 className="text-3xl font-bold mb-2">{auth.user.name}</h1>
              <p className="text-lg mb-1"><strong>City:</strong> {auth.user.address}</p>
              <p className="text-lg mb-1"><strong>Interests:</strong> {auth.user.interests.join(",")}</p>
              <p className="text-lg mb-1"><strong>Contact:</strong> {auth.user.contact}</p>
            </div>
          ) : (
            <h1 className="text-center text-2xl font-semibold">Loading...</h1>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
