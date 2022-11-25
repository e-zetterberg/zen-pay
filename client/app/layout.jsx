import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthContext from "../components/AuthContext";
import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import { unstable_getServerSession } from "next-auth";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  weight: "500",
});

export default async function RootLayout({ children }) {
  const session = await unstable_getServerSession();
  const getUserData = async () => {
    if(session){
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
