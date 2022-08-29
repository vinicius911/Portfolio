import clsx from "clsx";
import { TextAlign, TextOverflow, TextWeight } from "components/Styles/models";

interface Props {
  align?: TextAlign;
  className?: string;
  color?: string;
  inline?: boolean;
  italic?: boolean;
  lineThrough?: boolean;
  overflow?: TextOverflow;
  size?: 12 | 14 | 16 | 18;
  /** Truncate the text to a single line. */
  truncate?: boolean;
  weight?: number;
}

const Text: React.FC<Props> = ({
  align = "left",
  children,
  className,
  color = "white",
  inline = false,
  italic = false,
  lineThrough = false,
  overflow = "breakWord",
  size = 16,
  truncate = false,
  weight = 400,
}) => {
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
    italic && "font-style-italic",
    lineThrough && "text-decoration-line-through",
    overflow === "breakWord" && "break-word",
    overflow === "noWrap" && "no-wrap",
    size === 12 && "font-size-12",
    size === 14 && "font-size-14",
    size === 16 && "font-size-16",
    size === 18 && "font-size-18",
    truncate && "truncate"
  );

  const Tag = inline ? "span" : "div";

  return (
    <Tag
      style={{ color, fontWeight: weight, fontSize: size }}
      className={classes}
      {...(truncate && typeof children === "string" && { title: children })}
    >
      {children}
    </Tag>
  );
};

Text.defaultProps = {
  align: "left",
  color: "white",
  inline: false,
  italic: false,
  overflow: "breakWord",
  size: 16,
  truncate: false,
  weight: 400,
};

export default Text;
