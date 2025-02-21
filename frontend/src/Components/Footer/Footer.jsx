import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <Footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* 태블릿 이상에서 4개의 grid로 분리되는 형태 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* GRID 회사소개 */}
          <div>
            <h3 className="text-xl font-bold mb-4">회사 소개</h3>
            <p className="text-gray-400">
              저희 회사는 최고의 서비스를 제공합니다.
            </p>
          </div>
          {/* GRID 빠른링크 */}
          <div>
            <h3 className="text-xl font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors duration-300"
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors duration-300"
                >
                  회사 정보
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors duration-300"
                >
                  임원 소개
                </Link>
              </li>
              <li>
                <Link
                  to="/our-services"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors duration-300"
                >
                  제공 서비스
                </Link>
              </li>
              <li>
                <Link
                  to="/board"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors duration-300"
                >
                  게시판
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors duration-300"
                >
                  문의
                </Link>
              </li>
            </ul>
          </div>
          {/* GRID 연락처 */}
          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <ul className="space-y-2 text-gray-400">
              <li>서울특별시 강남구</li>
              <li>삼성동 123번지</li>
              <li>전화: 02-1234-5678</li>
              <li>이메일: info@example.com</li>
            </ul>
          </div>
          {/* GRID 소셜미디어 */}

          <div>
            <h3 className="text-xl font-bold mb-4">소셜 미디어</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin></FaLinkedin>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 ABC Company. All rights reserved.</p>
      </div>
    </Footer>
  );
};

export default Footer;
