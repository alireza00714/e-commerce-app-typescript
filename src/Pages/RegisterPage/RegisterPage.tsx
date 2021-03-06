import "./Register.styles.css";
import { Link } from "react-router-dom";
// import { useState } from "react";

// interface IRegisterInput {
//   username: string;
//   email: string;
//   password: string;
//   password2: string;
// }

const RegisterPage = () => {
  // const [inputs, setInputs] = useState<IRegisterInput>({
  //   username: "",
  //   email: "",
  //   password: "",
  //   password2: "",
  // });

  
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center border border-gray-300 rounded-lg pt-6 pb-4 px-6">
        {/* <div className="flex items-center cursor-pointer mb-4">
          <span className="text-3xl font-black text-white mr-1 register__title-text">
            دیجی&zwnj;مارکت
          </span>
          <span>
            <FaShoppingBag size="2.5rem" fill="#9c203f" />
          </span>
        </div> */}
        <h3 className="text-2xl font-bold mb-4">ثبت نام</h3>
        <div className="flex flex-col items-end mb-8">
          <label className="text-xs font-bold mb-1" htmlFor="username">
            :نام کاربری
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="register__input w-64 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex flex-col items-end mb-8">
          <label className="text-xs font-bold mb-1" htmlFor="email">
            :ایمیل
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="register__input w-64 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex flex-col items-end mb-8">
          <label className="text-xs font-bold mb-1" htmlFor="password">
            :رمز عبور
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="register__input w-64 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <div className="flex flex-col items-end mb-8">
          <label className="text-xs font-bold mb-1" htmlFor="password2">
            :تکرار رمز عبور
          </label>
          <input
            type="password"
            name="password2"
            id="password2"
            className="register__input w-64 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <button className="register__btn w-full text-white py-1.5 rounded-md font-bold mb-1">
          ثبت نام
        </button>
        <div className="flex flex-row-reverse gap-2 self-end pr-1">
          <p className="text-xs font-semibold">حساب کاربری دارید؟</p>
          <Link
            className="register__register-link text-xs font-semibold"
            to="/login"
          >
            کلیک کنید
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
