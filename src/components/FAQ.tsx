import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/constants";

const FAQ = () => {
  return (
    <div id="FAQ" className="container mx-auto my-20">
      <h2 className="mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        FAQ
      </h2>
      <Accordion type="single" collapsible className="w-full">
  {faq?.map((faq, index) => (
    <AccordionItem key={index} value={faq?.value || ''}>
      <AccordionTrigger>{faq?.question || ''}</AccordionTrigger>
      <AccordionContent>{faq?.answer || ''}</AccordionContent>
    </AccordionItem>
  )) || null}
      </Accordion>
    </div>
  );
};

export default FAQ;
