import styles from "./page.module.css";
import Form from "./form";
import { ToastContainer } from "react-toastify";

export default function Login() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}></div>
        <div className={styles.containerForm}>
          <h2 className={styles.title}>Login</h2>
          <Form />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
