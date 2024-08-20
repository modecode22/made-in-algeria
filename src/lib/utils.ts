import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to convert a date to an Arabic date string
export function getArabicDateString(date: Date): string {
  return format(date, "d MMMM yyyy", { locale: ar });
}
export function getDateString(date: Date): string {
  return format(date, "d MMMM yyyy");
}

export function cleanAndRemoveDuplicates(array: string[]): string[] {
  // Step 1: Split each string by comma and space
  const cleanedArray = array.flatMap((item) => (item ? item.split(/,\s*/) : []));

  // Step 2: Remove duplicates using filter and indexOf
  const uniqueArray = cleanedArray.filter((item, index) => cleanedArray.indexOf(item) === index);
  return uniqueArray;
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
