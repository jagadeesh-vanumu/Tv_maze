import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from '@mui/icons-material/Sort';

const Input = () => {
  const [holder, setHolder] = useState('')
  return (
    <div className="flex flex-col items-center my-5">
      <article className="p-20 py-5">
        <section className="flex flex-row justify-between bg-radio rounded-md py-5 italic font-semibold text-lg">
          <div className="mx-20">
            <input type="radio" name="search" id="show" onChange={()=> setHolder('Search By Shows')}/>
            <label htmlFor="show" name="search" className="ml-3">
              shows
            </label>
          </div>
          <div className="mx-20">
            <input type="radio" name="search" id="actors" onChange={()=> setHolder('Search By Actors')}/>
            <label htmlFor="actors" name="search" className="ml-3">
              actors
            </label>
          </div>
        </section>
      </article>
      {holder&&<form className="border border-black mt-3 px-4 py-2 bg-white rounded-3xl">
        <input type="search" placeholder={holder} className="outline-none italic"/>
        <button type="button" className="rounded-full bg-radio p-1 hover:">
          <SearchIcon/>
        </button>
      </form>}

      <div className="text-white flex flex-row justify-start w-full mt-10 mb-5">
        <h1 className="mr-3 text-lg font-bold">TV Shows</h1>
        <SortIcon/>
      </div>
      <hr className="border-1 border-white w-full"/>
      
    </div>
  );
};

export default Input;
