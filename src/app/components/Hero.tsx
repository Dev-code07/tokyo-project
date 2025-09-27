"use client";

import React from "react";
import { SparklesCore } from "../components/Backgrounds/sparkles";
import Link from "next/link";
import ChangingWordHero from "./ChangingWordHero";

const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center bg-[#111111] text-center sm:px-4 sm:py-20 py-8  min-h-[calc(100vh-104px)] max-h-[calc(100vh-104 px)]" id="home">
            <div className="w-full absolute inset-0 bg-[#111111] h-full">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>


            <div className="relative w-full sm:max-w-md max-w-sm">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/videos/doll.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>




                <div
                    className="absolute inset-x-0 bottom-0 h-24 sm:hidden"
                    style={{
                        background:
                            "linear-gradient(to top, #111111 40%, rgba(17,17,17,0) 100%)",
                    }}
                />


                <div
                    className="absolute inset-0 pointer-events-none sm:block hidden"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(17, 17, 17, 0) 35.17%, #111111 90.42%)",
                    }}
                />

            </div>

            <ChangingWordHero />


            <p className="sm:mt-4 mt-2 text-[#A0A0A0] z-20 relative sm:px-0 px-2">
                Choose a character, customize their world, and start real conversations
                powered by AI.
            </p>


            <div className=" mt-8 flex gap-4 flex-wrap justify-center">
                <Link
                    href="https://app.tokyoproject.ai"
                    className="sm:px-9 sm:py-3 z-20 px-6 py-2 rounded-full bg-[#0071E3] hover:bg-blue-700 text-white text-sm md:text-base transition flex items-center justify-center"
                >
                    Launch App
                </Link>

            </div>
        </section>
    );
};

export default Hero;
