function formatteCurrency(price) {
  const formattedCurrency = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formattedCurrency; // Output: "$1,234.56"
}
export { formatteCurrency };
