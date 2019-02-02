import React from "react";

const BioLab = ({
  name = '',
  style = {},
  fill = 'white',
  width = '50px',
  className = '',
  height = '25px',
  viewBox = '0 0 32 32',
  transform = 'translate(200,2.5)'
}) => (
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
width={width} height={height} viewBox="0 -50 500 450" id="svg8">
    <defs id="defs2">
        <path transform="matrix(10 0 0 -10 260 260)" id="p" d="M 2.8117,-1.046 A 3 3 0 0 1 .5,2.958 V 4.5119 A 10.5 10.5 0 0 1 2,25.3078 V 25.8661 A 15 15 0 0 0 14.7975,8.5433 15 15 0 0 0 23.4007,-11.201 L 22.9172,-10.9218 A 10.5 10.5 0 0 1 4.1574,-1.8229 z M 6.2265,7.825 A 10 10 0 0 1 -6.2265,7.825 9.5 9.5 0 0 0 -8.4021,10.5667 13.5 13.5 0 0 0 8.4021,10.5667 10 10 0 0 0 6.2265,7.825 z" fill="black"
        />
    </defs>
    <g id="layer1">
        <g id="g4016" transform="matrix(.03528 0 0 -.03528 -119.965 370.192)">
            <path id="path4012" d="m 8515,12519 c -33,-15 -100,-47 -150,-69 -49,-23 -100,-50 -112,-62 -18,-17 -34,-21 -73,-19 -216,10 -851,-158 -1343,-356 l -109,-43 h -171 c -576,0 -1041,94 -1294,261 -25,16 -34,18 -37,7 -3,-7 -14,-47 -26,-88 -71,-250 -224,-694 -325,-940 -50,-122 -153,-325 -203,-402 -54,-81 -125,-158 -148,-158 -15,0 -147,-120 -140,-127 7,-7 112,67 223,156 135,108 290,252 396,368 259,283 357,496 302,653 -8,23 -15,70 -15,104 0,62 -17,271 -25,316 l -5,25 17,-25 c 10,-14 40,-48 68,-77 44,-45 50,-55 41,-75 -18,-43 -7,-260 27,-520 l 33,-257 -104,-67 c -352,-226 -660,-465 -902,-700 -313,-305 -517,-615 -636,-968 -19,-55 -34,-103 -34,-108 0,-9 98,-72 157,-101 23,-11 45,-29 48,-39 23,-71 258,-168 548,-226 133,-27 135,-27 323,-16 281,18 354,25 354,35 0,5 -3,9 -7,9 -17,0 -400,83 -411,89 -7,4 25,5 71,3 46,-2 136,1 200,7 96,9 131,9 203,-4 48,-8 89,-17 91,-18 1,-2 -36,-32 -84,-67 l -86,-63 25,-13 c 14,-7 66,-19 116,-25 260,-35 746,78 1281,297 139,57 152,61 146,41 -3,-12 -9,-41 -12,-63 l -5,-42 -89,-16 C 6514,9113 6383,9067 6255,9001 5465,8598 4818,8285 3810,7820 2478,7206 1696,6829 1089,6512 909,6418 827,6368 687,6266 590,6195 510,6136 510,6134 c 0,-14 313,127 590,266 110,55 201,100 203,100 1,0 -23,-28 -55,-62 C 1144,6326 1042,6161 979,6003 884,5763 829,5481 760,4875 706,4401 670,4185 609,3980 c -35,-115 -35,-121 -79,-660 -38,-453 -50,-774 -39,-986 8,-162 30,-342 50,-402 6,-18 9,-36 6,-39 -9,-8 -64,175 -86,283 -44,214 -58,466 -42,719 20,299 71,666 128,910 15,67 28,163 33,245 10,163 22,235 106,630 111,519 141,737 124,877 -18,136 -61,188 -158,187 -44,0 -73,-8 -127,-35 l -70,-34 -37,-200 C 217,4388 75,3335 26,2550 -1,2125 -5,1885 14,1802 c 105,-460 401,-696 946,-752 147,-15 399,-16 950,-6 424,8 489,7 609,-8 73,-10 165,-26 205,-37 39,-10 143,-28 231,-39 525,-64 887,-162 1785,-482 788,-282 1147,-388 1564,-463 96,-18 157,-14 601,36 1044,117 1886,269 4218,764 424,90 558,115 590,110 60,-9 308,12 403,35 230,54 398,163 510,329 142,211 196,538 164,996 -17,238 -99,982 -125,1130 -64,366 -74,538 -85,1405 -9,775 -17,943 -61,1225 -21,135 -27,164 -60,305 -25,103 -95,317 -114,346 -16,25 -188,104 -475,219 -225,90 -481,182 -930,334 -834,281 -1032,356 -1482,565 -109,50 -388,200 -483,259 -131,82 -306,200 -555,377 -382,271 -598,409 -790,505 -41,21 -76,38 -77,39 -2,1 26,31 61,67 172,176 219,486 90,588 -45,35 -101,24 -179,-34 -40,-30 -136,-152 -105,-134 57,35 67,39 96,39 67,0 110,-65 101,-154 -9,-88 -65,-179 -161,-261 l -57,-48 -102,31 c -56,17 -115,35 -132,38 -82,18 -168,94 -180,158 -8,40 8,97 33,118 9,8 71,43 137,78 270,141 511,297 705,455 41,34 100,75 130,91 414,220 917,1447 774,1883 -46,138 -155,179 -322,121 -74,-26 -76,-13 -13,120 73,157 160,385 150,394 -2,2 -31,-9 -64,-25 z m -2807,-639 c 48,-7 110,-18 139,-26 102,-29 220,-45 372,-51 l 154,-6 -29,-24 c -42,-35 -229,-158 -469,-310 -179,-113 -211,-130 -217,-116 -13,32 -59,355 -65,457 -6,90 -5,99 11,93 9,-4 56,-11 104,-17 z m 2697,-592 c -36,-285 -122,-536 -271,-790 -49,-83 -68,-104 -34,-38 25,49 25,50 -4,50 -21,0 -30,11 -56,66 -19,39 -32,84 -33,110 -1,24 -5,44 -9,44 -8,0 -4,42 6,58 4,7 2,12 -4,12 -6,0 -8,5 -5,11 4,5 8,20 10,32 8,55 44,156 63,175 6,7 12,22 12,31 0,10 7,24 15,31 8,7 15,19 15,26 0,8 5,14 10,14 6,0 10,7 10,15 0,8 3,15 8,15 4,0 18,17 32,38 29,43 36,51 153,170 86,89 87,91 89,144 2,47 2,45 6,-17 2,-38 -4,-127 -13,-197 z m -2695,7 c -20,-21 -36,-31 -39,-24 -2,6 3,15 10,20 8,4 23,15 34,23 33,25 31,18 -5,-19 z m -248,-215 c 3,-38 1,-43 -77,-118 -44,-44 -204,-189 -355,-323 -435,-385 -655,-618 -767,-810 -25,-44 -47,-78 -48,-77 -1,2 2,45 7,97 l 8,93 117,137 c 153,178 601,626 773,773 152,130 322,267 331,268 4,0 9,-18 11,-40 z m 1588,-254 c 0,-7 -363,-242 -500,-323 -373,-221 -719,-400 -930,-481 -211,-81 -666,-229 -675,-220 -3,2 59,24 135,48 77,24 140,47 140,51 0,5 8,6 18,2 9,-3 14,-2 10,2 -7,7 201,113 672,342 74,36 290,142 479,234 189,93 350,169 357,169 8,0 14,5 14,11 0,5 4,8 8,5 5,-3 67,33 138,79 133,87 134,88 134,81 z m -1610,-751 c 0,-2 -10,-9 -22,-15 -22,-11 -22,-10 -4,4 21,17 26,19 26,11 z m -543,-291 c -3,-3 -12,-4 -19,-1 -8,3 -5,6 6,6 11,1 17,-2 13,-5 z m -70,-20 c -3,-3 -12,-4 -19,-1 -8,3 -5,6 6,6 11,1 17,-2 13,-5 z m -294,-273 c -72,-58 -123,-138 -123,-194 0,-12 7,-35 15,-50 l 14,-28 -57,31 c -31,17 -83,51 -114,76 -52,41 -58,49 -57,82 1,32 2,34 8,12 5,-19 8,-21 13,-9 6,17 96,63 163,85 l 40,13 -45,2 c -40,2 -7,6 164,17 27,2 27,0 -21,-37 z m 2311,-636 c 20,-8 36,-16 36,-18 0,-1 -55,-3 -123,-4 -187,-2 -380,-49 -538,-128 -29,-15 -111,-47 -183,-71 -164,-56 -420,-181 -641,-314 -215,-129 -368,-191 -1110,-451 -170,-59 -310,-107 -311,-106 -4,4 935,488 1116,575 568,273 1019,430 1445,501 212,35 257,38 309,16 z m 5236,-3340 c 16,-296 44,-706 90,-1315 79,-1037 114,-1587 125,-1960 l 6,-185 -29,65 c -16,36 -43,91 -61,122 l -32,56 -10,234 c -9,240 -28,506 -54,778 -114,1200 -131,1466 -122,1945 6,295 21,508 49,689 l 12,81 8,-150 c 4,-82 12,-244 18,-360 z m 219,-4296 c -13,-7 -145,-29 -180,-29 -16,0 -10,9 28,39 50,39 119,117 144,161 13,23 14,17 17,-69 2,-65 -1,-97 -9,-102 z"
            fill={fill} />
            <path id="path4014" d="m 7334,9375 c -14,-25 -25,-48 -23,-50 2,-2 16,19 32,46 34,62 27,65 -9,4 z"
            />
        </g>
        <g id="g3396" transform="matrix(.52959 0 0 .52821 -37.022 49.63)">
            <path id="sign_border" d="M 597.6,499.6 313.8,8 C 310.9,3 305.6,0 299.9,0 294.2,0 288.9,3.1 286,8 L 2.2,499.6 c -2.9,5 -2.9,11.1 0,16 2.9,5 8.2,8 13.9,8 h 567.6 c 5.7,0 11,-3.1 13.9,-8 2.9,-5 2.9,-11.1 0,-16 z"
            />
            <polygon transform="matrix(1 0 0 .99591 .125 2.033)" id="polygon7" points="299.875,48.2 555.875,491.5 43.875,491.5"
            overflow="visible" fill="#ffdc32" />
            <g id="biohazard" transform="matrix(.675 0 0 .675 124.5 169.11)">
                <use xlinkHref="#p" id="use3341" width="1" height="1" />
                <use xlinkHref="#p" transform="rotate(120 260 260)" id="use3343" width="1"
                height="1" />
                <use xlinkHref="#p" transform="rotate(-120 260 260)" id="use3345" width="1"
                height="1" />
            </g>
        </g>
    </g>
</svg>
);

export default BioLab;
