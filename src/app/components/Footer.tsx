import img from "@/../public/icons/favicon.ico";
import { handwriting } from "@/fonts";
import { Avatar } from "@nextui-org/avatar";

export default function Footer() {
  return (
    <footer className="backdrop-blur-lg bg-opacity-25 shadow-small dark:shadow-inner shadow-[var(--shadow-color)] dark:shadow-[var(--shadow-color)]">
      <p
        className={`${handwriting.className} text-center tracking-wide text-2xl font-bold text-[var(--foreground-color)]`}
      >
        Copyright{" "}
        <Avatar
          src={img.src}
          alt="Anas Avatar"
          size="md"
          radius="lg"
          isBordered
          className="bg-gradient-radial from-red-100 dark:from-red-50 outline-none inline-block ring-[var(--foreground-color)] ring-offset-transparent ring-offset-1 align-text-top"
        />
        <span className="align-super text-3xl">&copy;</span> {new Date().getFullYear()}
      </p>
    </footer>
  );
}
