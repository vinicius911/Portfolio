import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Box from "components/Box";
import styles from "./styles.module.scss";
import Text from "components/Text";
import Heading from "components/Heading";

interface Props {
  image?: string;
  course?: string;
  company?: string;
  autentification?: string;
}

export default function CertificateItem({
  image,
  course,
  company,
  autentification,
}: Props) {
  return (
    <Box className={styles.container}>
      <img src={image} />
      <Box className={styles.right}>
        <Heading size={20} fontFamily="Azonix" color="#5CFF9B">
          {course}
        </Heading>

        <Text>{company}</Text>
        <Text size={12}> {autentification}</Text>
      </Box>
    </Box>
  );
}
