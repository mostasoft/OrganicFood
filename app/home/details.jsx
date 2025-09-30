import React from "react";
import { AiFillCustomerService } from "react-icons/ai";
import { FaLeaf } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const Details = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 sm:p-10">
      {/* Item 1 */}
      <div className="flex flex-col sm:flex-row gap-4 items-center text-center sm:text-left">
        <div className="bg-green-500 text-white p-4 rounded-lg flex-shrink-0">
          <MdLocalShipping className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>
        <div className="space-y-1">
          <div className="font-bold text-lg sm:text-xl">Free Delivery</div>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col sm:flex-row gap-4 items-center text-center sm:text-left">
        <div className="bg-green-500 text-white p-4 rounded-lg flex-shrink-0">
          <FaLeaf className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>
        <div className="space-y-1">
          <div className="font-bold text-lg sm:text-xl">Organic & Fresh</div>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="flex flex-col sm:flex-row gap-4 items-center text-center sm:text-left">
        <div className="bg-green-500 text-white p-4 rounded-lg flex-shrink-0">
          <AiFillCustomerService className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>
        <div className="space-y-1">
          <div className="font-bold text-lg sm:text-xl">24/7 Support</div>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
