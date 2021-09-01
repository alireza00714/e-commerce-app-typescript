import { ReactNode } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

interface IBuyingLayout {
  children?: ReactNode;
}

const BuyingLayout: React.FC<IBuyingLayout> = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default BuyingLayout;
