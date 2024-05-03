import img from "@/../public/icons/favicon.ico";
import { zeyada } from "@/app/fonts";
import { Avatar } from "@nextui-org/avatar";

export default function Footer() {
  return (
    <footer className="backdrop-blur-lg bg-opacity-25 shadow-small dark:shadow-inner shadow-[var(--shadow-color)] dark:shadow-[var(--shadow-color)]">
      <p
        className={`text-center ${zeyada.className} text-3xl leading-10 font-bold my-3 text-[var(--foreground-color)]`}
      >
        Copyright{" "}
        <Avatar
          src={img.src}
          alt="Anas Avatar"
          size="md"
          radius="lg"
          isBordered
          className="bg-gradient-radial from-red-100 dark:from-red-50  outline-[var(--foreground-color)] inline-block align-text-top ring-[var(--foreground-color)] ring-offset-transparent ring-offset-0"
        />
        <span className="align-super">&copy;</span> {new Date().getFullYear()}
      </p>
    </footer>
  );
}
