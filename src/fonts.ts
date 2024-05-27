import { Inter, Dekko, Sen, The_Girl_Next_Door } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });
export const handwriting = The_Girl_Next_Door({ weight: "400", subsets: ["latin"] });
// export const handwriting = localFont({
//   src: "./Allison_Script.otf",
//   display: "block",
//   preload: true,
// });
export const dekko = Dekko({ weight: "400", subsets: ["latin"] });
export const sen = Sen({ weight: "600", subsets: ["latin"] });
