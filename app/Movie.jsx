import Image from "next/image";
import Link from "next/link";

export default function Movie({ id, title, release_date, overview, poster_path }) {
  let imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <h3>{overview}</h3>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          alt="image"
          width={300}
          height={300}
        />
      </Link>
    </div>
  );
}
