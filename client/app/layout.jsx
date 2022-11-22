import Header from "../components/Header";
import Footer from "../components/Footer";
import { headers } from "next/headers";
import Login from "../components/Login";
import AuthContext from "../components/AuthContext";
import "../styles/globals.css";
import { Poppins } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  weight: "500",
});

export default async function RootLayout({ children }) {
  const getSession = async (cookie) => {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/auth/session`,
      {
        headers: { cookie },
      }
    );
    console.log(response.status);
    if (!response?.ok) {
      return null;
    }
    const session = await response.json();
    console.log(session);
    return Object.keys(session).length > 0 ? session : null;
  };

  const session = await getSession(headers().get("cookie") ?? "");

  if (!session) {
    return (
      <html lang="en" className={poppins.className}>
        <head />
        <body>
          <Header />
          <AuthContext>
            <Login />
          </AuthContext>
          <Footer />
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body>
        <Header />
        <AuthContext>{children}</AuthContext>
        <Footer />
      </body>
    </html>
  );
}
