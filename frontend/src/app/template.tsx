import Header from "@/components/Header";
import localFont from "next/font/local";

const helventica = localFont({
    src: [
        { path: "../fonts/HelveticaNeue/HelveticaNeueBlack.otf", style: "normal", weight: "800" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueBlackItalic.otf", style: "italic", weight: "800" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueBold.otf", weight: "bold" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueBoldItalic.otf", style: "italic", weight: "bold" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueHeavy.otf", weight: "900" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueHeavyItalic.otf", style: "italic", weight: "900" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueItalic.ttf", style: "italic" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueLight.otf", weight: "300" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueLightItalic.otf", style: "italic", weight: "300" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueMedium.otf", weight: "500" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueMediumItalic.otf", style: "italic", weight: "500" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueRoman.otf", weight: "400" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueThin.otf", weight: "100" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueThinItalic.otf", style: "italic", weight: "100" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueUltraLight.otf", weight: "200" },
        { path: "../fonts/HelveticaNeue/HelveticaNeueUltraLightItalic.otf", style: "italic", weight: "200" },
    ],
});

export default function RootTemplate({ children }: { children: React.ReactElement }) {
    return (
        <body className={`${helventica.className} antialiased`}>
            <Header />
            {children}
        </body>
    );
}
