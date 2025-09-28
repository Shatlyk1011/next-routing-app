import Link from "next/link"

export default function Home() {
  return (
    <main className="h-max w-full">
      <section className="h-full w-full px-30 py-6">
        <h1 className="mb-5 !p-0">Примеры рендеринга страниц</h1>
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
        <div className="fixed bottom-20 rounded-3xl bg-neutral-100 p-10">
          <h2 className="my-4 text-xl font-semibold">Другие примеры моих работ (github) &darr; </h2>
          <ul className="flex flex-wrap items-center gap-5">
            <li className="flex flex-col rounded-xl bg-neutral-200 px-4 py-2 font-medium">
              <a
                className="mb-1 max-w-max border-b border-b-transparent hover:border-b-current"
                href="https://github.com/Shatlyk1011/food-delivery-app"
                target="_blank"
                rel="noopener"
              >
                Fullstack food delivery app
              </a>
              <span className="text-sm font-medium opacity-80">использовано: ssr, ssg, csr</span>
            </li>
            <li className="flex flex-col rounded-xl bg-neutral-200 px-4 py-2 font-medium">
              <a
                className="mb-1 max-w-max border-b border-b-transparent hover:border-b-current"
                href="https://github.com/Edil-ozi/edil-ozi"
                target="_blank"
                rel="noopener"
              >
                Edil ozi - react component library
              </a>
              <span className="text-sm font-medium opacity-80">использовано: csr</span>
            </li>
            <li className="flex flex-col rounded-xl bg-neutral-200 px-4 py-2 font-medium">
              <a
                className="mb-1 max-w-max border-b border-b-transparent hover:border-b-current"
                href="https://github.com/Shatlyk1011/blog-website"
                target="_blank"
                rel="noopener"
              >
                Personal Blog
              </a>
              <span className="text-sm font-medium opacity-80">использовано: ssr, ssg</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
