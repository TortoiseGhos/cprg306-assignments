import Link from "next/link";

export default function NewStudent() {
    return (
        <div>
        <h1>Justin Nielsen</h1>
        <Link className="underline text-cyan-700 hover:text-cyan-300" href="https://github.com/TortoiseGhos/cprg306-assignments">link to github</Link>
        </div>
    );
  }