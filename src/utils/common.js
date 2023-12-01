import { cloneElement, isValidElement, React } from 'react';

export function checkValidAndCloneElement(element, props = {}) {
  return element && isValidElement(element) && cloneElement(element, props);
}

export function getArrayFromNumber(length) {
  return Array.from({ length }, (_, i) => i + 1);
}

// export function convertPrice(rawPrice) {
//   const price = rawPrice ? Number(rawPrice).toFixed(0) : '--';
//   return price.replace(/\d(?=(\d{3})+\.)/g, '$&.');
// }

export function convertPrice(rawPrice) {
  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(rawPrice);

  return formattedPrice;
}
