interface Props {
  size?: number;
}

export default function Gmail({ size = 35 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size * 75) / 100}
      viewBox="0 0 41.79 31.551"
    >
      <g id="gmail" transform="translate(0 0)">
        <rect
          id="Retângulo_5430"
          data-name="Retângulo 5430"
          width="31.073"
          height="31.551"
          transform="translate(5.259 0)"
          fill="#eceff1"
        />
        <path
          id="Caminho_360"
          data-name="Caminho 360"
          d="M256,160.729,271.671,173.1V148.672Z"
          transform="translate(-235.105 -141.761)"
          fill="#cfd8dc"
        />
        <path
          id="Caminho_361"
          data-name="Caminho 361"
          d="M37.872,64H36.567L20.9,76.375,5.224,64H3.918A3.919,3.919,0,0,0,0,67.918V91.425a3.919,3.919,0,0,0,3.918,3.918H5.224V70.911L20.9,82.965,36.567,70.908V95.343h1.306a3.919,3.919,0,0,0,3.918-3.918V67.918A3.919,3.919,0,0,0,37.872,64Z"
          transform="translate(0 -64)"
          fill="#f44336"
        />
      </g>
    </svg>
  );
}
