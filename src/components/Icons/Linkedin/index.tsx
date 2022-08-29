interface Props {
  size?: number;
  color?: string;
}

export default function Linkedin({ size = 35, color = "#0076ff" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 35.502 35.502"
    >
      <path
        id="Icon_awesome-linkedin"
        data-name="Icon awesome-linkedin"
        d="M32.966,2.25H2.528A2.547,2.547,0,0,0,0,4.81V35.192a2.547,2.547,0,0,0,2.528,2.56H32.966a2.554,2.554,0,0,0,2.536-2.56V4.81A2.554,2.554,0,0,0,32.966,2.25ZM10.73,32.68H5.468V15.738h5.27V32.68ZM8.1,13.424a3.051,3.051,0,1,1,3.051-3.051A3.052,3.052,0,0,1,8.1,13.424ZM30.454,32.68H25.192V24.439c0-1.965-.04-4.493-2.734-4.493-2.742,0-3.162,2.14-3.162,4.351V32.68H14.034V15.738h5.048v2.314h.071a5.542,5.542,0,0,1,4.985-2.734c5.325,0,6.316,3.511,6.316,8.075Z"
        transform="translate(0 -2.25)"
        fill={color}
      />
    </svg>
  );
}
