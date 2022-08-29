import clsx from "clsx";
import { TextAlign, TextOverflow, TextWeight } from "components/Styles/models";

interface Props {
  align?: TextAlign;
  className?: string;
  color?: string;
  fontFamily?: "MontSerrat" | "Cabin" | "Azonix";
  id?: string;
  overflow?: TextOverflow;
  size?: 20 | 28 | 36 | 44;
  /** Truncate the text to a single line. */
  truncate?: boolean;
  weight?: number;
}

export default function Heading({
  align = "left",
  className,
  children,
  color = "white",
  fontFamily = "MontSerrat",
  id,
  overflow = "breakWord",
  size = 36,
  truncate = false,
  weight = 600,
}: React.PropsWithChildren<Props>) {
  const classes = clsx(
    "antialiased",
    "sans-serif",
    className,
    align === "center" && "align-center",
    align === "justify" && "align-justify",
    align === "left" && "align-left",
    align === "right" && "align-right",
    color === "blue" && "blue",
    color === "darkGray" && "dark-gray",
    color === "gray" && "gray",
    color === "green" && "green",
    color === "lightGray" && "light-gray",
    color === "red" && "red",
    color === "white" && "white",
    fontFamily === "MontSerrat" && "montserrat",
    fontFamily === "Cabin" && "cabin",
    fontFamily === "Azonix" && "azonix",
    overflow === "breakWord" && "break-word",
    overflow === "noWrap" && "no-wrap",
    size === 20 && "font-size-20",
    size === 28 && "font-size-28",
    size === 36 && "font-size-36",
    size === 44 && "font-size-44",
    truncate && "truncate"
  );

  function getTag() {
    switch (size) {
      case 20:
        return "h3";

      case 28:
        return "h2";

      case 36:
        return "h1";

      default:
        return "h1";
    }
  }

  const Tag = getTag();

  return (
    <Tag
      style={{ color, fontWeight: weight, fontSize: size }}
      className={classes}
      id={id}
      {...(truncate && typeof children === "string" && { title: children })}
    >
      {children}
    </Tag>
  );
}
