import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Capsule Details",
    description: "This is the capsule details page",
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