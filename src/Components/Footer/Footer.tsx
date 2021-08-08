import styles from "./Footer.module.css";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      className={`${styles.footer} flex flex-col lg:flex-row-reverse lg:justify-evenly lg:py-4`}
    >
      <div className="flex justify-between flex-row-reverse lg:flex-col lg:items-end pt-8 px-4 lg:py-8 mb-8 lg:mb-0">
        <div className="flex items-center lg:mb-6">
          <span className="text-sm text-right">خانه</span>
          <span
            className={`${styles["footer__items-dot"]} w-2 h-2 rounded-full ml-2`}
          ></span>
        </div>
        <div className="flex items-center lg:mb-6">
          <span className="text-sm text-right">تماس با ما</span>
          <span
            className={`${styles["footer__items-dot"]} w-2 h-2 rounded-full ml-2`}
          ></span>
        </div>
        <div className="flex items-center lg:mb-6">
          <span className="text-sm text-right">درباره ما</span>
          <span
            className={`${styles["footer__items-dot"]} w-2 h-2 rounded-full ml-2`}
          ></span>
        </div>
        <div className="flex items-center lg:mb-6">
          <span className="text-sm text-right">چرا دیجی مارکت؟</span>
          <span
            className={`${styles["footer__items-dot"]} w-2 h-2 rounded-full ml-2`}
          ></span>
        </div>
      </div>
      <div
        className={`${styles["divider"]} w-full mx-auto lg:w-0 lg:mx-0`}
      ></div>
      <div className="flex flex-col items-end py-6 px-4 lg:px-12 lg:py-6">
        <div className="flex items-center mb-4 lg:mb-8">
          <span className="text-sm text-right">
            تهران ، خیابان ولیعصر ، نرسیده به میدان ولیعصر ، کوچه فیروزه ،ورودی
            برج جنوبی اداری
          </span>
          <span>
            <MdLocationOn size="2.5rem" fill="#9c203f" />
          </span>
        </div>
        <div className="flex items-center mb-4 lg:mb-8">
          <span className="text-right fd">09397882532</span>
          <span className="ml-2">
            <FaPhone size="2rem" fill="#9c203f" />
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-right fd">alirezapirmozhdehi@gmail.com</span>
          <span className="ml-2">
            <IoIosMail size="2.5rem" fill="#9c203f" />
          </span>
        </div>
      </div>
      <div
        className={`${styles["divider"]} w-full mx-auto lg:w-0 lg:mx-0`}
      ></div>
      <div className="flex items-center justify-center pt-8 lg:pt-0">
        <div className="w-40 h-40">
          <img
            className="w-full h-full"
            src="http://mail.enamad.ir/ImagesResource/ZW5hbWFkLmly.png"
            alt="enamad"
          />
        </div>
        <div className="w-40 h-40">
          <img
            className="w-full h-full"
            src="https://bayanbox.ir/view/5987762950867383124/samandehi-2.png"
            alt="samandehi"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
