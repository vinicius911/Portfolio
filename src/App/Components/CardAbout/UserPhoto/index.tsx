import Box from "components/Box";
import styles from "./styles.module.scss";

export default function UserPhoto() {
  return (
    <Box className={styles.container}>
      <img src="/images/eu.jpg" />
    </Box>
  );
}
