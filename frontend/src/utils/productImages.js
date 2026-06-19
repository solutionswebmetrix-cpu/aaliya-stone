// Dynamically import all product images using Vite's import.meta.glob
const productImages = import.meta.glob('../assets/Product/*.{png,jpg,jpeg}', { eager: true });
const projectImages = import.meta.glob('../assets/Project/*.{png,jpg,jpeg}', { eager: true });

// Create a map of filename to image module
const productImageMap = {};
for (const path in productImages) {
  const filename = path.split('/').pop();
  productImageMap[filename] = productImages[path].default;
}
for (const path in projectImages) {
  const filename = path.split('/').pop();
  productImageMap[filename] = projectImages[path].default;
}

const normalize = (value = '') => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const findBestMatchingImage = (value) => {
  if (!value) return null;
  const normalizedValue = normalize(value);

  const candidates = Object.keys(productImageMap)
    .map((filename) => {
      const normalizedFilename = normalize(filename.replace(/\.[^/.]+$/, ''));
      const tokens = normalizedValue.split(' ').filter(Boolean);
      const score = tokens.reduce((sum, token) => sum + (normalizedFilename.includes(token) ? 1 : 0), 0);
      return { filename, score };
    })
    .filter((candidate) => candidate.score > 0)
    .sort((a, b) => b.score - a.score);

  return candidates.length ? productImageMap[candidates[0].filename] : null;
};

export const getProductImage = (imagePathOrName, fallbackName) => {
  if (!imagePathOrName && !fallbackName) return null;

  const filename = imagePathOrName?.split('/').pop();
  if (filename && productImageMap[filename]) {
    return productImageMap[filename];
  }

  const exactCandidate = filename ? findBestMatchingImage(filename) : null;
  if (exactCandidate) return exactCandidate;

  const fallbackCandidate = findBestMatchingImage(fallbackName || imagePathOrName);
  if (fallbackCandidate) return fallbackCandidate;

  return Object.values(productImageMap)[0] || null;
};

// Also export all images for convenience if needed
export { productImageMap };
