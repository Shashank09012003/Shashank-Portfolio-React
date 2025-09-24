import React, { useState, useEffect } from 'react';
import HeroImg from "@/assets/images/hero.png";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev < 3) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Dev, 3D-Visualist, Systems-Builder, Creator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <div
                className={`transition-all duration-700 ease-out transform ${
                  0 < visibleLines
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 translate-y-4'
                }`}
              >
                <p className="text-white">
                  Hello — I'm Shashank Sharma, a MERN & Next.js engineer, product-minded designer, and creator. I turn design concepts into fast, responsive web apps using React and Next.js, and back them with reliable Node/Express + MongoDB systems. I build clean UI , payments interfaces, and production-ready components that scale..{" "}
                  <span className="font-bold text-white">
                    As the creator of multiple front-end projects and UI components
                  </span>
                  , I aim to turn design concepts into pixel-perfect reality.
                </p>
              </div>

              <div
                className={`transition-all duration-700 ease-out transform ${
                  1 < visibleLines
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 translate-y-4'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                <p className="text-white">
                  My mission is to craft complete web products that feel effortless — elegant UIs, bulletproof backends, and delightful interactions that users actually enjoy. I combine design sensibility with pragmatic engineering to ship real features, not just pixels.
                </p>
              </div>

              <div
                className={`transition-all duration-700 ease-out transform ${
                  2 < visibleLines
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 translate-y-4'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="pt-6">
                  <blockquote className="border-l-4 border-gray-300 pl-4">
                    <p className="text-white">
                      I'm a continuous learner focused on Three.js, WebGL and custom shaders — adding immersive 3D layers and motion-driven experiences to web apps. I document my process and share tutorials, demos, and breakdowns on my YouTube channel and post short clips, builds and updates on Instagram.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}