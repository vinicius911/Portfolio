import Box from "components/Box";
import Card from "components/Card";
import CertificateItem from "./CertificateItem";
import Heading from "components/Heading";
import styles from "./styles.module.scss";
import useIsMobile from "helpers/useIsMobile";
import { Button } from "@mui/material";

export default function CardCertificates() {
  const isMobile = useIsMobile({ mobileSize: 550 });
  return (
    <Box className={styles.container}>
      <Card>
        <Box className={styles.content}>
          <Box className={styles.header}>
            <Heading size={isMobile ? 20 : 28}>Certificados</Heading>
            {/* <Button>VER TODOS</Button> */}
          </Box>

          <Box className={styles.projectsWrapper}>
            <CertificateItem
              image="images/astronauta.png"
              course="STARTER PACK"
              company="Front Academy, 2022"
            />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
