import styles from "./home.module.css";
import Image from "next/image";
import developerImg from "@/../public/images/developer.jpg";
import { screens } from "tailwindcss/defaultTheme";

export default function Home() {
  return (
    // <section className="flex-1 flex flex-col gap-14">
    <section
      id="home"
      className={`${styles.common} uppercase text-3xl sm:text-5xl 2xl:text-6xl sm:flex-[1_1_80svh] flex items-center justify-center lg:justify-start gap-x-20 max-w-full relative`}
      aria-description="Welcome, just a small animated title"
    >
      <p
        className={`${styles["home-title"]} flex flex-col font-bold text-center sm:text-start flex-shrink-0 p-10 rounded-full z-10 mt-2 before:border-b-red-500 dark:before:border-b-red-700 w-fit`}
      >
        fullstack developer
      </p>
      <Image
        src={developerImg}
        alt="A developer working in his office"
        fill
        priority
        placeholder="blur"
        sizes={`(max-width: ${screens.md}) 0, (max-width: ${screens.lg}) ${screens.md}, (min-width: ${screens.lg}) ${screens.lg}`}
        className={`${styles.image} flex-1 min-w-0 max-w-4xl hidden md:block justify-self-center object-cover object-center`}
      />
      <p className="absolute w-max inset-x-[100%]  z-10 px-10 py-3 mt-4 ml-auto self-start rounded-lg backdrop-blur-md backdrop-opacity-50 border border-red-400 animate-[appearance-in_1s_4s_normal_backwards]">
        <a
          href="https://anasmostafa.netlify.app/"
          target="_blank"
          className="text-xl flex items-center cursor-pointer group animate-[bounce-arrow_1s_4s_ease-out_infinite_alternate,appearance-in_1s_4s_normal_backwards] text-yellow-600"
        >
          <span>New page</span>
          <svg
            className="w-10 h-10 md:w-12 md:h-12  animate-[bounce-arrow_1s_4s_ease-out_infinite_alternate] transition-transform duration-200 ease-out group-hover:translate-x-1"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </a>
      </p>
    </section>
    // <section className="grid grid-cols-2 gap-x-4 gap-y-6 auto-rows-min place-items-center min-h-[77svh]">
    //   <h2 className="col-span-2 text-center text-4xl border-b-rose-500 border-b-5">About me</h2>
    //   <motion.div
    //     transition={{ duration: 1, delay: 0.6 }}
    //     initial={{
    //       opacity: 0,
    //       x: -40,
    //       scale: 0.85,
    //     }}
    //     whileInView={{
    //       opacity: 1,
    //       x: 0,
    //       scale: 1,
    //     }}
    //   >
    //     <Image src={img} alt="Anas Mostafa Photo" height={400} />
    //   </motion.div>
    //   <motion.p
    //     transition={{ duration: 1, delay: 0.6 }}
    //     initial={{
    //       opacity: 0,
    //       x: 40,
    //       scale: 0.85,
    //     }}
    //     whileInView={{
    //       opacity: 1,
    //       x: 0,
    //       scale: 1,
    //     }}
    //     className="text-xl leading-8"
    //   >
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo odit doloribus
    //     eum. Modi quos sunt necessitatibus ut incidunt minima placeat cumque blanditiis quam,
    //     ullam vitae ducimus omnis quisquam nisi culpa at accusantium a laborum fugiat repudiandae,
    //     id minus sed saepe! Aperiam voluptas, quia facere quaerat molestias voluptatibus, enim
    //     expedita laudantium alias sint, vero a veritatis nisi voluptate aspernatur debitis? Hic
    //     excepturi quo nesciunt vitae qui molestiae illum eius vel eaque minus quos dolore
    //     similique nam adipisci voluptatum laudantium repellendus sint, sunt, ut unde! Voluptatum a
    //     quam nostrum expedita perspiciatis enim reprehenderit molestiae dicta voluptatibus sit
    //     sint voluptas, aliquam impedit?
    //   </motion.p>
    // </section>
    // <section className="grid grid-cols-2 gap-x-4 gap-y-6 auto-rows-min place-items-center grid-flow-col min-h-[77svh]">
    //   <h2 className="col-start-1 col-span-2 text-center text-4xl border-b-rose-500 border-b-5">
    //     Chi 9lwa
    //   </h2>
    //   <motion.div
    //     transition={{ duration: 1, delay: 0.6 }}
    //     initial={{
    //       opacity: 0,
    //       x: 40,
    //       scale: 0.85,
    //     }}
    //     whileInView={{
    //       opacity: 1,
    //       x: 0,
    //       scale: 1,
    //     }}
    //   >
    //     <Image src={img} alt="Anas Mostafa Photo" height={400} />
    //   </motion.div>
    //   <motion.p
    //     transition={{ duration: 1, delay: 0.6 }}
    //     initial={{
    //       opacity: 0,
    //       x: -40,
    //       scale: 0.85,
    //     }}
    //     whileInView={{
    //       opacity: 1,
    //       x: 0,
    //       scale: 1,
    //     }}
    //     className="col-start-1 text-xl leading-8"
    //   >
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo odit doloribus
    //     eum. Modi quos sunt necessitatibus ut incidunt minima placeat cumque blanditiis quam,
    //     ullam vitae ducimus omnis quisquam nisi culpa at accusantium a laborum fugiat repudiandae,
    //     id minus sed saepe! Aperiam voluptas, quia facere quaerat molestias voluptatibus, enim
    //     expedita laudantium alias sint, vero a veritatis nisi voluptate aspernatur debitis? Hic
    //     excepturi quo nesciunt vitae qui molestiae illum eius vel eaque minus quos dolore
    //     similique nam adipisci voluptatum laudantium repellendus sint, sunt, ut unde! Voluptatum a
    //     quam nostrum expedita perspiciatis enim reprehenderit molestiae dicta voluptatibus sit
    //     sint voluptas, aliquam impedit?
    //   </motion.p>
    // </section>
    // </section>
  );
}
