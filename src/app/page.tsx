import Link from "next/link"

export default function Home() {
  return (
    <main className="h-svh w-full">
      <section className="h-full w-full px-30 py-6">
        <h1 className="mb-10 !p-0">Page rendering samples</h1>
        <ul className="flex flex-wrap items-center gap-6">
          <li className="rounded-xl bg-blue-200 px-3 py-2 text-nowrap transition hover:bg-blue-300">
            <Link href="/ssr">Server Side Rendering (SSR)</Link>
          </li>
          <li className="rounded-xl bg-blue-200 px-3 py-2 text-nowrap transition hover:bg-blue-300">
            <Link href="/ssg">Static Site Generation (SSG)</Link>
          </li>
          <li className="rounded-xl bg-blue-200 px-3 py-2 text-nowrap transition hover:bg-blue-300">
            <Link href="/isr"> Incremental Static Regeneration (ISR)</Link>
          </li>
          <li className="rounded-xl bg-blue-200 px-3 py-2 text-nowrap transition hover:bg-blue-300">
            <Link href="/csr">Client Side Rendering (CSR)</Link>
          </li>
        </ul>
      </section>
    </main>
  )
}
