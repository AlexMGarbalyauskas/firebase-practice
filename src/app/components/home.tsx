"use client"
import React from 'react'
import Auth from './authpage'
import { db } from '../config/firebase'
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'

// Define the Movie type based on your Firestore data structure
type Movie = {
  id: string;
  Title?: string;
  "Release Date"?: string;
  Oscar?: boolean;
};

const Home = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const movieCollectionRef = collection(db, 'movies');

  useEffect(() => {
    const getMoviesList = async () => {
      try {
        const data = await getDocs(movieCollectionRef);
        const filteredData: Movie[] = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMovieList(filteredData);
      } catch (error) {
        console.error("error catching movie", error);
      }
    };

    getMoviesList();
  }, []);

  useEffect(() => {
    getDocs(collection(db, 'movies')).then(snapshot => {
      console.log("Raw docs:", snapshot.docs);
      console.log("Doc data:", snapshot.docs.map(doc => doc.data()));
    }).catch(console.error);
  }, []);

  console.log(movieList);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Auth />
      <div className="mt-8 w-full max-w-md">
        {movieList.map((movie) => (
          <div key={movie.id} className="bg-gray-100 rounded p-4 mb-4 shadow">
            <h1 className="text-lg font-bold">{movie.Title ?? "No Title"}</h1>
            <p className="text-gray-700">Date: {movie["Release Date"] ?? "Unknown"}</p>
            <p className="text-gray-700">Oscar: {movie.Oscar ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home
