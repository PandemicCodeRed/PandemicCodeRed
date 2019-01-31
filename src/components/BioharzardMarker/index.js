import React from "react";

const BiohazardMarker = ({
  name = '',
  style = {},
  fill = 'black',
  width = '70px',
  className = '',
  height = '35px',
  viewBox = '0 0 32 32',
  transform = 'translate(200,2.5)'
}) => (
//   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="svg3069" preserveAspectRatio="none" viewBox="0 0 200 100" >
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} id="svg3069"
version="1" viewBox="0 0 2000 800">
    <defs id="defs3073">
        <path d="M 2.8117,-1.046 A 3 3 0 0 1 .5,2.958 V 4.5119 A 10.5 10.5 0 0 1 2,25.3078 V 25.8661 A 15 15 0 0 0 14.7975,8.5433 15 15 0 0 0 23.4007,-11.201 L 22.9172,-10.9218 A 10.5 10.5 0 0 1 4.1574,-1.8229 z M 6.2265,7.825 A 10 10 0 0 1 -6.2265,7.825 9.5 9.5 0 0 0 -8.4021,10.5667 13.5 13.5 0 0 0 8.4021,10.5667 10 10 0 0 0 6.2265,7.825 z"
        id="p" transform="matrix(10 0 0 -10 260 260)" fill={fill} />
    </defs>
    <g id="g3396">
        <path d="M597.6,499.6L313.8,8c-2.9-5-8.2-8-13.9-8c-5.7,0-11,3.1-13.9,8L2.2,499.6c-2.9,5-2.9,11.1,0,16 c2.9,5,8.2,8,13.9,8h567.6c5.7,0,11-3.1,13.9-8C600.5,510.6,600.5,504.5,597.6,499.6z"
        id="sign_border" />
        <polygon points="299.875,48.2 555.875,491.5 43.875,491.5" id="polygon7"
        transform="matrix(1 0 0 .99591 .125 2.033)" fill="#ffdc32" overflow="visible"
        />
        <g transform="matrix(.675 0 0 .675 124.5 169.11)" id="biohazard">
            <use height="1" width="1" id="use3341" xlinkHref="#p" />
            <use height="1" width="1" id="use3343" transform="rotate(120 260 260)"
            xlinkHref="#p" />
            <use height="1" width="1" id="use3345" transform="rotate(-120 260 260)"
            xlinkHref="#p" />
        </g>
    </g>
</svg>
);

export default BiohazardMarker;
