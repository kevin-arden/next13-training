"use client"

export default function Error({error, reset}){
  return <div>
    <h1>This aint loading up {error.message}</h1>
    <button onClick={() => reset()}>Reset</button>
  </div>
}