"use client"
import { ChangeEvent, Dispatch, FC, FormEventHandler, SetStateAction, useEffect, useRef, useState } from "react"

import { X } from "@/components/icons/X"
import FileInput from "./FileInput"
import { IContactForm, ISessionForm } from "@/shared/types"

const FORM_INITIAL_STATE = { name: "", email: "", files: undefined }

interface Props {
  setSessionForm: Dispatch<SetStateAction<ISessionForm | undefined>>
}

const Dialog: FC<Props> = ({ setSessionForm }) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const [form, setForm] = useState<IContactForm>(FORM_INITIAL_STATE)

  const handleInput = (type: keyof IContactForm, value?: string | File[]) => {
    setForm((prev) => ({ ...prev, [type]: value }))
  }

  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    handleInput(name as keyof IContactForm, value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const files = form.files?.map((file) => file.name)
    const data = JSON.stringify({ ...form, files })
    sessionStorage?.setItem("form", data)
    setSessionForm({ ...form, files })
    dialogRef.current?.close()
    setForm(FORM_INITIAL_STATE)
  }

  useEffect(() => {
    const btn = document.querySelector("#dialog_btn")
    const dialog = dialogRef.current

    if (!btn || !dialog) return
    btn.addEventListener("click", () => {
      // disable autofocus
      dialog.inert = true
      dialog.showModal()
      dialog.inert = false
    })

    closeBtnRef.current?.addEventListener("click", () => {
      dialog?.close()
    })
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className="min-h-screen min-w-screen items-center justify-center bg-neutral-100/25 [dialog:open]:flex"
    >
      {/* wrapper */}
      <div className="relative flex w-xl flex-col items-center justify-center gap-4 rounded-2xl bg-white p-8 max-sm:h-svh max-sm:justify-start max-sm:pt-8">
        <header className="flex w-full justify-between">
          <button
            title="Закрыть окно"
            className="hover:bg-neutral-2 absolute top-6 right-8 rounded-full p-1 transition"
            type="button"
            ref={closeBtnRef}
          >
            <X className="h-5 w-5" />
          </button>
        </header>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
          <input
            onChange={onInputChange}
            value={form.name}
            name="name"
            className="border-b border-gray-300 py-2 outline-none hover:border-gray-400 focus:border-gray-400"
            type="text"
            placeholder="Имя"
            required
          />
          <input
            onChange={onInputChange}
            value={form.email}
            name="email"
            className="border-b border-gray-300 py-2 outline-none hover:border-gray-400 focus:border-gray-400"
            type="email"
            placeholder="Email"
            required
          />
          <FileInput handleInput={handleInput} selectedFiles={form?.files} />

          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-neutral-600 py-3 text-lg font-medium text-white hover:bg-neutral-700"
          >
            Сохранить
          </button>
        </form>
      </div>
    </dialog>
  )
}

export default Dialog
