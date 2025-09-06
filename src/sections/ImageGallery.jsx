import ImageCarousel from "../components/ImageCarousel";

const images = [
  {
    src: "/assets/geekverse1.jpg",
    alt: "Accessories Project"
  },
  {
    src: "/assets/geekverse2.jpg",
    alt: "Auth System Project"
  },
  {
    src: "/assets/SDI_1.jpg",
    alt: "Blazor App Project"
  },
  {
    src: "/assets/SDI_2.jpg",
    alt: "COD Project"
  },
  {
    src: "/assets/SDI_3.jpg",
    alt: "E-Learning Project"
  },
  {
    src: "/assets/SDI_4.jpg",
    alt: "E-Learning Project"
  },
  {
    src: "/assets/GDG_1.jpg",
    alt: "E-Learning Project"
  },
  {
    src: "/assets/GDG_2.jpg",
    alt: "E-Learning Project"
  },
  {
    src: "/assets/GDG_3.jpg",
    alt: "E-Learning Project"
  },
  {
    src: "/assets/googleIO_1.jpg",
    alt: "E-Learning Project"
  },
  {
    src: "/assets/googleIO_2.jpg",
    alt: "E-Learning Project"
  }
];

export default function ImageGallery() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">Some Glimpses..</h2>
      <div className="w-full mt-12">
        <ImageCarousel images={images} />
      </div>
    </div>
  );
}
