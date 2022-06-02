import api from "../../assets/icons/api.svg";
import algorithm from "../../assets/icons/algorithm.svg";
import computer from "../../assets/icons/computer.svg";
import responsive from "../../assets/icons/responsive.png";
const skills = [
  {
    icon: computer,
    title: "Frontend Development",
    about: [
      "I can build a beautiful and scalable SPA using",
      <strong key={1}>"React.js"</strong>,
    ],
  },
  {
    icon: api,
    title: "API Development",
    about: ["I can use different REST API"],
  },
  {
    icon: algorithm,
    title: "Competitive Coder",
    about: "a daily problem solver in HackerRank and LeetCode",
  },
  {
    icon: responsive,
    title: "Responsive design",
    about: "I can create a web design that works properly on all devices",
  },
];
export default skills;
