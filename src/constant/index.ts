export const base_url = "https://maia.wyizer.com/";
// export const base_url = "http://103.174.102.93:8085/";
// export const base_url = "http://192.168.1.36:8080/";
// export const base_url = "http://192.168.1.18:8080/api-core/v1";
// export const base_url = import.meta.env.VITE_BASE_URL;
export const ERROR_MSG = "Something went wrong please try again.";

export const currencyConverter = {
  dollar: "$",
  rupee: "₹",
  Dollar: "$",
  Rupee: "₹",
};
export const currencyFormatter = (currency, amount) => {
  if (currency === 'rupee' || currency === 'Rupee') {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  } else if (currency === 'dollar' || currency === 'Dollar') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }
}
export const genderConverterInShort = {
  Male: "M",
  Female: "F",
  Others: "OT",
  ["Preferred not to say"]: "PNTS",
};

export const customerStatusConverter = {
  In_Process: "In Process",
  INPROCESS: "In Process",
  Iteration: "Iteration",
  Completed: "Completed",
  Invested: "Investor",
};

export function convertStringNumbersToNumbers<T extends Record<string, any>>(
  obj: T
): T {
  const result: any = {};

  for (const key in obj) {
    const value = obj[key];

    if (
      typeof value === "string" &&
      !isNaN(Number(value)) &&
      value.trim() !== ""
    ) {
      result[key] = Number(value);
    } else {
      result[key] = value;
    }
  }

  return result;
}

export function isValidEmail(email: string) {
  if (!email?.trim()) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
export function isCustomValidPhoneNumber(phone: string | undefined | null) {
  if (!phone) return false;
  const digitsOnly = phone.replace(/\D/g, "");
  return /^\d{1,12}$/.test(digitsOnly);
}


// export function isCustomValidPhoneNumber(phone: string) {
//   const digitsOnly = phone.replace(/\D/g, ""); 
//   return /^\d{1,12}$/.test(digitsOnly);
// }



export const formateDataHandler = (date: string | null) => {
  const createdDateStr = date; // assuming it's from Redux
  const createdDate = createdDateStr ? new Date(createdDateStr) : null;

  const formattedDate = createdDate
    ? createdDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    : null;
  return `${formattedDate}`;
};

export const formatDate = (dateStr: string | any): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}


export const threeDotsHandler = (str: any, len = 25) => {

  if (!str) return ``

  const threeDots = "..."
  if (str.length > len) {
    return str.slice(0, len) + threeDots;
  }
  return str
}

export const pageNavigatePathRoutes = {
  dashboard: '/dashboard',
  settings: '/settings',
}