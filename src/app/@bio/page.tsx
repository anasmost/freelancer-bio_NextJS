import { permanentMarker } from "@/app/fonts";
import styles from "./bio.module.css";

export default function Bio() {
  return (
    <section
      id="bio"
      className="sm:flex-[1_1_80svh] flex flex-col gap-4 items-center sm:py-16 md:px-8 md:shadow-small md:dark:shadow-large backdrop-blur-xl"
    >
      <h2 className="text-center uppercase text-3xl sm:text-4xl border-b-red-500 dark:border-b-red-800 border-b-5">
        Bio
      </h2>
      <div className={styles.container + " bg-transparent"}>
        <fieldset title="Styling Technologies" role="group">
          <legend>Styling</legend>
          <ul className="flex gap-2 flex-wrap max-w-full min-w-fit w-[90%] lg:w-[70%]" role="list">
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
          </ul>
        </fieldset>
        <fieldset title="Programming Technologies" role="group">
          <legend>Programming</legend>
          <ul className="flex gap-2 flex-wrap max-w-full min-w-fit w-[90%] lg:w-[70%]" role="list">
            <li>
              <i>Javascript</i>
            </li>
            <li>
              <i>Typescript</i>
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
            <li>
              <i>NestJS</i>
            </li>
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
        <article
          className="px-4 sm:px-12 pt-28 pb-40 min-[320px]:pt-24 min-[320px]:pb-30 min-[480px]:pb-24 min-[510px]:pt-14 sm:pb-28 lg:pb-24"
          role="article"
        >
          <h3
            className={
              permanentMarker.className +
              " font-extrabold capitalize text-center text-sm sm:p-4 md:text-xl lg:text-2xl xl:text-3xl leading-loose mt-4"
            }
          >
            <i>Fullstack</i> consultant - <i>Javascript</i> <i>Typescript</i> Programmer
          </h3>
          <div className="lg:columns-2 lg:gap-x-10 text-balance text-justify">
            <p className="mt-0 mb-3">
              Integrating academic knowledge with additional sought for and self-taught concepts and
              techniques, I came out a Fullstack Engineer having specialized at first in the{" "}
              <i>Javascript</i> <i>Typescript</i> programming stack consisting of <i>NodeJS</i> &{" "}
              <i>ReactJS</i>, while having gradually added multiple libraries and frameworks to my
              Arsenal due to either role assignments or to performance and security pressures which
              lead to web docs, including <i>ExpressJS</i> <i>PassportJS</i> <i>AuthJS</i>{" "}
              <i>NextJS</i> & <i>NestJS</i>, among others.
            </p>
            <p className="mb-3">
              This being said, it implies my familiarity with the majority of the expected browser
              and server features. The later uses databases most of the time, which brings the need
              for <i>SQL</i> skills as a universal query language for every well established
              Relational <i>DBMS</i> and other more flexible <i>NoSQL</i> <i>DBMS</i> like{" "}
              <i>MongoDB</i>.
            </p>
            <p className="mb-3 col-span-2">
              Fortunately, I've had the opportunity to sharpen my expertise in <i>SQL</i> and
              <i>MongoDB</i> through roles involving <i>SQL</i> reporting and complex <i>MongoDB</i>
              queries for large scale apps.
            </p>
            <p className="mb-3">
              Anyhow, assuming my choice of this field of endeavor of which factors and tools seem
              to be the most volatile and various compared to others, I'm on a day to day schedule
              of <em className="text-red-900 dark:text-red-100">technology watch</em> and{" "}
              <em className="text-red-900 dark:text-red-100">perpetual learning</em>, stacking more
              technologies and IT skills not limited to web development, with no consideration for
              unreasonable rest, until the D-day.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
