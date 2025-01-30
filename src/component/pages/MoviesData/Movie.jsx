import React from 'react'
import { useLoaderData } from 'react-router-dom'


const Movie = () => {
  const moviesData = useLoaderData()
  return (
    <>
      <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{moviesData.Title}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{moviesData.Year}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{moviesData.Rated}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{moviesData.Released}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{moviesData.Runtime}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{moviesData.Genre}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{moviesData.Director}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{moviesData.Writer}</p>
      </a>


    </>
  )
}

export default Movie
