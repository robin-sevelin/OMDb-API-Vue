<script setup lang="ts">
  import { IMovieProps } from '../models/IMovieProps';

  const props = defineProps<IMovieProps>();
</script>

<template>
  <div class="movie">
    <RouterLink :to="'/about/' + props.movie.imdbID">
      <img :src="props.movie.Poster" :alt="props.movie.Title"
    /></RouterLink>
  </div>
</template>

<style scoped>
  .movie {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: center;
    align-items: center;
  }

  img {
    padding-top: 2rem;
    padding-bottom: 2rem;
    height: 400px;
    width: 275px;
  }

  a:hover {
    transition: 0.5s ease-in-out;
    scale: 1.1;
  }
</style>
