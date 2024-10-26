import { SERVICES_TEXT } from "@/constants";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="container mx-auto my-8 border-b pb-10">
      {" "}
      {/* Added id here */}
      <h2 className="mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        Services
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="p-6">
            <Image
              className="rounded-xl object-cover"
              src="/service.jpeg"
              width={600}
              height={600}
              alt="services"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="mt-10 text-5xl lg:text-7xl">
            Find your&nbsp;
            <span className="leading-snug lg:block">next house here in</span>
            <span className="font-bold"> beautiful Ohio!</span>
          </h2>
          <p className="max-w-xl py-6 text-lg tracking-tighter lg:pr-20">
            {SERVICES_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
