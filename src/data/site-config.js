// Site-wide configuration
export const siteConfig = {
  name: 'David',
  nameEn: 'David Zeng',
  title: '个人成就',
  tagline: '超过20年外企工作经验 / 丰富的外联经历及广泛人脉 / 资深的商协会秘书 / 出色的办公技能',
  siteUrl: 'https://davidzeng.vercel.app',
  year: 2026
};

// Page navigation order: used by PageNav (prev/next) and BottomNav (mobile bar)
export const pageOrder = [
  { path: '/',           label: '首页',     icon: '🏠', shortLabel: '首页' },
  { path: '/experience', label: '工作经历', icon: '💼', shortLabel: '经历' },
  { path: '/capabilities', label: '工作能力', icon: '⚡', shortLabel: '能力' },
  { path: '/portfolio',  label: '个人作品', icon: '🖼️', shortLabel: '作品' },
  { path: '/gallery',    label: '外联影像', icon: '📷', shortLabel: '影像' },
  { path: '/reviews',    label: '联系我',   icon: '📬', shortLabel: '联系' },
];
