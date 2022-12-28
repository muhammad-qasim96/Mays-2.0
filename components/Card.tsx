import Link from "next/link";
import React from "react";

type Props = {
  id: string;
  photoUrl: string;
  header: string;
  body: string;
};

const Card = ({ id, photoUrl, body, header }: Props) => {
  return (
    <div className="card w-80 bg-base-300 shadow-gray-800">
      <figure className="aspect-[20/12] w-full overflow-hidden">
        <picture className="w-full">
          <img className="w-full object-cover" src={photoUrl} alt="" />
        </picture>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{header}</h2>
        <p className="text-gray-500 line-clamp-3">{body}</p>
        <div className="card-actions justify-end">
          <Link href={`/${id}`}>
            <button className="btn">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
