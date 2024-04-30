import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function CardVertical({ imageLink, title, description, link }) {
  return (
    <>
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        <figure>
          <img
            src={imageLink}
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">{title}</h3>
          </header>
          <p className="mb-4">{description}</p>
          <Link className="flex gap-x-2 items-center" href={link}>
            Buy now <FaChevronRight className="text-slate-700" />
          </Link>
        </div>
      </div>
    </>
  );
}
