import Header from "./Header";

// styles
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      
      <main className={`${styles.main_content} container`}>{children}</main>
    </>
  );
};

export default Layout;
