import MovieCard from "./MovieCard"


function MovieList({movies, deleteMovie,text, rate}) {
    
        
    
  return (
    <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", width:"90%", margin:"auto" }}>
           {
            movies.filter(movie=>movie.title.toLowerCase().includes(text.toLowerCase().trim()) && movie.rate >= rate) 
            .map(movie=>(
            <MovieCard movie={movie} key={movie.id} deleteMovie={deleteMovie}/>))
        }
    </div>
  )
}

export default MovieList