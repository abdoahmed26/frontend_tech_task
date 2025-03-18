import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
    description: "This is the home page",
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}