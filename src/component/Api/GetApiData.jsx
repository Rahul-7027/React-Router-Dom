import React from 'react'

const GetApiData = async () => {
  const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=319ec942");
  const data = await response.json();
  return data;
}


export default GetApiData
