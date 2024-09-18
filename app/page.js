import Image from "next/image";
import Link from "next/link";

export default function Home() {

  let linkStyles = "underline text-cyan-700 hover:text-cyan-300";
  return (
    <main>
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <ul>
    <li>
      <Link className={linkStyles} href="http://localhost:3000/week-2">Link to the week 2 page</Link>
    </li>
    <li>
      <Link className={linkStyles} href="http://localhost:3000/week-3">Link to the week 3 objects</Link>
    </li>
    <li>
      <Link className={linkStyles} href="http://localhost:3000/week-4">Link to the week 3 props</Link>
    </li>
    </ul>
    </main>
  );
}
