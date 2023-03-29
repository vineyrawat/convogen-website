import Head from "next/head";
import Link from "next/link";
import * as animationData from "@/assets/auto-writing-ai.json";
import Lottie from "react-lottie";

export default function Home() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Head>
        <title>ReplyBy.Ai</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex flex-col min-h-screen ">
          <nav className="flex items-center w-full justify-between h-20 px-5">
            <Link href={"/"}>
              <img src="/replybyai.svg" className="h-10" alt="ReplyBy.ai" />
            </Link>
          </nav>
          <div className="flex justify-between flex-1 mx-auto max-w-6xl  p-2 items-center">
            <div className="flex-1">
              <span className="px-5 py-1 rounded-sm bg-[#69F0AE] text-[#268d5b] bg-opacity-20 text-sm">
                BETA
              </span>
              <h1 className="font-semibold mt-1 leading-tight text-4xl md:text-6xl">
                {"Let replyBy."}
                <span style={{ color: "#69F0AE" }}>ai</span>
                {" simplify your email writing ; )"}
              </h1>
              <p className="text-xl md:text-2xl font-normal mt-2">
                {
                  "Revolutionize your email game with our AI-driven Chrome extension for automated writing."
                }
              </p>
              <div className="mt-5"></div>
              <button className="px-5 py-3 bg-black transition-colors duration-200 text-white hover:text-black hover:bg-[#69F0AE]">
                Add to Chrome
              </button>
            </div>
            <div className="flex-1 hidden lg:block">
              <Lottie options={lottieOptions}></Lottie>
            </div>
          </div>
        </section>
        <footer className="mt-20">
          <div className="custom-screen py-8 border-t">
            <p className="text-gray-500 text-center">
              Powered by{" "}
              <a
                target="_blank"
                href="https://extensionerp.com/"
                className="text-blue-500 underline"
              >
                Extension Technologies
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
