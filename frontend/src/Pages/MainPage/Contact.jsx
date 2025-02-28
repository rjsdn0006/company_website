import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const dummydata = [
    {
      title: "전화 문의",
      info: "02-1234-5678",
      subInfo: "평일 09:00 - 18:00",
    },
    {
      title: "이메일 문의",
      info: "support@example.com",
      subInfo: "24시간 접수 가능",
    },
    { title: "위치", info: "서울특별시 강남구", subInfo: "삼성동 123번지" },
  ];

  return (
    <div className="bg-white py-10 lg:py-20 lg:pt-0">
      {/* 전체 컨테이너 */}
      <div className="container mx-auto py-4 max-w-6xl">
        {/* 상단 영역 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            문의하기
          </h2>
          <p className="text-lg text-gray-600">
            궁금하신 점이 있으신가요? 언제든 문의해주세요.
          </p>
        </div>
        {/* 중앙 카드 영역 */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 m-4 md:m-0">
          {[
            dummydata.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-300 text-center">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.info}</p>
                <p className="text-gray-500 text-sm">{item.subInfo}</p>
              </div>
            )),
          ]}
        </div>
        {/* 하단부분 */}
        <div className="mt-12 mb-12 max-w-4xl mx-auto">
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25298.11596841251!2d126.93880287431641!3d37.57238899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2eb421c44ad%3A0xe955a50c118085f8!2z6rSR7ZmU66y46rSR7J6l!5e0!3m2!1sko!2skr!4v1740621962318!5m2!1sko!2skr"
              width="100%"
              height="400"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] md:h-[600px] lg:h-[600px]"
            />
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block px-10 py-3 text-lg font-bold text-white bg-blue-600 rounded-xl shadow hover:bg-blue700 transition-all duration-300 ease-in-out hover:shadow-lg">
            문의하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
