import { Inter, Dekko, Delicious_Handrawn, Sen } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });
// export const handwriting = Delicious_Handrawn({ weight: "400", subsets: ["latin"] });
export const handwriting = localFont({
  src: "./Allison_Script.otf",
  display: "block",
  preload: true,
});
export const dekko = Dekko({ weight: "400", subsets: ["latin"] });
export const sen = Sen({ weight: "600", subsets: ["latin"] });
