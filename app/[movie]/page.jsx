import Image from "next/image";

export async function generateStatecParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  let imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <div>
      <h1>Movie detail</h1>
      <h2>{res.title}</h2>
      <h2>{res.vote_count}</h2>
      <Image src={imagePath+res.backdrop_path} width={300} height={300}/>
    </div>
  );
}
