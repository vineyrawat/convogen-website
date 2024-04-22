import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  IoIosArrowDropdown,
  IoLogoAndroid,
  IoLogoGithub
} from "react-icons/io";
import { IoEarth } from "react-icons/io5";


export default function Home() {
  return (
    <>
      <Head>
        <title>Convogen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex bg-gradient-to-bl from-black to-slate-900  flex-col min-h-screen ">
          <nav className="flex items-center w-full justify-between h-20 px-5">
            <Link href={"/"}>
              <Image
                width={200}
                height={100}
                src="/convogen.svg"
                className="h-10"
                alt="convogen"
              />
            </Link>
          </nav>
          <div className="flex justify-between flex-1 mx-auto max-w-6xl  p-2 items-center">
            <div className="flex-1 text-gray-200 flex flex-col items-center">
              <span className=" px-5 py-1 rounded-full text-orange-400 border border-orange-400">
                Latest Release v1.2.0
              </span>
              <h1 className="font-light mt-5 text-center leading-tight text-4xl md:text-6xl">
                <span className="font-medium bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                  convogen
                </span>
                {",  because even robots deserve good conversation"}
              </h1>
              <p className="text-xl md:text-2xl text-center text-gray-400 font-normal mt-2">
                {"Talk like a genius. Write like a poet. Meet ConvoGen."}
              </p>
              <div className="mt-16"></div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/vineyrawat/convogen"
                  target="_blank"
                >
                  <div className="relative inline-flex  group">
                    <div className="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-teal-500 via-indigo-500 to-blue-500 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                      <IoLogoGithub size={25} style={{ marginRight: "5px" }} />
                      GitHub
                    </button>
                  </div>
                </a>
                <a
                  href="https://github.com/vineyrawat/convogen/releases/download/v1.2.0/convogen.apk"
                  target="_blank"
                >
                  <div className="relative inline-flex  group">
                    <div className="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-teal-500 via-indigo-500 to-blue-500 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                      <IoLogoAndroid size={25} style={{ marginRight: "5px" }} />
                      Android{" "}
                      <span className="ml-2 font-semibold text-sm text-gray-500 bg-gray-800 px-1 py-0.5 rounded">
                        APK
                      </span>
                    </button>
                  </div>
                </a>
                <a
                  href="https://vinaybyte.in/convogen-web-preview/"
                  target="_blank"
                >
                  <div className="relative inline-flex  group">
                    <div className="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-teal-500 via-indigo-500 to-blue-500 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                      <IoEarth size={25} style={{ marginRight: "5px" }} />
                      Web{" "}
                      <span className="ml-2 font-semibold text-sm text-gray-500 bg-gray-800 px-1 py-0.5 rounded">
                        Preview
                      </span>
                    </button>
                  </div>
                </a>
              </div>
              <div className="absolute bottom-10 ">
                <div className="relative inline-flex animate-bounce  group">
                  <div className="absolute transitiona-all duration-1000 opacity-10 -inset-px bg-gradient-to-r from-teal-500 via-indigo-500 to-blue-500 rounded-xl blur-lg group-hover:opacity-30 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative inline-flex items-center justify-center p-2 text-lg font-bold text-white transition-all duration-200 font-pj rounded-full focus:outline-none  focus:ring-offset-2 focus:ring-gray-900">
                    <IoIosArrowDropdown size={34} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-black">
          <div className="py-8">
            <p className="text-gray-500 text-center">
              Developed by{" "}
              <a
                target="_blank"
                href="https://vinaybyte.in/"
                className="text-blue-500 underline"
              >
                Vinaybyte.in
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
