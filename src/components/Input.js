import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from '@mui/icons-material/Sort';
import axios from "axios";
import ShowItem from "./ShowItem";
import ActorItem from "./ActorItem";

const Input = () => {
  const [state, setState] = useState({
    holder: "",
    parameter: "",
    query: "",
    data: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.tvmaze.com/search/${state.parameter}?q=${state.query}`
    );
    setState({ ...state, data: response.data });
  };

  const show = state.data && state.data !== "" && state.parameter === "shows" && state.data.length>0
  const actor = state.data && state.data !== "" && state.parameter === "people" && state.data.length>0
  const noResults = state.data.length===0

  let heading = ""
  if (state.parameter === "shows") {
    heading = "TV Shows"
  } else if (state.parameter === "people") {
    heading = "Actors"
  }


  return (
    <div className="flex flex-col items-center my-5">
      <article className="p-20 py-5">
        <section className="flex flex-row justify-between bg-radio rounded-md py-5 italic font-semibold text-lg">
          <div className="mx-20">
            <input
              type="radio"
              name="search"
              id="show"
              onChange={() =>
                setState({
                  ...state,
                  holder: "Search By Shows",
                  parameter: "shows",
                })
              }
            />
            <label htmlFor="show" name="search" className="ml-3">
              shows
            </label>
          </div>
          <div className="mx-20">
            <input
              type="radio"
              name="search"
              id="actors"
              onChange={() =>
                setState({
                  ...state,
                  holder: "Search By Actors",
                  parameter: "people",
                })
              }
            />
            <label htmlFor="actors" name="search" className="ml-3">
              actors
            </label>
          </div>
        </section>
      </article>
      {state.holder && (
        <form
          className="border border-black mt-3 px-4 py-2 bg-white rounded-3xl"
          onSubmit={submitForm}
        >
          <input
            type="search"
            placeholder={state.holder}
            className="outline-none italic"
            onChange={(e) => setState({ ...state, query: e.target.value })}
          />
          <button type="submit" className="rounded-full bg-radio p-1 hover:">
            <SearchIcon />
          </button>
        </form>
      )}

      {state.parameter!==""&&<><div className="text-white flex flex-row justify-start w-screen mt-10 mb-5 px-10">
        <h1 className="mr-3 text-lg font-bold">{heading}</h1>
        <SortIcon />
      </div>
      <hr className="border-1 border-white w-full px-10" />
      {noResults && <div className="flex flex-col justify-center items-center font-bold text-white text-6xl h-full">No Results Found</div>}</>}

      
      {show && (
        <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full p-10">
          {state.data.map((each) => (
            <ShowItem key={each.show.id} item={each.show} />
          ))}
        </ul>
      )}
      {actor && (
        <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full p-10">
          {state.data.map((each) => (
            <ActorItem key={each.person.id} item={each.person} />
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default Input;
