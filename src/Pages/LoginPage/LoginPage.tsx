import "./LoginPage.styles.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center border border-gray-300 rounded-lg pt-6 pb-4 px-6">
        {/* <div className="flex items-center cursor-pointer mb-4">
          <span className="text-3xl font-black text-white mr-1 login__title-text">
            دیجی&zwnj;مارکت
          </span>
          <span>
            <FaShoppingBag size="2.5rem" fill="#9c203f" />
          </span>
        </div> */}
        <h3 className="text-2xl font-bold mb-4">ورود</h3>
        <div className="flex flex-col items-end mb-8">
          <label className="text-xs font-bold mb-1" htmlFor="username">
            :نام کاربری
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="login__input w-64 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
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
            className="login__input w-64 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
          />
        </div>
        <button className="login__btn w-full text-white py-1.5 rounded-md font-bold mb-2 md:mb-1">
          ورود
        </button>
        <div className="flex flex-row-reverse gap-1 self-end pr-1">
          <p className="text-xs font-semibold">حساب کاربری ندارید؟</p>
          <Link
            className="login__register-link text-xs font-semibold"
            to="/register"
          >
            کلیک کنید
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
