// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";

// import images
import Features1Img from "./assets/img/features-1.png";
import Features2Img from "./assets/img/features-2.png";
import ChairImg from "./assets/img/chair.png";
import BedImg from "./assets/img/bed.png";
import CupboardImg from "./assets/img/cupboard.png";
import LightingImg from "./assets/img/lighting.png";
import Product1Img from "./assets/img/products/product-1.png";
import Product2Img from "./assets/img/products/product-2.png";
import Product3Img from "./assets/img/products/product-3.png";
import Product4Img from "./assets/img/products/product-4.png";
import Product5Img from "./assets/img/products/product-5.png";
import Product6Img from "./assets/img/products/product-6.png";
import Product7Img from "./assets/img/products/product-7.png";
import Product8Img from "./assets/img/products/product-8.png";
import Product9Img from "./assets/img/products/product-9.png";
import Product10Img from "./assets/img/products/product-10.png";
import TestimonialImg from "./assets/img/testimonial.png";
import Avatar1Img from "./assets/img/avatar-1.png";
import Avatar2Img from "./assets/img/avatar-2.png";
import Avatar3Img from "./assets/img/avatar-3.png";
import SofaImg from "./assets/img/sofa.jpg";
import ConstructImg from "./assets/img/construction.jpg";
import FloorImg from "./assets/img/flooring.jpg";
import PaintingImg from "./assets/img/paint.jpg";
import MirrorImg from "./assets/img/mirror.jpg";
import Product01 from "./assets/pic/products/product-1.png";
import Product02 from "./assets/pic/products/product-2.png";
import Product03 from "./assets/pic/products/product-3.png";
import Product04 from "./assets/pic/products/product-4.png";
import Product05 from "./assets/pic/products/product-5.png";
import Product06 from "./assets/pic/products/product-6.png";
import Product07 from "./assets/pic/products/product-7.png";
import Product08 from "./assets/pic/products/product-8.png";
import Product09 from "./assets/pic/products/product-9.png";
import Product10 from "./assets/pic/products/product-10.png";

import Furniture01 from "./assets/pic/furn1.jpg";
import Furniture02 from "./assets/pic/furn2.jpg";
import Furniture03 from "./assets/pic/furn3.jpg";
import Furniture04 from "./assets/pic/furn4.jpg";
import Furniture05 from "./assets/pic/furn5.jpg";
import Furniture06 from "./assets/pic/furn6.jpg";
import Play from "./assets/pic/play.png";
import Pause from "./assets/pic/pause.png";
import FurnitureVideo from "./assets/pic/furniture.mp4";
import Xpic from "./assets/pic/x.png";
import signupImg from "./assets/img/signup.gif";
export { Furniture02 };
export { Furniture01 };
export { Furniture03 };
export { Furniture04 };
export { Furniture05 };
export { Furniture06 };
export { signupImg };
export { Play };
export { Pause };
export { FurnitureVideo };
export { Xpic };
export const navigation = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Shop",
    href: "shop",
  },

  {
    name: "Contact",
    href: "contact",
  },
];

export const hero = {
  title: "Creative Home Simpify your Furniture",
  subtitle:
    "Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto",
  buttonText: "Shop Now",
};

export const stats = [
  {
    value: "7",
    text: "Year Experience",
  },
  {
    value: "2",
    text: "Opened in the country",
  },
  {
    value: "10k+",
    text: "Furniture sold",
  },
  {
    value: "260+",
    text: "Variant Furniture",
  },
];

export const features = {
  image: <Features1Img />,
  title: "We Create your home more aesthetic",
  subtitle:
    "Furniture power is a software as services for multipurpose business management system",
  buttonText: "Show Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Valuation Services",
      subtitle:
        "Sometimes features require a short description.  This can be detailed description",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Development of Furniture Models",
      subtitle:
        "Sometimes features require a short description.  This can be detailed description",
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: "The Best Furniture Manufacturer of your choice",
    subtitle:
      "Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.",
  },
};

export const newInStore = {
  title: "New In Store Now",
  subtitle: "Get the latest items immediately with promo prices",
  link: "Check all",
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: "chair",
      image: <ChairImg />,
    },
    {
      name: "bed",
      image: <BedImg />,
    },
    {
      name: "cupboard",
      image: <CupboardImg />,
    },
    {
      name: "lighting",
      image: <LightingImg />,
    },
  ],
};
export const newInStore2 = {
  title: "New In Store Now",
  subtitle: "Get the latest items immediately with promo prices",
  link: "Check all",
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: "Construction Work",
      image: <ConstructImg />,
    },
    {
      name: "Flooring Work",
      image: <FloorImg />,
    },
    {
      name: "Painting Work",
      image: <PaintingImg />,
    },
    {
      name: "Mirror Work",
      image: <MirrorImg />,
    },
  ],
};
export const products2 = [
  {
    name: "Plant Decoration",
    price: "$10.00",
    category: "decoration",
    imageUrl: <Product01 />,
    icons: ["fas fa-shopping-bag", "far fa-heart", "fas fa-search"],
  },
  {
    name: "Bulb",
    price: "$5.00",
    category: "decoration",
    imageUrl: <Product02 />,
    icons: ["fas fa-shopping-bag", "far fa-heart", "fas fa-search"],
  },
  {
    name: "Cup holder",
    price: "$19.00",
    category: "decoration",
    imageUrl: <Product03 />,
    icons: ["fas fa-shopping-bag", "far fa-heart", "fas fa-search"],
  },
  {
    name: "Cup holder",
    price: "$19.00",
    category: "decoration",
    imageUrl: <Product04 />,
    icons: ["fas fa-shopping-bag", "far fa-heart", "fas fa-search"],
  },
  {
    name: "Cup holder",
    price: "$19.00",
    category: "decoration",
    imageUrl: <Product05 />,
    icons: ["fas fa-shopping-bag", "far fa-heart", "fas fa-search"],
  },
  {
    name: "White vase",
    price: "$26.00",
    category: "decoration",
    imageUrl: <Product06 />,
    icons: ["fas fa-shopping-bag", "far fa-heart", "fas fa-search"],
  },
  {
    name: "Gray sofa",
    price: "$165.00",
    category: "furniture",
    imageUrl: <Product07 />,
    icons: ["fas fa-shopping-bag", "far fa-heart", "fas fa-search"],
  },
  {
    name: "Baby chair",
    price: "$120.00",
    category: "furniture",
    imageUrl: <Product08 />,
    icons: ["fas fa-shopping-bag", "far fa-heart", "fas fa-search"],
  },
  {
    name: "Read chair",
    price: "$115.00",
    category: "furniture",
    imageUrl: <Product09 />,
    icons: ["fas fa-shopping-bag", "far fa-heart", "fas fa-search"],
  },
  {
    name: "Read chair",
    price: "$115.00",
    category: "furniture",
    imageUrl: <Product10 />,
    icons: ["fas fa-shopping-bag", "far fa-heart", "fas fa-search"],
  },
];

export const products = {
  title: "All Products",
  subtitle:
    "The products we provide only for you as our service are selected from the best products with number 1 quality in the world",
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "Ceiling Light",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Wood Chair",
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Treos Seroes 911",
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "Multi bilderman slibber",
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "XORA corner desk",
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "Black Forest Series Wood",
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "Ceiling Light",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Wood Chair",
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Treos Seroes 911",
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "Multi bilderman slibber",
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "XORA corner desk",
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "Black Forest Series Wood",
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: "What people say about us",
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: "Josh Smith",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar2Img />,
      name: "Brandi Johns",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: <Avatar3Img />,
      name: "Paula Pfeffer",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
  ],
};

export const newsletter = {
  title: "Get more discount Off your order",
  subtitle: "Join our mailing list",
  placeholder: "Your email address",
  buttonText: "Shop Now",
};

export let newsletterEmailData = ['Haris@gmail.com']

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: "#",
    },
    {
      icon: <IoLogoInstagram />,
      href: "#",
    },
    {
      icon: <IoLogoGithub />,
      href: "#",
    },
    {
      icon: <IoLogoFacebook />,
      href: "#",
    },
  ],
  copyright: "FurniShop 2022 - All Rights Reserved.",
};
export const glassWork = {
  name2: "Glasses Work Services for Your Company",
  description2:
    "Enhance your workforce's eye health with our Glasses Work Services. We offer on-site vision testing, precise prescriptions, and a range of customized eyewear solutions including safety and computer glasses. Our service includes expert fittings and adjustments for comfort and clarity, with seamless ordering and delivery. Educate and support your team with eye health sessions. Prioritize employee well-being and productivity with [Your Company Name]. Contact us at [Contact Information] to discover how our Glasses Work Services can benefit your company today.",
  products2: [<MirrorImg />],
  price2: "$ 100",
};
export const sofaWork = {
  name: "Expert Sofa Work Services",
  description:
    "Revitalize your sofas with our expert Sofa Work services. We specialize in repair, restoration, and custom upholstery, ensuring your furniture looks and feels brand new. Our professional cleaning removes stains and allergens, extending your sofa's lifespan. Enjoy convenience with on-site services and personalized consultations. Transform your space with quality craftsmanship and attention to detail. Contact us at [Contact Information] to schedule your consultation today.",
  products: [<SofaImg />],
  price: "$ 100",
};
export const paintWork = {
  name: "Professional Paint Services for Your Space",
  description:
    "Transform your space with our expert Paint Services. We specialize in both interior and exterior painting, using advanced techniques for a flawless finish. Our service includes personalized color consultations to achieve your desired aesthetic. We ensure thorough surface preparation for lasting results and offer custom finishes such as textured walls and specialty coatings. Leave your space pristine with our comprehensive clean-up and maintenance. Elevate your home or office with precision and care. Contact us at [Contact Information] to schedule your consultation and discover how we can enhance your environment today.",
  products: [<PaintingImg />],
  price: "$ 100",
};
export const constructWork = {
  name: "Construction Services",
  description:
    "Discover excellence with our full-range Construction Services tailored to your needs. We specialize in efficient project management from inception to completion, custom design and build with skilled architects and builders, renovations and remodeling for enhanced functionality and aesthetics, dedicated service for both commercial and residential projects, and stringent quality assurance for superior craftsmanship and client satisfaction. Partner with us for dependable construction solutions. ",
  products: [<ConstructImg />],
  price: "$ 100",
};
export const furnitureWork = {
  name: "Quality Furniture Selling Services",
  description:
    "Discover exquisite furniture with our premier Furniture Selling Services. We offer a diverse selection of high-quality pieces tailored to every style and budget. Benefit from expert advice and interior design expertise to find the perfect match for your space. Customize your furniture with various finishes, fabrics, and configurations to suit your preferences. Enjoy seamless delivery and professional assembly services for a stress-free experience. We prioritize customer satisfaction with attentive service and ongoing support. Transform your home or office with elegance and comfort.",
  products: [<CupboardImg />],
  price: "$ 100",
};
export const otherWork = {
  name: "Diverse Range of Other Services",
  description:
    "Discover our diverse range of specialized services designed to meet your needs effectively. From home improvement projects including renovations and interior design, to comprehensive property maintenance services ensuring top condition upkeep. We excel in event planning, managing corporate events and private gatherings flawlessly. Enhance your digital presence with our tailored digital marketing strategies and campaigns. Additionally, benefit from expert consulting services covering business, technology, and strategic planning.  ",
  products: [<FloorImg />],
  price: "$ 100",
};

// SEND EMAIL CONFIGURATION

export const ServiceID = "service_re7h4ss";
export const TemplateID = "template_9mcjqug";
export const PublicKey = "yCZb-WloamKPMGADH";
