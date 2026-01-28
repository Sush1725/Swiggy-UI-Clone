import cities from "../data/cities.jsx";
function Footer() {
  return (
    <div className=" bg-slate-100 min-h-52">
      <div className="max-w-[1100px] mx-auto px-4 py-10 grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
        <div className="mt-5">
          <div>
            <img src="public/Group.svg" alt="swiggy" />
          </div>
          <h5 className="text-slate-800 mt-2">© 2026 Swiggy Limited</h5>
        </div>
        <div>
          <ul>
            <div className="font-bold text-xl">Company</div>

            <li className="mt-3 text-slate-800">
              <a href="#">About Us</a>
            </li>
            <li className="mt-3 text-slate-800">
              <a href="#">Swiggy Corporate</a>
            </li>
            <li className="mt-3 text-slate-800">
              <a href="#">Careers</a>
            </li>
            <li className="mt-3 text-slate-800">
              <a href="#">Team</a>
            </li>
            <li className="mt-3 text-slate-800">
              <a href="#">Swiggy One</a>
            </li>
            <li className="mt-3 text-slate-800">
              <a href="#">Swiggy Instamart</a>
            </li>
            <li className="mt-3 text-slate-800">
              <a href="#">Swiggy Dineout</a>
            </li>
            <li className="mt-3 text-slate-800">
              <a href="#">Minis</a>
            </li>
            <li className="mt-3 text-slate-800">
              <a href="#">Pyng</a>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <div className="font-bold text-xl">Contact Us</div>
            <ul>
              <li className="mt-3 text-slate-800">
                <a href="#">Help & Support</a>
              </li>
              <li className="mt-3 text-slate-800">
                <a href="#">Partner with Us</a>
              </li>
              <li className="mt-3 text-slate-800">
                <a href="#">Ride with Us</a>
              </li>
            </ul>
          </div>
          <div className="mt-14">
            <div className="font-bold text-xl">Legal</div>
            <ul>
              <li className="mt-3 text-slate-800">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="mt-3 text-slate-800">
                <a href="#">Cookie Policy</a>
              </li>
              <li className="mt-3 text-slate-800">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="font-bold text-xl">Available in:</div>
          <ul>
            <li className="mt-3 text-slate-800">Bangalore</li>
            <li className="mt-3 text-slate-800">Gurgaon</li>
            <li className="mt-3 text-slate-800">Hyderabad</li>
            <li className="mt-3 text-slate-800">Delhi</li>
            <li className="mt-3 text-slate-800">Mumbai</li>
            <li className="mt-3 text-slate-800">Pune</li>
          </ul>
        </div>
        <div>
          <div>
            <div className="font-bold text-xl">Life at Swiggy</div>
            <ul>
              <li className="mt-3 text-slate-800">
                <a href="#">Explore with Swiggy</a>
              </li>
              <li className="mt-3 text-slate-800">
                <a href="#">Swiggy News</a>
              </li>
              <li className="mt-3 text-slate-800">
                <a href="#">Snackables</a>
              </li>
            </ul>
          </div>
          <div className="mt-14">
            <div className="font-bold text-xl">Social Links</div>
            <div className="flex gap-5 mt-4">
              <a href="#">
                <img src="public/Linkedin.svg" alt="linkedIn" />
              </a>
              <a href="#">
                <img src="public/icon-pinterest.svg" alt="pinterest" />
              </a>

              <a href="#">
                <img src="public/icon-facebook.svg" alt="facebook" />
              </a>
              <a href="#">
                <img src="public/icon-instagram.svg" alt="instagram" />
              </a>
              <a href="#">
                <img src="public/Twitter.svg" alt="twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px w-full bg-gray-800  max-w-7xl border-0 mx-auto" />
      <div className="flex justify-center items-center gap-4 p-6">
        <h5
          className="font-bold text-center text-2xl text-gray-900 my-4"
        >
          For better experience, download the Swiggy app now
        </h5>
        <div>
          <a
            href="
          #"
          >
            <img
              src="public/icon-AppStore_lg30tv.avif"
              alt="appleIcon"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </a>
        </div>
        <div>
          <a
            href="
          #"
          >
            <img
              src="public/icon-GooglePlay_1_zixjxl.avif"
              alt="googlePlay"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </a>
        </div>
      </div>
      <hr className="h-px w-full bg-gray-400 border-0 mx-auto my-6" />
      <div className="max-w-[1200px] mx-auto pt-10">
        <div className="px-4 mb-5">
          <div className="font-bold text-lg">Other cities that we deliver:</div>
        </div>
        <ul className="grid px-4 grid-cols-1 md:grid-cols-4 gap-y-2 text-sm text-gray-500">
          {cities.map((city) => (
            <li
              key={city}
              className="font-medium text-base hover:text-gray-800 cursor-pointer py-1"
            >
              <a href="#">{city}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
