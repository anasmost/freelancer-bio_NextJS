import Image from "next/image";
import { motion } from "framer-motion";
import img from "@/../public/images/Profile.png";
import styles from "./home.module.css";

export default function Home() {
  return (
    // <section className="flex-1 flex flex-col gap-14">
    <section
      id="home"
      className="uppercase text-3xl sm:text-5xl sm:flex-[1_1_80svh] flex items-center"
    >
      <p
        className={`${styles["animated-text"]} flex-1 flex flex-col gap-4 font-bold text-center sm:text-start before:border-b-red-500 dark:before:border-b-red-800`}
      >
        fullstack developer
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
