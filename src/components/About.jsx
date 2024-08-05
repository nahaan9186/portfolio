import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#A6A2A2] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-[#11270B] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-[#178C38]">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
              이 주니어, 범상치않다
              </p>
            </div>
            <div>
              <p>
                {" "}
                크래프톤 정글에서 배운 게 뭐야? 자료구조, 알고리즘, 운영체제, 네트워크, 컴퓨터구조에 대한 기본기를 다졌다고? 새로운 기술을 습득하는 속도가 빠르겠군! 개발자인데 영상편집, 웹디자인, 마케팅이 가능해? 타 부서와의 소통이 원활하겠군! 모름지기 개발 잘 하는 것도 중요하지만, 부서 간 소통과 사용자 관점에서 바라보는 사고력도 만만치않게 중요하지! 게다가 이 녀석, 타고난 친화력으로 남녀노소 가리지 않고 금방 스며드는 능력이 있다구! 자신의 생각을 논리적으로 전달하는 것을 좋아하고, 남들 앞에 서는 것을 두려워하지 않지! 매일 성장을 위해 알고리즘 문제를 풀고 CS개념을 블로그에 기록한다구? 이 녀석, 블로그에도 한 번 들어가봐야겠는걸! 고민할 줄 아는 개발자, 성장할 줄 아는 개발자, 소통할 줄 아는 개발자가 필요하다면 이 녀석을 팀에 합류시켜야겠군! 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;