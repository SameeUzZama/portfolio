import Ecommerce from "../../Asset/E-Commerce.JPG";
import responsive from "../../Asset/Responsive-VPN-App.JPG";
import todo from "../../Asset/Todo.JPG";
import outlook from "../../Asset/outlook.JPG";
import mutual from "../../Asset/mutual.JPG";
import chess from "../../Asset/chessboard.JPG";

const tags = ["Website", "Web Application", "Enterprise grade application"];

export const ALL_PROJECTS = [
  {
    id: "0",
    title: "E-Commerce",
    details:
      "This is a React-based e-commerce application with Redux that allows users to easily add products to their cart and view their current cart items. Users can also view detailed product information and search for products by title.",
    link: "https://sameeuzzama.github.io/redux-e-commerce/",
    image: Ecommerce,
    tags: [tags[1], tags[2]],
  },
  {
    id: "1",
    title: "VPN-Responsive App",
    details:
      "A responsive website built with React is designed to adjust its layout and content to provide an optimal user experience on any device, whether it's a desktop, tablet, or mobile phone.",
    link: "https://sameeuzzama.github.io/lasles_vpn/",
    image: responsive,
    tags: [tags[0]],
  },
  {
    id: "2",
    title: "To-Do App",
    details:
      "Responsive task manager website with task completion checkbox and Excel export, offering efficient task management on any device.",
    link: "https://sameeuzzama.github.io/task-management/",
    image: todo,
    tags: [tags[0], tags[1]],
  },
  {
    id: "3",
    title: "Outlook Clone",
    details:
      "App loads folder contents and displays unread count on startup. Users can navigate, preview, delete, flag, search and filter emails. ",
    link: "http://SameeUzZama.github.io/mail-react",
    image: outlook,
    tags: [tags[1], tags[2]],
  },
  {
    id: "4",
    title: "Social Connection",
    details:
      "An app to find the degree of separation between any two people, allowing users to add people, set relationships, and view the degrees of separation.",
    link: "https://sameeuzzama.github.io/findmutualconnection/",
    image: mutual,
    tags: [tags[1], tags[2]],
  },
  {
    id: "5",
    title: "Chess Board",
    details:
      "In this React app, there is a chess board and a single knight. When the knight is selected, the app displays the possible next positions according to the rules of chess",
    link: "https://SameeUzZama.github.io/chessboard",
    image: chess,
    tags: [tags[0], tags[1]],
  },
];
