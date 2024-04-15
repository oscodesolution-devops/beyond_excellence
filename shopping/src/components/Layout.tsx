import Footer from "./Footer";
import Header from "./Header";
export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="flex-auto p-0 m-0">{children}</main>
            <Footer />
        </>
    )
}
