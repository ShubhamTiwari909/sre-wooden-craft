import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import Cookies from 'js-cookie';

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const setSession = (key, value) => {
    Cookies.set(key, value, { expires: 1 }); // You can adjust the expiration as per your requirement
};

export const getSession = (key) => {
    return Cookies.get(key);
};

export const clearSession = (key) => {
    Cookies.remove(key);
};