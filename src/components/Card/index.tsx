import Box from "components/Box";
import styles from "./styles.module.scss";

interface Props {}

function Card({ children }: React.PropsWithChildren<Props>) {
  return <Box className={styles.card}>{children}</Box>;
}

export default Card;
