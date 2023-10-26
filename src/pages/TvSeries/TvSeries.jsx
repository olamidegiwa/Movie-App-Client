import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useFetch } from "../../hooks/useFetch";
import { useCustomParams } from "../../hooks/useCustomParams";
import SearchResults from "../Home/SearchResults";
import Loading from "../../utils/Loading";

const TvSeries = () => {
  const { data, error, loading, updateUI } = useFetch("/api/movie/series");
  const { userInput, filteredMovies } = useCustomParams(data);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }
  if (userInput) {
    return (
      <SearchResults userInput={userInput} filteredMovies={filteredMovies} />
    );
  }

  return (
    <div className="grid gap-3 mx-4 text-start">
      {data.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} updateUI={updateUI} />;
      })}
    </div>
  );
};

export default TvSeries;
