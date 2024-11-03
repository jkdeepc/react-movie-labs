import React, { useEffect, useState } from "react";
import { getUpcomingMovies } from "../api/tmdb-api"; 
import PageTemplate from "../components/templateMovieListPage";
import Spinner from '../components/spinner';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'; // 导入 PlaylistAdd 图标

const UpcomingMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const upcomingMovies = await getUpcomingMovies();
        setMovies(upcomingMovies.results); // 根据返回的数据结构调整
      } catch (error) {
        console.error("Failed to get upcoming movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUpcomingMovies();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <PageTemplate
      title="即将上映的电影" // 可以根据需要调整标题
      movies={movies}
      action={(movie) => {
        return (
          <PlaylistAddIcon />  // 在这里添加 PlaylistAdd 图标
        );
      }}
    />
  );
};

export default UpcomingMoviesPage;
