import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "../api/tmdb-api"; // 确保这个函数存在并且工作正常
import Spinner from '../components/spinner';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'; // 导入 PlaylistAdd 图标

const UpcomingMoviesPage = () => {
  const { data, error, isLoading } = useQuery("upcomingMovies", getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="即将上映的电影"
      movies={movies}
      action={(movie) => {
        return (
          <PlaylistAddIcon />  {/* 在这里显示 PlaylistAdd 图标 */}
        );
      }}
    />
  );
};

export default UpcomingMoviesPage;
