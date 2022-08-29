import Box from "components/Box";
import Card from "components/Card";
import Heading from "components/Heading";
import styles from "./styles.module.scss";
import useIsMobile from "helpers/useIsMobile";

export default function CardSkills() {
  const isMobile = useIsMobile({ mobileSize: 550 });
  return (
    <Box className={styles.container}>
      <Card>
        <Box className={styles.content}>
          <Box className={styles.header}>
            <Heading size={isMobile ? 20 : 28}>
              Tecnologias e frameworks
            </Heading>
          </Box>
          <Box className={styles.tecnologiasWrapper}>
            <img
              width={isMobile ? 30 : 50}
              src="images/tecnologias/javascript.png"
            />
            <img
              width={isMobile ? 30 : 50}
              src="images/tecnologias/typescript.png"
            />
            <img width={isMobile ? 30 : 50} src="images/tecnologias/git.png" />
            <img width={isMobile ? 40 : 60} src="images/tecnologias/sass.png" />
            <img
              width={isMobile ? 60 : 110}
              src="images/tecnologias/react.png"
            />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
