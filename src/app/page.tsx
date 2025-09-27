import Link from "next/link";

export default function Home() {
  return (
    <main className="h-svh w-full">
      <section className="w-full h-full py-20 px-30">
        <ul className="flex items-center gap-10">
          <li>
            <Link href="/ssr">link</Link>
          </li>
          <li>
            <Link href="">Link</Link>
          </li>
          <li>
            <Link href="">Link</Link>
          </li>
          <li>
            <Link href="">Link</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
