import Box from "components/Box";
import CardAbout from "App/Components/CardAbout";
import CardCertificates from "App/Components/CardCertificates";
import CardLastProjects from "App/Components/CardLastProjects";
import CardSkills from "App/Components/CardSkills";
import Container from "components/Container";
import styles from "./styles.module.scss";
import Text from "components/Text";
import Link from "next/link";

export default function HomePage() {
  return (
    <Box className={styles.container}>
      <Container>
        <Box className={styles.cardsWrapper}>
          <CardAbout />
          <Box className={styles.rightCards}>
            <CardSkills />
            <CardLastProjects />
            <CardCertificates />
          </Box>
        </Box>
        <Box className={styles.frontAcademy}>
          <Text size={18}>Powered by</Text>
          <Link href="https://www.frontacademy.com.br/">
            <a target="_blank">
              <img src="images/front-academy.png" />
            </a>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
