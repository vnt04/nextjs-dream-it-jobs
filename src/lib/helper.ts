import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";

// export const preventScroll = (condition: ) => {
//   if (condition) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "";
//   }
//   return () => {
//     document.body.style.overflow = "";
//   };
// };
export const calculateDaysAgo = (timeCreated: NativeDate) => {
  return formatDistanceToNow(new Date(timeCreated || timeCreated), {
    addSuffix: true,
    locale: vi,
  });
};

// export const calculateDayNumber = (timeCreated:Date) => {
//   return differenceInDays(
//     new Date(),
//     new Date(timeCreated.$date || timeCreated)
//   );
// };

export const formatCurrency = (number: number) => {
  return number.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

// const parseDate = (dateString: string) => {
//   const [day, month, year] = dateString.split("/").map(Number);
//   return new Date(year, month - 1, day);
// };

// export const compareDate = (date1:string, date2:string) => {
//   return parseDate(date2) - parseDate(date1);
// };
