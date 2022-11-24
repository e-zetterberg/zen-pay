import Header from "../components/Header";
import Footer from "../components/Footer";
import { headers } from "next/headers";
import Login from "../components/Login";
import AuthContext from "../components/AuthContext";
import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import { UserContextProvider } from "../components/UserContext";

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

  const getUserData = async () => {
    const session = await getSession(headers().get("cookie") ?? "");
    if(session!=null){
      const response = await fetch(
        `http://localhost:8080/api/users/${session.user.email}`,
        {
          cache: "no-store",
        }
      )
      const data = await response.json();
      return data;
    }else{
      return null;
    }
  };

  const session = await getSession(headers().get("cookie") ?? "");
  const userInfo = await getUserData();


  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body>
       
        <Header />
          <AuthContext session={session} userInfo = {userInfo}>
             {children}
          </AuthContext>
        <Footer />
       
      </body>
    </html>
  );
}
