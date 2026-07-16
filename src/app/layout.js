import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);



import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});



export const metadata = {
  title: "Dragon News",
  description: "A online news site"
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={` h-full antialiased`}
    >
      <body className={`${poppins.variable} min-h-full flex flex-col`}>{children}
        <ToastContainer
        ></ToastContainer>
      </body>
    </html>
  );
}
