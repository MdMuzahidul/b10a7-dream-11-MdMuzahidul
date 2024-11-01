import footerLogo from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="bg-[#121F5E] px-36 text-white relative">
      <div className=" flex justify-center relative bottom-44">
        <div className="border-2 p-4 rounded-2xl border-white w-[80%] h-80 rounded-2x bg-[rgba(255,255,255,0.15)] absolute">
          <div className="bg-gradient-to-r h-full from-blue-100 via-white to-orange-100 rounded-lg p-8 shadow-lg text-center z-50">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Subscribe to our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest updates and news right in your inbox!
            </p>
            <form className="flex items-center justify-center mx-auto space-x-4 w-[600px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500 text-black"
              />
              <button
                type="submit"
                className="px-6 py-2 text-white font-semibold bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full hover:from-pink-600 hover:to-yellow-600 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-44 mb-16">
        <img src={footerLogo} alt="Add a footer logo" />
      </div>
      <div className="flex justify-between border-b-2 pb-16">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="max-w-72 text-[rgba(255,255,255,0.6)]">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-[rgba(255,255,255,0.6)] mb-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-[rgba(255,255,255,0.6)] max-w-72 mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div>
            <input
              className="px-8 py-4 rounded-l-lg border-2"
              type="text"
              placeholder="Enter your email"
            />
            <button className="px-8 py-4 rounded-r-lg border-2 text-white font-semibold bg-gradient-to-r from-pink-500 to-yellow-500  hover:from-pink-600 hover:to-yellow-600 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="py-8">
        <p className="text-center text-[rgba(255,255,255,0.6)]">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
