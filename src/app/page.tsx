'use client'
import { useEffect, useState } from "react";
import Link from "next/link"

//components
import Dialog from "@/components/DialogForm";
import GithubSamples from "@/components/GithubSamples"
import { ISessionForm } from "@/shared/types";

export default function Home() {
  const [sessionForm, setSessionForm] = useState<ISessionForm>()

  useEffect(() => {
    const form = window?.sessionStorage?.getItem('form');
    if (form) {
      setSessionForm(JSON.parse(form))
    }
  }, [])

  return (
    <main className="h-max w-full">
      <section className="h-full w-full px-30 py-6 max-xl:px-20 max-lg:px-16 max-md:px-8">
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

        <div className="py-10 flex flex-col gap-4">
          <button className="rounded-xl text-base self-start font-medium bg-zinc-200 px-4 py-3" id="dialog_btn">Модалка с формой</button>
          <div>
            Данные из формы (session storage)

            {sessionForm && (
              <ul>
                <li>Имя : {sessionForm?.name}</li>
                <li>Email : {sessionForm?.email}</li>
                <li>File:
                  <div className="gap-2 inline-flex ml-2">

                    {sessionForm?.files?.map((name, idx) => (
                      <span key={idx}>{name}</span>
                    ))}
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>

        <GithubSamples />
        <Dialog setSessionForm={setSessionForm} />

      </section>
    </main>
  )
}
