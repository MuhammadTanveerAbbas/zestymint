const navLinks = [
  {
    id: "cocktails",
    title: "Pricing",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Mint Mojito Sparkle",
    country: "US",
    detail: "355 ml",
    price: "$8",
  },
  {
    name: "Lime Mint Refresher",
    country: "IN",
    detail: "300 ml",
    price: "$6",
  },
  {
    name: "Cucumber Mint Cooler",
    country: "CA",
    detail: "750 ml",
    price: "$12",
  },
  {
    name: "Iced Mint Tea",
    country: "UK",
    detail: "500 ml",
    price: "$10",
  },
];

const mockTailLists = [
  {
    name: "Tropical Mint Burst",
    country: "US",
    detail: "355 ml",
    price: "$9",
  },
  {
    name: "Passion Mint Breeze",
    country: "AU",
    detail: "300 ml",
    price: "$7",
  },
  {
    name: "Citrus Mint Glow",
    country: "CA",
    detail: "750 ml",
    price: "$11",
  },
  {
    name: "Lavender Mint Fizz",
    country: "IE",
    detail: "500 ml",
    price: "$10",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.webp",
  },
  {
    imgPath: "/images/profile2.webp",
  },
  {
    imgPath: "/images/profile3.webp",
  },
  {
    imgPath: "/images/profile4.webp",
  },
];

const featureLists = [
  "Perfectly balanced blends",
  "Garnished to perfection",
  "Ice-cold every time",
  "Expertly shaken & stirred",
];

const goodLists = [
  "Handpicked ingredients",
  "Signature techniques",
  "Bartending artistry in action",
  "Freshly muddled flavors",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "123 Mint Lane, Suite 8B, Greenview City, ZZ 12345",
  contact: {
    phone: "(000) 123-4567",
    email: "contact@zestymint.io",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
  {
    name: "Facebook",
    icon: "/images/fb.webp",
    url: "#",
  },
  {
    name: "Instagram",
    icon: "/images/insta.webp",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.webp",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Classic Mojito",
    image: "/images/drink1.webp",
    title: "Refreshing, Timeless, Minty",
    description:
      "A perfect balance of fresh mint, lime juice, and sparkling soda over white rum. The Classic Mojito delivers a crisp and invigorating taste for any occasion.",
  },
  {
    id: 2,
    name: "Raspberry Mojito",
    image: "/images/drink2.webp",
    title: "Fruity Twist on a Minty Favorite",
    description:
      "Bursting with fresh raspberries, muddled mint, and a splash of lime, this mojito variation offers a fruity zing while staying light and refreshing.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drink3.webp",
    title: "Floral Elegance Meets Mint Freshness",
    description:
      "Infused with violet syrup, mint leaves, and citrus, the Violet Breeze is a floral-forward take on the mojito, ideal for upscale sipping experiences.",
  },
  {
    id: 4,
    name: "Curacao Mojito",
    image: "/images/drink4.webp",
    title: "Mint Meets Island Vibes",
    description:
      "This tropical variation blends blue curaçao, lime, mint, and soda for a visually striking, flavor-packed mojito that brings beachside energy to your glass.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
