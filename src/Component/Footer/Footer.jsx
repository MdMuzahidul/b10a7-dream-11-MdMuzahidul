import footerLogo from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="bg-[#121F5E] px-36 text-white">
      <div className="flex justify-center mb-16">
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
            <button className="border-2 px-8 py-4 rounded-r-lg font-bold bg-[#E7FE29] text-[#131313]">
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
