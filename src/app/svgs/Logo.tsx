const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="315.982"
      height="101.951"
      viewBox="0 0 315.982 101.951"
    >
      <defs>
        <filter
          id="Intersection_2"
          x="0"
          y="0"
          width="76.463"
          height="101.951"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="7.5" result="blur" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Intersection_1"
          x="0"
          y="0"
          width="91.231"
          height="78.043"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="7.5" result="blur-2" />
          <feFlood floodOpacity="0.102" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Logo" transform="translate(-117.5 -37.422)">
        <text
          id="Company_Name"
          data-name="Company Name"
          transform="translate(197.482 100.324)"
          fill="#ff884a"
          fontSize="47"
          fontFamily="Helvetica"
        >
          <tspan x="0" y="0">
            eleos
          </tspan>
          <tspan y="0" fill="#fff">
            digital
          </tspan>
        </text>
        <g id="FAVICON" transform="translate(140 54.922)">
          <path
            id="Intersection_3"
            data-name="Intersection 3"
            d="M0,4.561A26.129,26.129,0,0,1,.4,0C2.531,2.782,12.688,15.825,18.777,19.818,25.606,24.3,35.8,22.968,35.8,22.968a11.078,11.078,0,0,1,10.427,6.654,33.717,33.717,0,0,1-14.892,3.414C14.031,33.036,0,20.287,0,4.561Z"
            transform="translate(0 23.915)"
            fill="#ff884a"
          />
          <g transform="matrix(1, 0, 0, 1, -22.5, -17.5)" filter="url(#Intersection_2)">
            <path
              id="Intersection_2-2"
              data-name="Intersection 2"
              d="M0,28.476C0,12.749,14.031,0,31.339,0h.124c-.063.058-12.95,12.04-16.656,17.24s-4.416,13.74-1.219,20.652c3.19,6.9,17.8,19,17.875,19.059h-.124C14.031,56.951,0,44.2,0,28.476Z"
              transform="translate(22.5 17.5)"
              fill="#ff884a"
            />
          </g>
          <g transform="matrix(1, 0, 0, 1, -22.5, -17.5)" filter="url(#Intersection_1)">
            <path
              id="Intersection_1-2"
              data-name="Intersection 1"
              d="M0,28.476C0,12.749,14.031,0,31.339,0A33.717,33.717,0,0,1,46.231,3.414,11.078,11.078,0,0,1,35.8,10.068s-9.868-2.029-17.027,3.151C12.405,17.828,2.5,30.343.4,33.043A26.116,26.116,0,0,1,0,28.476Z"
              transform="translate(22.5 17.5)"
              fill="#ff884a"
            />
          </g>
          <ellipse
            id="Ellipse_4"
            data-name="Ellipse 4"
            cx="14.204"
            cy="4.116"
            rx="14.204"
            ry="4.116"
            transform="translate(17.815 24.405)"
            fill="#ff884a"
          />
          <path
            id="Path_5"
            data-name="Path 5"
            d="M28.408,23.091a2.761,2.761,0,0,1-.394.965C26.546,25.85,20.919,27.2,14.2,27.2,7.646,27.2,2.126,25.912.473,24.146A2.9,2.9,0,0,1,0,23.091a49.528,49.528,0,0,1,14.2-2.479A49.528,49.528,0,0,1,28.408,23.091Z"
            transform="translate(17.815 5.441)"
            fill="#ff884a"
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
