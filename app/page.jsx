import Movie from "./movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <main>
      <h1 className="text-lg py-2 m-4">Hello next 13 🔥</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            overview={movie.overview}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </main>
  );
}
