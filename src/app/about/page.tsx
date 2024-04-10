export { about as metadata } from "@/app/metadata";

export default function About() {
  return (
    <aside className="h-full flex flex-col gap-4 items-center justify-center text-2xl md:text-4xl text-center">
      <p className="text-xl sm:text-2xl md:text-3xl">
        Please reach out to me, for content ideas or business matters @<br />
        <a
          href="mailto:anasel.consultant@gmail.com"
          className="text-[0.8em]  bg-clip-text text-transparent bg-gradient-to-r from-rose-800 from-0% via-rose-500 via-50% to-rose-800 to-100% underline decoration-foreground-200"
        >
          anasel.consultant@gmail.com
        </a>
      </p>
      <footer className="text-medium sm:text-lg md:text-xl opacity-65">
        <p>Development slowly in progress...</p>
        <p>
          Built with <i>Next.js</i>
        </p>
      </footer>
    </aside>
  );
}
