import Form from "./Form";
import LinkContact from "../../ui/LinkContact";
import Title from "../../ui/Title";

import style from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={style.contactBg} id="contact">
      <div className="container mx-auto py-[56px] md:py-16 lg:py-[104px]">
        <Title>
          Contact <b>US</b>
        </Title>
        <div className="lg:grid lg:grid-cols-[1fr_1fr]">
          <div className="grid grid-cols-[1fr_81px] gap-x-5 gap-y-6 mt-9 md:grid-cols-[187px_81px_50px_52px_71px] md:ml-9 md:mb-16 lg:grid-cols-[1fr_1fr] lg:gap-y-[64px] lg:mt-[70px]">
            <ul className="lg:text-right">
              <li key="1">
                <LinkContact href="tel:+38(098)1234567">
                  +38 (098) 12 34 567
                </LinkContact>
              </li>
              <li key="2">
                <LinkContact href="tel:+38(073)1234567">
                  +38 (073) 12 34 567
                </LinkContact>
              </li>
            </ul>
            <p className="text-white text-xs font-extralight lg:text-left leading-6">
              Phone number
            </p>
            <LinkContact href="mailto:support@carptravel.com">
              support@carptravel.com
            </LinkContact>
            <p className="text-white text-xs font-extralight md:text-left md:col-start-2 md:row-start-2 md:flex md:items-center leading-6">
              E-mail
            </p>
            <p className="text-white text-xs font-extralight md:text-left md:col-start-4 lg:md:col-start-1 lg:pt-[60px] lg:text-right leading-6">
              Follow us
            </p>
            <div className="lg:pt-[60px] flex flex-col">
              {["facebook", "instagram", "youtube", "tiktok"].map((el, i) => (
                <LinkContact key={i}>{el}</LinkContact>
              ))}
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
