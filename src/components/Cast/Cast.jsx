import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axiosFetch from "../../api/axios";
import { useGlobalContext } from "../../context/Context";
import CastCard from "./CastCard";

const Cast = () => {
  const { movieID } = useGlobalContext();

  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const url = `movie/${movieID}/credits`;
      try {
        const response = await axiosFetch.get(url);
        setMovieCast(response.data.cast);
      } catch {
        console.log("error");
      }
    };
    fetchCast();
  }, [movieID]);
  console.log("cast", movieCast);

  return (
    <div className="flex px-2 min-w-[100px] max-w-full">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper rounded-bl-lg"
      >
        {movieCast?.map((item) => (
          <SwiperSlide
            key={item.cast_id}
            className=" shadow-xl shadow-black flex items-center justify-center"
          >
            <CastCard cast={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cast;
