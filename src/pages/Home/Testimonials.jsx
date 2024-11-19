import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ImQuotesLeft } from "react-icons/im";

const reviews = [
    {
      "reviewText": "The meals were simply delightful! Each bite was bursting with flavor, and the service was exceptional.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_WE4hUxUFNJ_WC_5NwTBjUxSr1xMF7batA&s",
      "name": "Emily Carter",
      "role": "Food Blogger",
      "iconClass": "fa-solid fa-quote-left text-4xl text-bluebg-blue-700"
    },
    {
      "reviewText": "A wonderful experience! The food quality was beyond my expectations, and the delivery was incredibly fast. Great job!",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s",
      "name": "Michael Smith",
      "role": "Chef",
      "iconClass": "fa-solid fa-quote-left text-4xl text-bluebg-blue-700"
    },
    {
      "reviewText": "I couldn’t get enough of their delicious dishes. Perfectly seasoned, fresh ingredients, and amazing packaging. Loved it!",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s",
      "name": "Sophia Brown",
      "role": "Culinary Enthusiast",
      "iconClass": "fa-solid fa-quote-left text-4xl text-bluebg-blue-700"
    },
    {
      "reviewText": "Fantastic! The flavors were so authentic, and the delivery was smooth. Definitely a top choice for quality food.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s",
      "name": "James Anderson",
      "role": "Food Critic",
      "iconClass": "fa-solid fa-quote-left text-4xl text-secondaryColor"
    },
    {
      "reviewText": "Exceptional taste and presentation! Their service team deserves applause for such a seamless experience.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUyllrW-u-01_B8qMki4ybHzbhuBWhUq3pMA&s",
      "name": "Olivia Johnson",
      "role": "Restaurant Consultant",
      "iconClass": "fa-solid fa-quote-left text-4xl text-secondaryColor"
    }
  ]
  

const Testimonial = () => {
    
  return (
    <section id="review" className=" bg-blue-100 dark:bg-black">
      <div  className="container mx-auto p-10 sm:p-20 ">
      <div className="w-full sm:w-1/2 mx-auto text-center space-y-5 p-5">
        <h2 className="md:text-4xl text-2xl font-oswald uppercase text-black">
          Customer Reviews
        </h2>
        <hr className="w-28 h-[4px] mx-auto bg-blue-500 my-4" />
        <p className="text-black">
          Hear from our satisfied customers about their dining experiences.
          We&apos;re proud to have served them and look forward to serving you.
        </p>
      </div>
      {/* Swiper */}
      <Swiper
        className="mySwiper mt-10"
        speed={400}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className={`review_card px-7 py-8 bg-white  dark:bg-gray-800 hover:scale-[1.02] ease-out duration-300 rounded-md shadow-lg flex flex-col items-center justify-center`}>
              <p className="text-sm font-semibold text-black mb-4">
                {review.reviewText}
              </p>
              <div className="flex items-center justify-between mt-4 w-full">
                <div className="flex items-center">
                  <img
                    className="w-16 h-16 rounded-full"
                    src={review.image}
                    alt={review.name}
                  />
                  <div className="ml-4">
                    <h2 className="text-base font-semibold text-gray-900 dark:text-gray-200">
                      {review.name}
                    </h2>
                    <p className="text-sm text-gray-800 dark:text-gray-400">{review.role}</p>
                  </div>
                </div>
                <ImQuotesLeft className={`${review.iconClass} text-yellow-400`} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
