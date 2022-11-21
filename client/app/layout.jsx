import Header from "./Header"
import Footer from "./Footer"
import AuthContext from "./(Components)/AuthContext";
import "../styles/globals.css"
import { Poppins } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  weight: '500',
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body>
        <Header />
          <AuthContext>
            {children}
          </AuthContext>
        <Footer />
        </body>
    </html>
  )
}
