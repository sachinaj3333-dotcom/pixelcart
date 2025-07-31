import { useEffect, useState } from "react";
import Mobheader from "./moblieheader";
import Header from "./header";

const ResponsiveNavbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1100);
      };
      
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return(
      <>
        {isMobile ? <Mobheader/> : <Header/>}
      </>
    );
  };


  export default ResponsiveNavbar;