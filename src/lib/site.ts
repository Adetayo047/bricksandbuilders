export const site = {
  name: "Bricks & Builders",
  legalName: "Bricks & Builders Property Limited",
  tagline: "Real Estate, Project Management, Property Consultancy",
  phone: "0813 691 6416",
  phoneIntl: "2348136916416",
  email: "Bricksandbuildersproperty@gmail.com",
  address: "Suit C69, Ide Plaza, Obafemi Awolowo Way, Utako, Abuja, Nigeria",
  rcNumber: "RC 7692089",
  instagram: "https://www.instagram.com/bricksandbuilders_limited/",
  facebook: "https://www.facebook.com/people/BricksBuilders-Properties/61558862447069/",
  instagramFollowers: "520+",
  instagramPosts: "248",
  facebookFollowers: "70+",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(message)}`;
}
