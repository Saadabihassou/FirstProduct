import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useTheme } from "../context/ThemeContext";

export default function Testimonials() {
      const { darkMode } = useTheme();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Lead @BrightWave",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "This platform transformed our team's workflow. Real-time updates and intuitive UI—just what we needed!",
    },
    {
      name: "James Carter",
      role: "Founder @CleverTech",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
      quote:
        "Our productivity doubled since we started using this SaaS. The automation tools are gold.",
    },
    {
      name: "Amina Khalid",
      role: "Project Manager @NovaApps",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote:
        "From onboarding to daily use, it's been seamless. The support team is also super responsive.",
    },
    {
      name: "Liam Nguyen",
      role: "Developer @Techify",
      image: "https://randomuser.me/api/portraits/men/71.jpg",
      quote:
        "Dark mode is 🔥 and the integrations saved us countless hours. Highly recommend! For my freinds!",
    },
    {
      name: "Elena Petrova",
      role: "CEO @VisionFlow",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      quote:
        "Everything is customizable and easy to manage. It’s like having a full toolkit in one place.",
    },
  ];

  return (
        <section className={`w-full px-6 py-12 ${darkMode ? "bg-gray-900" : "bg-gray-50"} transition-colors duration-300`}>
      <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 border-b-2 border-blue-500 pb-1 w-fit mx-auto px-3">
        What Our Users Say !
                    </h2>
                    <p className={`text-center mb-8 max-w-xl ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                          Our users love us! Check out what they have to say about their experience with our platform.
                        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white"} rounded-xl shadow-md p-6 m-2 flex flex-col items-center border-2 border-violet-500 text-center h-full`}>
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-blue-500"
              />
              <p className=" italic mb-4">"{t.quote}"</p>
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-sm">{t.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
