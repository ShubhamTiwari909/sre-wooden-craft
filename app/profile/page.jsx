"use client";
import { getSession } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const profile = () => {
  const username = getSession("username");
  const email = getSession("email");
  const photoUrl = getSession("photoUrl");

  return (
    <div className="flex items-center w-full py-20 justify-center">
      <div className="max-w-xs">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <div className="photo-wrapper p-2">
            <Image
              className="w-32 h-32 rounded-full mx-auto aspect-auto"
              src={photoUrl}
              alt={username}
              width={200}
              height={200}
              unoptimized
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              {username}
            </h3>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Address
                  </td>
                  <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Phone
                  </td>
                  <td className="px-2 py-2">+91 9627253516</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2">{email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
