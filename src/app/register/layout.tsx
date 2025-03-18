import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register",
    description: "This is the register page",
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