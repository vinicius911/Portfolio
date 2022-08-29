import Box from "components/Box";
import Card from "components/Card";
import Cv from "components/Icons/Cv";
import EmailIcon from "@mui/icons-material/Email";
import Github from "components/Icons/Github";
import Gmail from "components/Icons/Gmail";
import Heading from "components/Heading";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Linkedin from "components/Icons/Linkedin";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import styles from "./styles.module.scss";
import Text from "components/Text";
import useIsMobile from "helpers/useIsMobile";
import UserPhoto from "./UserPhoto";

export default function CardAbout() {
  const isMobile = useIsMobile({ mobileSize: 550 });
  return (
    <Box className={styles.container}>
      <Box className={styles.photo}>
        <UserPhoto />
      </Box>
      <Card>
        <Box className={styles.cardContent}>
          <Box className={styles.textsWrapper}>
            <Heading size={isMobile ? 36 : 44}>Vinicius Moslaves</Heading>
            <Heading weight={400} size={isMobile ? 20 : 28} color="#5DB9FA">
              Desenvolvedor Front-end
            </Heading>
            <Box className={styles.textAbout}>
              <Text size={isMobile ? 16 : 18}>
                Desenvolvedor front-end com mais de 1 ano de experiência com
                desenvolvimento web e mobile, apaixonado por desafios e novas
                tecnologias.
                <br />
                Stack atual: ReactJs, NextJs, React Native, SASS e Typescript
              </Text>
            </Box>
          </Box>
          <Box className={styles.contactWrapper}>
            <a>
              <LocationOnOutlinedIcon color="secondary" />
              <Text size={isMobile ? 16 : 18} color="#ACACAC">
                Brasilia, DF - Brasil
              </Text>
            </a>

            <Link href="mailto:vinicius.moslaves09@gmail.com">
              <a>
                <EmailIcon color="secondary" />
                <Text size={isMobile ? 16 : 18} color="#ACACAC">
                  vinicius.moslaves09@gmail.com
                </Text>
              </a>
            </Link>
            <Link href="tel:+5561982262002">
              <a>
                <PhoneInTalkOutlinedIcon color="secondary" />
                <Text size={isMobile ? 16 : 18} color="#ACACAC">
                  +55 61 98226-2002
                </Text>
              </a>
            </Link>
          </Box>

          <Box className={styles.linksWrapper}>
            <IconButton
              href="https://gitlab.com/vinicius.moslaves"
              classes={{
                root: styles.iconButtonRoot,
              }}
              aria-label="gitlab"
              size="small"
            >
              <Github size={isMobile ? 25 : 30} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/vinicius-moslaves-b99a38220/"
              classes={{ root: styles.iconButtonRoot }}
              aria-label="linkedin"
            >
              <Linkedin size={isMobile ? 25 : 30} />
            </IconButton>
            <IconButton
              href="mailto:vinicius.moslaves09@gmail.com"
              classes={{ root: styles.iconButtonRoot }}
              aria-label="gmail"
            >
              <Gmail size={isMobile ? 25 : 30} />
            </IconButton>
            <IconButton
              href="/Curriculo_ViniciusMoslaves.pdf"
              classes={{ root: styles.iconButtonRoot }}
              aria-label="curriculo"
            >
              <Cv size={isMobile ? 25 : 30} />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
