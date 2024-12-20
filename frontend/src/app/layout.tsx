import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Shopee Việt Nam | Mua và Bán Trên Ứng Dụng Di Động Hoặc Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <html lang="vi">{children}</html>;
}
