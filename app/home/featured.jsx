import React from "react";

const list = [
  {
    title: "Specials Offers",
    des: "Great simple recipe, I just put the cucumbers in a zip lock bag.",
    img: "/1.jpg",
  },
  {
    title: "Seasonal Veggies",
    des: "Great simple recipe, I just put the cucumbers in a zip lock bag.",
    img: "/2.jpg",
  },
  {
    title: "Free Delivery",
    des: "Great simple recipe, I just put the cucumbers in a zip lock bag.",
    img: "/3.jpg",
  },
];

const Featured = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-20 justify-items-center">
      {list.map((item, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${item.img})` }}
          className="relative bg-cover bg-center rounded-sm h-[250px] w-full"
        >
          <div className="bg-green-400/85 absolute bottom-0 left-0 w-full h-[110px] flex items-center justify-center text-white p-4">
            <div>
              <div className="text-2xl font-bold">{item.title}</div>
              <p className="text-sm">{item.des}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
