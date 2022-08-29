import Box from "components/Box";
import Card from "components/Card";
import Heading from "components/Heading";
import ProjectItem from "./ProjectItem";
import styles from "./styles.module.scss";
import useIsMobile from "helpers/useIsMobile";
import { Button } from "@mui/material";

export default function CardLastProjects() {
  const isMobile = useIsMobile({ mobileSize: 550 });
  return (
    <Box className={styles.container}>
      <Card>
        <Box className={styles.content}>
          <Box className={styles.header}>
            <Heading size={isMobile ? 20 : 28}>Experiência</Heading>
            {/* <Button>VER TODOS</Button> */}
          </Box>

          <Box className={styles.projectsWrapper}>
            <ProjectItem
              date="01/2021 - Atualmente"
              text="Desenvolvedor React | Pmakers"
              image="images/pmakers.svg"
            />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
