import Link from "next/link";

export default function Home() {
  return (
    <main className="h-svh w-full">
      <section className="w-full h-full py-20 px-30">
        <ul className="flex items-center gap-10">
          <li>
            <Link href="/ssr">Server Side Rendering</Link>
          </li>
          <li>
            <Link href="/ssg">Static Site Generation</Link>
          </li>
          <li>
            <Link href="/isr"> Incremental Static Regeneration</Link>
          </li>
          <li>
            <Link href="/csr">Client Components Rendering</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
