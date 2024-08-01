import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import me from '../assets/me.png';
import profile from '../assets/profile2.png';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#A6A2A2]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-[#11270B]">
         Software Engineer
        </h2>
        {/* <p className="text-black-500 py-4 max-w-md"> */}
        <p className='font-medium py-4 max-w-md font-["Noto_Sans_KR"]'>
          <br></br>
        주니어 개발자입니만 영상편집/웹디자인/마케팅/유지보수 경험이 있습니다. 
          <br></br>
        다양한 경험으로 인한 '척 하면 척' 원활한 커뮤니케이션 능력, 빠른 습득능력, *미친 친화력* 보유
          <br></br>
        백엔드/프론트엔드 가리지 않고 좋아합니다.
          <br></br><br></br>
        2024년 3월 ~ 2024년 7월 크래프톤 정글 수료, 단단한 기본기로 가파른 성장곡선 그릴 예정
          <br></br>
        2022년 8월 ~ 2024년 1월 성화기업택배 개발팀, 사내 전산프로그램 유지보수, 고객사 웹 서비스 유지보수, PC/프린터 등 HW장애 응대 및 해결(원격 또는 출장)  
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#178C38] to-[#A6A2A2] cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={profile}  
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-65%"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;
