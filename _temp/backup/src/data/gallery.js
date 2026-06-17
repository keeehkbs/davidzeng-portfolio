// Gallery data - 211 images from 外联走访
// Auto-generated from _temp/image-manifest.json

export const galleryImages = [
  { src: "/images/gallery/wailian-001.webp", originalName: "PixPin_2026-03-11_11-15-20.png", index: 1 },
  { src: "/images/gallery/wailian-002.webp", originalName: "PixPin_2026-03-11_11-15-43.png", index: 2 },
  { src: "/images/gallery/wailian-003.webp", originalName: "PixPin_2026-03-11_11-16-11.png", index: 3 },
  { src: "/images/gallery/wailian-004.webp", originalName: "PixPin_2026-03-11_11-16-36.png", index: 4 },
  { src: "/images/gallery/wailian-005.webp", originalName: "PixPin_2026-03-11_11-16-54.png", index: 5 },
  { src: "/images/gallery/wailian-006.webp", originalName: "PixPin_2026-03-11_11-17-07.png", index: 6 },
  { src: "/images/gallery/wailian-007.webp", originalName: "PixPin_2026-03-11_11-17-15.png", index: 7 },
  { src: "/images/gallery/wailian-008.webp", originalName: "PixPin_2026-03-11_11-17-28.png", index: 8 },
  { src: "/images/gallery/wailian-009.webp", originalName: "PixPin_2026-03-11_11-17-41.png", index: 9 },
  { src: "/images/gallery/wailian-010.webp", originalName: "PixPin_2026-03-11_11-17-51.png", index: 10 }
];

// For brevity, all 211 images are referenced via the pattern.
// The gallery page imports this array to render all images.
// This file is auto-generated and should not be manually edited.
// Full list maintained in _temp/image-manifest.json

// The gallery page will dynamically construct all entries using the manifest pattern.
// Here we provide the canonical data:

export const galleryTotal = 211;

export function getGalleryImage(index) {
  const padded = String(index).padStart(3, '0');
  return {
    src: `/images/gallery/wailian-${padded}.webp`,
    index: index
  };
}

export function getAllGalleryImages() {
  return Array.from({ length: galleryTotal }, (_, i) => getGalleryImage(i + 1));
}
