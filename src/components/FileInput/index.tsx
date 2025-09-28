import { useRef, type ChangeEvent, type FC } from "react"

export const ALLOWED_FILE_TYPES = [
  // docx & pdf
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/pdf",
]

import { FileTypes, IContactForm } from "@/shared/types"

import FileTag from "./FileTag"

interface Props {
  selectedFiles?: File[]
  handleInput: (type: keyof IContactForm, value?: File[]) => void
}

const FileInput: FC<Props> = ({ selectedFiles, handleInput }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const newFiles = Array.from(files).filter(({ type }) => ALLOWED_FILE_TYPES.includes(type))
    // const newFiles = Array.from(files)

    handleInput("files", newFiles)
  }

  const handleDeleteFile = (name: string) => {
    const arr = selectedFiles?.filter((file) => name !== file.name)

    if(arr && arr.length === 0) {
      handleInput("files", )
      inputRef.current!.value = ''
      return
    }
    handleInput("files", arr)
  }

  return (
    <div className="flex flex-col gap-5">
      <label
        htmlFor="input"
        role="button"
        className="relative flex h-14 cursor-pointer items-center justify-center"
      >
        <div className="flex items-center gap-2.5">
          {/* скрепка */}
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path
              d="M12.8302 12.1499L10.3602 14.6199C8.99018 15.9899 8.99018 18.1999 10.3602 19.5699C11.7302 20.9399 13.9402 20.9399 15.3102 19.5699L19.2002 15.6799C21.9302 12.9499 21.9302 8.50992 19.2002 5.77992C16.4702 3.04992 12.0302 3.04992 9.30018 5.77992L5.06018 10.0199C2.72018 12.3599 2.72018 16.1599 5.06018 18.5099"
              stroke="#9D9FA3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="text-base only -tracking-two text-neutral-70">Attach docs (.PDF, .DOCX)</span>
        </div>

        {/* dashed border */}
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="56"
          fill="none"
        >
          <rect x="0.5" y="0.5" width="99.7%" height="55" rx="27.5" stroke="#A8ADB3" strokeDasharray="2 2" />
        </svg>

        <input
          onInputCapture={handleFile}
          ref={inputRef}
          className="fixed top-0 left-[-200%] -z-[999]"
          id="input"
          type="file"
          placeholder="input"
          accept=".pdf,.docx"
          multiple
        />
      </label>
      <ul className="flex flex-wrap gap-2">
        {selectedFiles?.map((file, i) => (
          <FileTag key={i} type={file.type as FileTypes} fileName={file.name} handleDelete={() => handleDeleteFile(file.name)} />
        ))}
      </ul>
    </div>
  )
}
export default FileInput
