"use client"
import React from 'react'
import { auth, GoogleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react'


const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



        const signIn = async () => {
            if (!email || !password) {
                alert("Please enter a valid email and password.");
                return;
              }
              try {
                await createUserWithEmailAndPassword(auth, email, password);
              } catch (error) {
                console.error(error);
                alert(error.message); // Show error to user
              }
        };
    
        const signInWithGoogle = async () => {
            try {
                await signInWithPopup(auth, GoogleProvider);
            } catch (error) {
                console.error(error);
            }
        };
    
        const logout = async () => {
            try {
                await signOut(auth);
            } catch (error) {
                console.error(error);
            }
        };






  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white rounded-lg shadow-lg p-8 w-full max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
            <input
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                autoComplete="email"
            />
            <input
                className="mb-6 px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                autoComplete="current-password"
            />
            <button
                onClick={signIn}
                className="mb-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Sign In
            </button>
            <div className="flex items-center w-full mb-4">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-2 text-gray-400 text-sm">or</span>
                <hr className="flex-grow border-t border-gray-300" />
            </div>



            <button
                onClick={signInWithGoogle}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition flex items-center justify-center gap-2"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35 11.1H12v2.8h5.35c-.23 1.2-1.4 3.5-5.35 3.5-3.2 0-5.8-2.7-5.8-6s2.6-6 5.8-6c1.8 0 3 .7 3.7 1.3l2.5-2.4C17.1 3.9 14.8 3 12 3 6.5 3 2 7.5 2 13s4.5 10 10 10c5.7 0 9.5-4 9.5-9.7 0-.7-.1-1.3-.2-1.9z"/></svg>
                Sign In with Google
            </button>



            <button onClick={logout} className='w-full bg-amber-400 text-white py-2 rounded hover:bg-amber-500 transition flex items-center justify-center gap-2'> 
              Logout 
            </button>
      
    </div>
  )
}

export default Auth
