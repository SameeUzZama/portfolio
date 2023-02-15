import Ecommerce from "../../Asset/E-Commerce.JPG";
import responsive from "../../Asset/Responsive-VPN-App.JPG";

const tags = ["Website", "Web Application", "Enterprise grade application"];

export const ALL_PROJECTS = [
  {
    id: "0",
    title: "E-Commerce",
    details: "Web Application in Redux",
    link: "https://sameeuzzama.github.io/redux-e-commerce/",
    image: Ecommerce,
    tags: [tags[1], tags[2]],
  },
  {
    id: "1",
    title: "VPN-Responsive App",
    details: "Website which is responsive for all devices ",
    link: "https://sameeuzzama.github.io/lasles_vpn/",
    image: responsive,
    tags: [tags[0]],
  },
];
