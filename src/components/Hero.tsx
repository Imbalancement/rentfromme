import { HERO } from "@/constants"


const Hero = () => {
  return (
    <div className="hero flex min-h-screen items-center justify-center">
        <div className="flex max-w-4xl flex-col items-center gap-6 pb-10">
            <div className="space-y-4">
                <h1 className="m-4 text-center text-4xl text-white md:text-5xl lg:text-6xl">
                {HERO.title}
                </h1>
                <p className="p-4 text-center text-slate-300">{HERO.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Hero