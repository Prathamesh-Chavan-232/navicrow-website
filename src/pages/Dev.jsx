import React, { useEffect } from "react";
import {Carousel} from "../components/Carousel"

export const Dev = () => {

	return (
    <div className="dev h-[200vh] w-screen">
      
      <div className="line-container">
        <svg viewBox="0 0 419 1265" fill="none" preserveAspectRatio="xMidYMax meet">
          <path d="M238 -196V-128C240.667 -31.3333 246.4 188 248 292C249.6 396 202.333 452 178.5 467L102.5 529.5L3 460V620.5C61.1667 561.5 191.6 443.5 248 443.5C304.4 443.5 383.167 510.167 415.5 543.5C386.333 577 310.7 634 241.5 634C241.5 755.6 255.833 864 263 903M263 903H289C287 911.667 286.6 930.2 301 935C319 941 351 953 355 966C359 979 360 995 355 1008C351 1018.4 333.333 1023 325 1024C321.333 1018.67 314.2 1016 315 1048C316 1088 305 1187 315 1194C325 1201 355 1203 355 1224C355 1245 357 1260 350 1259C344.4 1258.2 311 1258.67 295 1259C268.333 1184.67 207.7 1049.2 178.5 1102C149.3 1154.8 138 1230.33 137 1259M263 903C212.5 939.5 225 982.5 225.5 1008C226 1033.5 181.5 1061 156.5 1061.29M137 1259C86.6667 1269.67 -6.4 1259.8 16 1155C43 1126 40 1114 74 1112C101.2 1110.4 104.333 1077.33 102.5 1061C98.3333 1052 82.6 1034.8 53 1038C50.6667 1017.67 57.3 981 102.5 997C147.7 1013 155 1037.67 153 1048C131.333 1109 96.2 1240.6 137 1259ZM137 1259C104.743 1257.05 134.592 1069.73 156.5 1061.29M158 1061C157.505 1061 157.004 1061.1 156.5 1061.29" stroke="#D61818" stroke-width="5"/>
        </svg>
      </div>
      
      <section className="one">
       <h1 data-rate=".4" data-direction="vertical">Ocean Stuff</h1> 
      </section>
      
      <section className="two">
       <h1 data-rate=".2" data-direction="vertical">omg scroll</h1> 
        <p>Big Watermark</p>
      </section>
      
    </div>
    );
};
