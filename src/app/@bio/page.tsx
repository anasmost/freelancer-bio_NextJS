import { dekko } from "../../fonts";
import styles from "./bio.module.css";

export default function Bio() {
  return (
    <section
      id="bio"
      className="sm:flex-[1_1_80svh] flex flex-col gap-4 items-center sm:py-16 md:px-8 md:shadow-small md:dark:shadow-large backdrop-blur-xl"
      aria-description="Author (Anas Mostafa) Technical Biography"
    >
      <h2 className="text-center uppercase text-3xl sm:text-4xl border-b-red-500 dark:border-b-red-700 border-b-5">
        Bio
      </h2>
      <div className={styles.container + " bg-transparent"}>
        <fieldset title="Styling Technologies" role="group">
          <legend>Styling</legend>
          <ul className="flex gap-2 flex-wrap justify-center max-w-full min-w-fit" role="list">
            <li>
              <i>CSS</i>
            </li>
            <li>
              <i>SASS</i>
            </li>
            <li>
              <i>Tailwind</i>
            </li>
            <li>
              <i>NextUI</i>
            </li>
            <li>
              <i>Material UI</i>
            </li>
            <li>
              <i>Ant Design</i>
            </li>
            <li>
              <i>Prime React</i>
            </li>
            <li>
              <i>WordPress CMS</i>
            </li>
          </ul>
        </fieldset>
        <fieldset title="Programming Technologies" role="group">
          <legend>Programming</legend>
          <ul className="flex gap-2 flex-wrap justify-center max-w-full min-w-fit" role="list">
            <li>Java</li>
            <li>
              <i>Javascript</i>
            </li>
            <li>
              <i>Typescript</i>
            </li>
            <li>
              <i>Spring-Boot</i>
            </li>
            <li>
              <i>NodeJS</i>
            </li>
            <li>
              <i>ReactJS</i>
            </li>
            <li>
              <i>NextJS</i>
            </li>
            {/* <li>
              <i>NestJS</i>
            </li> */}
            {/* <li>
              <i>Java</i>
            </li>
            <li>
              <i>Spring-Boot</i>
            </li> */}
            <li>
              <i>SQL</i>
            </li>
            <li>
              <i>NoSQL</i>
            </li>
          </ul>
        </fieldset>
        <article className="px-4 sm:px-12 pt-24 pb-40 min-[573px]:pt-20 sm:pt-14 sm:pb-28 lg:pb-24" role="article">
          <h3
            className={
              dekko.className +
              " tracking-widest font-extrabold capitalize text-center text-lg py-4 md:text-2xl xl:text-3xl leading-loose mt-4 mb-2"
            }
          >
            <i>Fullstack</i> consultant - <i>Java</i> <i>Javascript</i> <i>Typescript</i> Programmer
          </h3>
          <div className="lg:columns-2 lg:gap-x-10 text-balance text-justify md:[&>p]:!leading-8">
            <p className="mt-0 mb-3">
              Full-stack consultant focused on building secure, scalable products. I deliver production-ready backends
              with <i>Java</i>/<i>Spring Boot</i> using the servlet stack and <i>Node.js</i> with <i>Express.js</i>,{" "}
              <i>Hono</i> and <i>NestJS</i>, and front-ends in <i>Typescript</i> using <i>React</i>/<i>Next.js</i> with{" "}
              <i>SWR</i> for data fetching and <i>Redux Toolkit</i> for state management, using <i>Tailwind</i> and UI
              libraries like <i>Material UI</i>, <i>Ant Design</i>, <i>NextUI</i> and <i>Prime React</i>—with{" "}
              <i>Angular</i> when needed.
            </p>
            <p className="mb-3">
              I apply patterns that fit the framework: <i>Flux</i> style in <i>React</i>/<i>Next.js</i>,{" "}
              <i>event-driven</i> in <i>Angular</i>, and <i>Spring</i> <i>IoC</i> with eventing where it adds value. I
              craft <i>REST</i>/<i>GraphQL</i> APIs and follow <i>clean architecture</i> with solid layering to keep
              codebases maintainable and fast.
            </p>
            <p className="mb-3 col-span-2">
              Data layer: strong with <i>SQL</i> and <i>NoSQL</i> such as <i>MongoDB</i>—from relational modeling and
              performance tuning to aggregation pipelines—using <i>JPA</i>/<i>Hibernate</i>, <i>TypeORM</i> or native
              queries when it makes sense.
            </p>
            <p className="mb-3">
              Way of working: HTTP and WebSocket apps with <i>Express.js</i>, <i>Hono</i>, <i>NestJS</i> and{" "}
              <i>Socket.io</i> when real-time is needed. Automated tests with <i>JUnit</i> and <i>Jest</i>, CI/CD and
              observability.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
