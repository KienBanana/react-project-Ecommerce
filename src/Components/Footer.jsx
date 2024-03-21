export default function Footer() {
  return (
    <div className="bg-[#e8e8e8]">
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-4 w-[95%] mt-[53px] mb-[50px]">
          <div>
            <h2 className="uppercase font-semibold mb-7 ">Company info</h2>
            <ul className="text-[14px]">
              <li className="mb-2">
                <a href="">About Us</a>
              </li>
              <li className="mb-2">
                <a href="">Latest Posts</a>
              </li>
              <li className="mb-2">
                <a href="">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="">Shop</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="uppercase font-semibold mb-8">help links</h2>
            <ul className="text-[14px]">
              <li className="mb-2">
                <a href="">Tracking</a>
              </li>
              <li className="mb-2">
                <a href="">Order Status</a>
              </li>
              <li className="mb-2">
                <a href="">Delivery</a>
              </li>
              <li className="mb-2">
                <a href="">Shipping Info</a>
              </li>
              <li className="mb-2">
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="uppercase font-semibold mb-8">useful links</h2>
            <ul className="text-[14px]">
              <li className="mb-2">
                <a href="">Special Offers</a>
              </li>
              <li className="mb-2">
                <a href="">Gift Cards</a>
              </li>
              <li className="mb-2">
                <a href="">Advetising</a>
              </li>
              <li className="mb-2">
                <a href="">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="uppercase font-semibold mb-8">get in the know</h2>
            <ul className="text-[14px] flex justify-between">
              <input
                type="text"
                placeholder="Enter email"
                className="bg-[#e8e8e8] text-[#555555] w-full"
              />
              <div>
                <ion-icon
                  name="chevron-forward-outline"
                  className="text-[#555555]"
                ></ion-icon>
              </div>
            </ul>
            <div className=" border-b border-[#000] mt-2"></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
