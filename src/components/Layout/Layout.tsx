import { ReactNode } from "react";
import Navbar from "../Navigation/Navbar";
import FooterComponent from "../Footer/FooterComponent";

interface ChildrenProps {
    children: ReactNode
}

const Layout = ({children}: ChildrenProps) => {
  return (
    <>
        <Navbar />
            {children}
        <FooterComponent />
    </>
  )
}

export default Layout;