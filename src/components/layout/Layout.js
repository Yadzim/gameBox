import Slider from "../../pages/Slider";
import Background from "../ui/back";
import Header from "./Header";

// styles
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Slider/>
    <Background/>
      <main className={`${styles.main_content} container`}>{children}</main>
    </>
  );
};

export default Layout;
