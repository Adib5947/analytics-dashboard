import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="flex h-screen overflow-hidden">

          <Sidebar />


          <div className="flex flex-1 flex-col overflow-hidden">

            <Header />

            <main
              className="
                flex-1
                overflow-y-auto
                bg-gradient-to-br from-black via-gray-950 to-black
                px-6 py-6
              "
            >
              {children}

              <footer className="mt-12 pb-6 text-xs text-gray-500">
                © 2026 AppifyDevs
              </footer>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
