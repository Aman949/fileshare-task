import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="max-w-8xl  p-4">
      <h1 className="text-3xl font-bold mt-10 ml-20 mb-10">FAQ</h1>
      <Accordion type="single" collapsible>
        <div className=" flex justify-around">
          <div>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl hover:no-underline">What is the cost of a mobile application?</AccordionTrigger>
              <AccordionContent>
                <p className="max-w-full font-semibold md:max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a corporis explicabo asperiores est iusto alias similique autem consectetur, soluta voluptatibus voluptates nam expedita, distinctio suscipit culpa maiores sint omnis.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="mt-5">
              <AccordionTrigger className="text-xl hover:no-underline">Do you provide a guarantee for the mobile application?</AccordionTrigger>
              <AccordionContent>
                <p className="max-w-full md:max-w-md font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facere architecto error culpa perspiciatis cum officiis rerum rem quam, soluta facilis accusantium vero assumenda neque accusamus dignissimos et magni voluptates!</p>
              </AccordionContent>
            </AccordionItem>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl hover:no-underline">How long will development take?</AccordionTrigger>
              <AccordionContent>
                <p className="max-w-full md:max-w-md font-semibold ">Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer. Average development time from start to finished application: Medium projects up to 3 months. Large projects about 4-6 months. To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="mt-5">
              <AccordionTrigger className="text-xl hover:no-underline">I will not tell my idea, do you guarantee confidentiality?</AccordionTrigger>
              <AccordionContent>
                <p className="max-w-full md:max-w-md font-semibold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci iusto nemo quas suscipit unde neque consequatur accusantium at veniam eligendi aspernatur incidunt, expedita culpa quae et placeat non rerum!</p>
              </AccordionContent>
            </AccordionItem>
          </div>
        </div>
      </Accordion>
    </div>
  );
}

export default Faq;
