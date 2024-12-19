export default function About() {
  return (
    <section
      id="about"
      className="flex-grow flex flex-col gap-4 items-center justify-center text-center sm:flex-[1_1_80svh] md:px-8 md:shadow-small md:dark:shadow-large backdrop-blur-xl"
      aria-description="About this web page"
    >
      <h2 className="text-center uppercase text-3xl sm:text-4xl border-b-red-500 dark:border-b-red-700 border-b-5">
        About
      </h2>
      <p className="text-xl sm:text-2xl md:text-3xl">
        Please reach out to me for <i>Tech</i> matters @
        <br />
        <a
          href="mailto:anas.elmost@gmail.com"
          className="text-[0.8em] bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-500 via-50% to-red-800 dark:from-red-800 dark:to-red-800 dark:via-65% dark:via-red-100 underline decoration-foreground-200 dark:decoration-foreground-300"
        >
          anas.elmost@gmail.com
        </a>
      </p>
      <aside className="text-medium sm:text-lg md:text-xl opacity-65">
        <del className="decoration-red-100 dark:decoration-red-950">
          <p>Development slowly in progress...</p>
        </del>
        <ins className="decoration-red-500">
          <p>
            Started just to be abandoned... <br />
            <small>for an upcoming elegant professional website</small>
          </p>
        </ins>
        <p>
          Built with <i>Next.js</i>
        </p>
        <p>
          <a
            href="https://anasmostafa.netlify.app/"
            className="animate-[bounce-arrow_1s_ease-out_infinite_alternate] inline-block text-cyan-500"
            target="_blank"
          >
            <br />
            Temporary replacement{" "}
            <span className="animate-[bounce-arrow_1s_ease-out_infinite_alternate] inline-block">&#8594;</span>
          </a>
        </p>
      </aside>
    </section>
  );
}
