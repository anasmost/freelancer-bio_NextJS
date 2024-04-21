import img from "@/../public/icons/android-chrome-192x192.png";
import { zeyada } from "@/app/fonts";
import { Avatar } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="backdrop-blur-lg bg-white bg-opacity-50 shadow-inner">
      <p className={`text-center ${zeyada.className} text-3xl leading-10 font-bold my-3`}>
        Copyright{" "}
        {/* <span className="bg-clip-text text-transparent bg-gradient-to-r to-black from-red-500"> */}
        <Avatar
          src={img.src}
          alt="Anas Avatar"
          size="md"
          radius="lg"
          isBordered
          className="bg-gradient-radial from-red-800 via-red-50 to-transparent outline-[var(--foreground-color)] inline-block align-text-top"
        />
        <span className="align-super">&copy;</span> {new Date().getFullYear()}
        {/* </span>{" "} */}
      </p>
    </footer>
  );
}
