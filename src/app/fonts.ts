import localFont from "next/font/local";

export const avenir = localFont({
  src: [
    // Regular
    {
      path: "../../public/fonts/avenir/Avenir-Roman.ttf",
      weight: "400",
      style: "normal",
    },
    // Medium
    {
      path: "../../public/fonts/avenir/Avenir-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-MediumOblique.ttf",
      weight: "500",
      style: "italic",
    },
    // Book
    {
      path: "../../public/fonts/avenir/Avenir-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-BookOblique.ttf",
      weight: "400",
      style: "italic",
    },
    // Light
    {
      path: "../../public/fonts/avenir/Avenir-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-LightOblique.ttf",
      weight: "300",
      style: "italic",
    },
    // Heavy
    {
      path: "../../public/fonts/avenir/Avenir-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-HeavyOblique.ttf",
      weight: "900",
      style: "italic",
    },
    // Black
    {
      path: "../../public/fonts/avenir/Avenir-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-BlackOblique.ttf",
      weight: "900",
      style: "italic",
    },
    // Italic
    {
      path: "../../public/fonts/avenir/Avenir-Oblique.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
});
