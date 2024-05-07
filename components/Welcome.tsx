import React from "react";
import Image from "next/image";

import niesvlogo from "../assets/NIESVlogo.png";

const Welcome = () => {
  return (
    <div className="py-6 xl:px-16 flex flex-col lg:flex-row items-center justify-center text-justify p-6 gap-4 mt-12 lg:mt-36 ">
        <div className="cusShadow w-full flex justify-center items-center p-4 lg:min-w-56">
          <Image src={niesvlogo} alt="" />
        </div>
        <div className="text-sm lg:text-[16px] xl:text-xl text-[#777]">
          <span className="text-primary font-bold">VICTOR OKPEVA AND COMPANY</span> is a firm of professional Estate Surveyors
          and Valuers. Our firm was duly registered as such under the Companies
          Registration Act of Nigeria on the 15th of March, 2010 to carry out
          the business of &quot;Estate Surveying and Valuation&quot; as evidenced by our
          Certificate of Registration No. BN 2124521 issued by the Corporate
          Affairs Commission (CAC). The Company immediately commenced full
          operations on Monday 1st March, 2010.The Estate Surveyors and Valuers
          Registration Board of Nigeria (ESVARBON) also registered our firm as
          evidenced by the certificate of compliance issued to us. Our firm is
          equally approved and recognized to practice the profession of “Estate
          Surveying and Valuation” throughout the nation by the Nigerian
          Institution of Estate Surveyors and Valuers(NIESV) (see annexure for
          evidence of registration).
      </div>
    </div>
  );
};

export default Welcome;
