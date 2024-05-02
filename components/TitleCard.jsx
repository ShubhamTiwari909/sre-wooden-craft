import Link from "next/link";
import React from "react";

export default function TitleCard({ title, link }) {
  return (
    <>
      <div className="rounded bg-white text-slate-500 shadow-md shadow-slate-200 py-8 group hover:bg-slate-900">
        <h3 className="text-xl font-medium text-slate-700 text-center group-hover:text-slate-100">
          <Link href={link}>{title}</Link>
        </h3>
      </div>
    </>
  );
}
