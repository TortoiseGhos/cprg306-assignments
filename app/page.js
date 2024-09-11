import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <Link className="underline text-cyan-700 hover:text-cyan-300"href="http://localhost:3000/week-2">Link to the week 2 page</Link>
    </main>
  );
}
