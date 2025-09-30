import Image from "next/image";
import React from "react";

const list = [
  {
    title: "Specials Offers",
    Stars: "💚❤️❤️⭐️⭐️",
    des: "10$",
    img: "/1.jpg",
  },
  {
    title: "Seasonal Veggies",
    Stars: "💚❤️❤️⭐️⭐️",
    des: "10$",
    img: "/2.jpg",
  },
  {
    title: "Free Delivery",
    Stars: "💚❤️❤️⭐️⭐️",
    
    des: "10$",
    img: "/3.jpg",
  },
  {
    title: "Free Delivery",
    Stars: "💚❤️❤️⭐️⭐️",
    des: "10$",
    img: "/2.jpg",
  },
  {
    title: "Free Delivery",
    Stars: "💚❤️❤️⭐️⭐️",
    des: "10$",
    img: "/3.jpg",
  },
  {
    title: "Free Delivery",
    Stars: "💚❤️❤️⭐️⭐️",
    des: "10$",
    img: "/1.jpg",
  },
];

const New = () => {
  return (
    <>
    <div className=" flex  items-center justify-center text-2xl font-bold md:text-3xl lg:text-5xl">New Products</div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 justify-items-center">
      {list.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden w-full max-w-xs"
        >
            
          <div className="relative w-full h-[250px]">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <h1>{item.Stars}</h1>
            <p className="text-sm text-gray-600">{item.des}</p>
            <button className="bg-green-500 p-2 rounded-sm font-bold text-white">Add to Card</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
  
};

export default New;
