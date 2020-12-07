export const addCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getSecureUrl = (url) => {
  return url.replace(/http/, "https");
};
