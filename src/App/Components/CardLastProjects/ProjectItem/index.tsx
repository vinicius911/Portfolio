import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Box from "components/Box";
import styles from "./styles.module.scss";
import Text from "components/Text";
import useIsMobile from "helpers/useIsMobile";

interface Props {
  text: string;
  image: string;
  date: string;
}

export default function ProjectItem({ text, image, date }: Props) {
  const isMobile = useIsMobile({ mobileSize: 550 });
  return (
    <Box className={styles.container}>
      <img src={image} />
      <Box className={styles.right}>
        <Box
          display="flex"
          direction="column"
          alignItems={isMobile ? "start" : "center"}
        >
          <Text size={isMobile ? 14 : 18}>{text}</Text>
          <Text size={isMobile ? 14 : 18}>{date}</Text>
        </Box>
        {/* <ArrowForwardIosRoundedIcon color="primary" /> */}
      </Box>
    </Box>
  );
}
