import { WhatsApp } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";

const facebookUrl =
  "https://www.facebook.com/Martin-Flynn-Driving-106274308474591/";
const phoneNumber = "07772230455";
const email = "tango7864@gmail.com";
const highwayCode =
  "https://www.gov.uk/browse/driving/highway-code-road-safety";
const helpfulInfo = "https://www.gov.uk/browse/driving/learning-to-drive";

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
};
