import ImageCarousel from "../components/ImageCarousel";

const images = [
  {
    src: "/assets/geekverse1.jpg",
    alt: "Geekverse Hackathon - Event Photo 1"
  },
  {
    src: "/assets/geekverse2.jpg",
    alt: "Geekverse Hackathon - Event Photo 2"
  },
  {
    src: "/assets/SDI_1.jpg",
    alt: "Smart Delhi Ideathon - Event Photo 1"
  },
  {
    src: "/assets/SDI_2.jpg",
    alt: "Smart Delhi Ideathon - Event Photo 2"
  },
  {
    src: "/assets/SDI_3.jpg",
    alt: "Smart Delhi Ideathon - Event Photo 3"
  },
  {
    src: "/assets/SDI_4.jpg",
    alt: "Smart Delhi Ideathon - Event Photo 4"
  },
  {
    src: "/assets/GDG_1.jpg",
    alt: "Google Developer Groups USAR - Event Photo 1"
  },
  {
    src: "/assets/GDG_2.jpg",
    alt: "Google Developer Groups USAR - Event Photo 2"
  },
  {
    src: "/assets/GDG_3.jpg",
    alt: "Google Developer Groups USAR - Event Photo 3"
  },
  {
    src: "/assets/googleIO_1.jpg",
    alt: "Google I/O Extended - Event Photo 1"
  },
  {
    src: "/assets/googleIO_2.jpg",
    alt: "Google I/O Extended - Event Photo 2"
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
