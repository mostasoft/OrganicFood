import React from "react";
import { AiFillCustomerService } from "react-icons/ai";
import { FaLeaf } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const Details = () => {
  return (
    <div className="grid h-[250px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center items-center p-10">
      <div className="flex gap-4 items-center">
        <div className="bg-green-500 text-white p-1 rounded-sm"><MdLocalShipping size={80} /></div>
        <div className="space-y-2">
          <div className="font-bold">Free Delivery</div>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="bg-green-500 text-white p-1 rounded-sm"><FaLeaf size={80} /></div>
        <div className="space-y-2">
          <div className="font-bold">Free Delivery</div>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="bg-green-500 text-white p-1 rounded-sm"><AiFillCustomerService size={80} /></div>
        <div className="space-y-2">
          <div className="font-bold">Free Delivery</div>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
