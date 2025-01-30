import React from 'react'
// import.meta.env.API_KEY

const GetApiData = async () => {
  const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}`);
  const data = await response.json();
  return data;
}


export default GetApiData
