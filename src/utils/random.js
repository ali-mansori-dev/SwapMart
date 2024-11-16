function generateRandomSlug(length = 8) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let slug = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    slug += characters[randomIndex];
  }
  return slug;
}
function generateUniqueSlug() {
  const sanitizedTitle1 = generateRandomSlug(8);
  const sanitizedTitle2 = generateRandomSlug(8);
  const timestamp = Date.now().toString(36);
  return `${sanitizedTitle1}-${timestamp}-${sanitizedTitle2}`;
}

export { generateUniqueSlug };
