import React from "react";
import CardVertical from "./CardVertical";

const MasonryGridLayout = ({title,data}) => {
  return (
    <div className="p-5 sm:p-8 my-10">
      <h2 className="text-4xl font-semibold text-center mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
        {
          data.map((item) => (
            <CardVertical
              key={item.imageLink}
              imageLink={item.imageLink}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))
        }
      </div>
    </div>
  );
};

export default MasonryGridLayout;
