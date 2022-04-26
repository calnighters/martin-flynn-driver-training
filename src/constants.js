import { WhatsApp } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";

const facebookUrl = process.env.REACT_APP_FACEBOOK_URL;
const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
const email = process.env.REACT_APP_EMAIL;
const highwayCode = process.env.REACT_APP_HIGHWAY_CODE;
const helpfulInfo = process.env.REACT_APP_HELPFUL_INFO;
const theoryPrice = process.env.REACT_APP_THEORY_PRICE;
const practicalPrice = process.env.REACT_APP_PRACTICAL_PRICE;
const baseUrl = process.env.REACT_APP_BASE_URL;
const baseEndpoint = "/martin-flynn";
const password = process.env.REACT_APP_PASSWORD;

const externalUrls = [
  {
    type: "contact",
    name: "Facebook",
    url: `${facebookUrl}`,
    icon: <FacebookIcon />,
  },
  {
    type: "contact",
    name: "Whatsapp",
    url: `https://wa.me/44${phoneNumber}`,
    icon: <WhatsApp />,
  },
  {
    type: "info",
    name: "Highway Code",
    url: `${highwayCode}`,
    icon: "highwayCode.jpg",
    description: "Find information on the Highway Code here.",
  },
  {
    type: "info",
    name: "Helpful Info",
    url: `${helpfulInfo}`,
    icon: "learnerPlate.jpg",
    description: "Find information on Learning to Drive here.",
  },
];

export {
  facebookUrl,
  phoneNumber,
  email,
  highwayCode,
  helpfulInfo,
  externalUrls,
  theoryPrice,
  practicalPrice,
  baseUrl,
  baseEndpoint,
  password,
};
