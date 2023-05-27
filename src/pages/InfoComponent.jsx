import React from 'react'
import Aos from "aos";
import { useEffect } from "react";
import charDhamTemple from "../assets/landscapes/char-dham-1.jpg";

export const InfoComponent = () => {
	useEffect(() => {
		Aos.init({ duration: 1200 });
	}, []);
  return (
    <div>
      
			<div className="bg-white text-black space-y-20 py-20 overflow-x-hidden">
				<div className="px-20 space-y-20">
					<div className="flex flex-col text-center">
						<h1 data-aos="zoom-in" className="font-fancy text-6xl">
							BEYOND EXPEDITIONS
						</h1>
					</div>
					<div className="flex flex-col gap-12 items-center justify-center xl:gap-64 xl:flex-row">
						<div className="max-w-[500px]">
							<img src={charDhamTemple} alt="" />
						</div>
						<div className="space-y-4  xl:max-w-xl text-md">
							<p className="text-3xl">
								We invite you to embark on a transformative and opulent journey
								to Char Dham.
							</p>
              <div className="text-xl space-y-4">
                
							<p>
								From exquisite accommodations and personalized services to
								gourmet dining and exclusive helicopter transfers, we provide a
								seamless and lavish expedition that allows you to immerse
								yourself in the divine while being enveloped in utmost comfort.
								Join us on this divine odyssey to Char Dham and discover a truly
								unparalleled journey of the soul.
							</p>
							<p>
								Nestled amidst the awe-inspiring Himalayas, Char Dham comprises
								the revered pilgrimage sites of Yamunotri, Gangotri, Kedarnath,
								and Badrinath. Our luxurious trip to Char Dham offers an
								extraordinary blend of spirituality and indulgence, ensuring an
								unforgettable experience.
							</p>
              </div>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}