import { GETTING_STARTED } from "@/constants";
import { CircleCheckBig } from "lucide-react";

const HowItWorks = () => {
  return (
    <div id="gettingstarted" className="container mx-auto my-10 border-b pd-10 hidden sm:block" >
      <h2 className="text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        {GETTING_STARTED.title}
      </h2>
      <p className="mx-auto my-10 max-w4xl text-center text-neutral-800">
        {GETTING_STARTED.content}
      </p>

      <div className="works relative h-[640px] rounded-xl">
        <div className="absolute left-0 top-0 h-full overflow-y-hidden p-10 md:p-20">
          {GETTING_STARTED.steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-center">
                <CircleCheckBig className="mr-4 text-green-400" />
                <h6 className="font-medium uppercase text-neutral-200">
                  {step.title}
                </h6>
              </div>
              <p className="my-2 max-w-80 p-2 text-neutral-300">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
