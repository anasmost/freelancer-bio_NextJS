import { zeyada } from "@/app/fonts";

export default function Footer() {
  return (
    <footer className="backdrop-blur-3xl bg-white bg-opacity-40">
      <p className={`text-center ${zeyada.className} text-3xl font-bold`}>
        Copyright{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r to-black from-rose-300">
          AM&copy;
        </span>{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
