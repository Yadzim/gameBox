import { useLocation } from "react-router-dom";
import Slider from "../../pages/Slider";
import Background from "../ui/back";
import Footer from "./Footer";
import Header from "./Header";

// styles
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const auth = useLocation().pathname

  return (
    <div className={styles.layout}>
    {/* <Background/> */}
      <Header />
      {
        auth === "/" ? <Slider/> : null
      }
    {/* <Background/> */}
      <main className={`${styles.main_content} container`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
