const GithubSamples = () => {
  return (
    <div className="mt-30 max-w-max rounded-2xl bg-neutral-100 px-8 py-6">
      <h2 className="mb-6 text-xl font-semibold">Другие примеры моих работ (github) &darr; </h2>
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
          <span className="text-sm font-medium opacity-80">использовано: ssr, ssg, csr, get, post</span>
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
  )
}
export default GithubSamples
