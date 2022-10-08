import React from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="card w-80 bg-base-300 shadow-xl shadow-gray-800">
      <figure>
        <picture>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </picture>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p className="line-clamp-3">
          If a dog chews shoes whose shoes does he choose? If a dog chews shoes
          whose shoes does he choose? If a dog chews shoes whose shoes does he
          choose?
        </p>
        <div className="card-actions justify-end">
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
