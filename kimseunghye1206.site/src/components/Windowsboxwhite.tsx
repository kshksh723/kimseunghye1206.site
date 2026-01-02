/* Devleoper's Portfolio 창 */
import profileImg from '../img/profilePhoto.jpg';
function Windowsboxwhite () {

  function handleOnclick1() {
    alert("© 2026 Kim Seung Hye :)  Last updated: january 2026");
  }
  

    return (
    <div className="w-full max-w-[1000px] h-[90dvh] md:h-[85vh] flex flex-col bg-[#c0c0c0] shadow-[2px_2px_0px_rgba(0,0,0,1),inset_2px_2px_0px_rgba(255,255,255,1)] p-1 border-r-2 border-b-2 border-gray-800">
        <div className="flex-none bg-[#000080] text-white flex justify-between items-center px-2 py-1 mb-1">
            <div className="flex items-center gap-2">   
                <span className="text-xs">💻</span>
                <span className="text-sm font-bold tracking-tight">Developer's Portfolio</span>
            </div>
            <div className="flex gap-1">
                <button className="bg-[#c0c0c0] text-black px-1 border border-white border-r-black border-b-black text-xs">_</button>
                <button className="bg-[#c0c0c0] text-black px-1 border border-white border-r-black border-b-black text-xs">x</button>
            </div>
        </div>
  <div className="flex-1 bg-white border-t-2 border-l-2 border-gray-800 border-r-white border-b-white p-10 overflow-y-auto scrollbar-custom p-6 md:p-10 
        overflow-y-auto custom-scrollbar">
        <h2 className="text-black text-3xl font-extrabold">Kim Seung Hye</h2>
                        <p className="text-gray-500/68  font-light">꾸준히 성장하는 개발자</p>
    <div>
    
    <div className="w-48 h-60 overflow-hidden rounded-lg ml-auto">
      <img 
        src={profileImg} className="w-full h-full object-cover select-none" alt="profile" draggable="false" 
        onContextMenu={(e) => e.preventDefault()} />
    </div>
    <div className="mt-4 bg-white border-2 border-gray-500 p-4 h-full text-black font-mono overflow-y-auto">
  <h2 className="text-lg font-bold mb-3">👋 안녕하세요!</h2>
  <p className="leading-relaxed mb-4">
    기획부터 구현까지, 프로젝트의 <span className="bg-yellow-200 px-1">A to Z를 경험하며 성장</span>해온 개발자입니다.
  </p>
  <ul className="list-disc ml-5 space-y-2 text-sm">
    <li><strong>React-Native:</strong> 교환일기 앱 기획/개발 (교내 공모전 <strong>우수상</strong> && 지역 공모전 <strong>인기상</strong>)</li>
    <li><strong>Professionalism:</strong> SI 근무 당시 산출물 작성 'A+' 등급 평가</li>
  </ul>
</div>
    <h1 className="text-xl font-bold mb-4 pb-1 mt-6  border-b border-gray-200">Contact.</h1>
    <p className="p-2 flex text-gray-700 text-sm mb-6 leading-relaxed">
        Email :  
        <a href="mailto:kimsh33971190@gmail.com" className="ml-3 underline decoration-1 underline-offset-4 hover:text-blue-600 transition-colors">
      kimsh33971190@gmail.com
        </a>
    </p>
    
 <div className="mt-8">
  <h3 className="text-xl font-bold mb-4 pb-1 border-b border-gray-200">
    Education.
  </h3>
  <div className="space-y-6">
    {/* 대학교 */}
    <div>
      <div className="flex justify-between items-baseline px-2">
        <span className="font-bold text-gray-900">순천대학교 <span className="text-sm font-normal text-gray-600">(편입)</span></span>
        <span className="text-sm text-gray-500">2021.03. ~ 2023.02.</span>
      </div>
      <p className="pl-2 text-sm text-gray-700">컴퓨터공학과 졸업</p>
    </div>

    <div>
      <div className="flex justify-between items-baseline px-2">
        <span className="font-bold text-gray-900">전주비전대학교</span>
        <span className="text-sm text-gray-500">2018.03. ~ 2021.02.</span>
      </div>
      <p className="pl-2 text-sm text-gray-700">컴퓨터정보과 졸업</p>
    </div>

    {/* 교육 센터 */}
    <div>
      <div className="flex justify-between items-baseline px-2">
        <span className="font-bold text-gray-900">쌍용 강북 교육센터</span>
        <span className="text-sm text-gray-500">2024.01. ~ 2024.08.</span>
      </div>
      <div className="pl-2 mt-1">
        <p className="text-sm font-medium text-gray-800">실무 프로젝트 기반 빅데이터 서비스 솔루션 개발자 양성과정 8기</p>
      </div>
    </div>
  </div>
</div>
 <section>
  <h3 className="text-lg md:text-xl mt-6 font-bold mb-4 pb-1 border-b border-gray-200">Career.</h3>
  {/* 비브이에스 */}
  <div className="mb-8 px-1 md:px-2">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
        <span className="text-md md:text-lg text-lg font-bold">비브이에스</span>
        <span className="text-sm text-gray-600 font-medium">홈페이지 콘텐츠 운영 및 유지보수</span>
      </div>
      <span className="text-sm text-gray-500 tabular-nums">2025.07. ~ 2025.09.  (3개월)</span>
    </div>
    
    <ul className="ml-8 list-disc text-gray-800 space-y-1.5">
      <p className="text-sm font-mono text-blue-600 mt-1">
        Stack:  Java, eGovFrame, MyBatis, Oracle, JavaScript, CSS, HTML
      </p>
      <ul className="list-disc text-gray-800 space-y-2 text-sm leading-relaxed">
        <li>PMS 및 유선 요청을 통한 홈페이지 콘텐츠 유지보수 관련 반영 업무 담당</li>
        <li>
          CMS(콘텐츠 관리 시스템)을 활용한 콘텐츠 수정 및 요청사항 반영
        </li>
        <li>
          서비스 고도화를 목표로 <strong>앱 분석</strong>을 통해 UX 개선 방안 도출
        </li>
        <li>
          개선된 서비스 구조 및 사용자 흐름을 반영한 <strong>홈페이지 스토리보드 기획 및 작성</strong>
        </li>
      </ul>
    </ul>
  </div>  

  {/* 디와이정보기술 */}
  <div className="mb-8 px-1 md:px-2">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
        <span className="text-lg font-bold">디와이정보기술</span>
        <span className="text-sm text-gray-600 font-medium">SI 공공사업팀</span>
      </div>
      <span className="text-sm text-gray-500 tabular-nums">2024.10. ~ 2025.06. (8개월)</span>
    </div>

    <ul className="ml-8 list-disc text-gray-800 space-y-1.5">
      <p className="text-sm font-mono text-blue-600 mt-1">
        Stack:  Java, Spring Framework, MyBatis, Oracle, WebSquare, C#, Tomcat
      </p>
      <ul className="list-disc text-gray-800 space-y-2 text-sm leading-relaxed">
      <li><strong>종합정비창 스마트팩토리 구축사업 참여</strong></li>
      <li>
        <strong>UI/UX 및 데이터 연동 설계:</strong> WebSquare5를 활용한 UI 구조 설계 및 Submission 객체를 통한 Spring Framework 비즈니스 로직 연동
      </li>
      <li>
        <strong>시스템 분석 및 문서화:</strong> C# 기반 WMS의 소스코드 및 데이터 연동 구조를 분석하여 레거시 시스템의 가시성 확보
      </li>
      <li>
        <strong>로직 분석 및 산출물 작성:</strong> 작업지시·실적 등록 등 핵심 화면과 PL/SQL 프로시저 간의 연계 로직 분석 및 기술 산출물 작성
      </li>
      <li>
        <strong>데이터 정합성 검증:</strong> Oracle DB 프로시저를 통해 입·출고 내역 및 상태값 변경 흐름을 추적
      </li>
    </ul>
    </ul>
  </div>
</section>
  <h1 className="text-xl font-bold mb-4 pb-1 mt-6 border-b border-gray-200">Channel.</h1>

<div className="space-y-4 p-2">
  <div className="flex flex-col md:flex-row text-sm text-gray-700">
    <span className="font-bold w-20 shrink-0">GITHUB :</span>
    <a href="https://github.com/kshksh723" target="_blank" className="break-all underline decoration-1 underline-offset-4 hover:text-blue-600 transition-colors">
      https://github.com/kshksh723
    </a>
  </div>

  <div className="flex flex-col md:flex-row text-sm text-gray-700">
    <span className="font-bold w-20 shrink-0">TISTORY :</span>
    <a href="https://it-xxsh.tistory.com/" target="_blank" className="break-all underline decoration-1 underline-offset-4 hover:text-blue-600 transition-colors">
      https://it-xxsh.tistory.com/
    </a>
  </div>

  <div className="flex flex-col md:flex-row text-sm text-gray-700">
    <span className="font-bold w-20 shrink-0">VELOG :</span>
    <a href="https://velog.io/@kshksh723/posts" target="_blank" className="break-all underline decoration-1 underline-offset-4 hover:text-blue-600 transition-colors">
      https://velog.io/@kshksh723/posts
    </a>
  </div>
</div>
  <div className="mt-8 mb-6 leading-relaxed text-black ">
  <p className="text-xl font-bold  pb-1  border-b border-gray-200"> Tech Stacks. </p>
  <div className="p-4 text-sm">
    <div className="mb-2">
      <span className="text-blue-700">[Front-end]</span>
      <p>React(Vite), TypeScript, WebSquare, JSP</p>
    </div>

    <div className="mb-3">
      <span className="text-green-700">[Back-end]</span>
      <p>Java(Spring Boot), JPA, Tomcat</p>
    </div>

    <div className="mb-3">
      <span className="text-purple-700">[Database]</span>
      <p>MySQL, Oracle, MariaDB</p>
    </div>

    <div>
      <span className="text-red-700">[Tools]</span>
      <p>Figma, Git, SVN</p>
    </div>
  </div>
</div>


            <div className="flex justify-end gap-4">
              {/* 클릭 시 상태 업데이트 */}
              <button onClick={handleOnclick1} className="px-6 py-1 bg-[#c0c0c0] border-t-white border-l-white border-r-black border-b-black border-2 active:border-t-black active:border-l-black active:border-r-white active:border-b-white text-sm">
                확인
              </button>
              <button className="px-6 py-1 bg-[#c0c0c0] border-t-white border-l-white border-r-black border-b-black border-2 text-sm">
                취소
              </button>
            </div>
        </div>
    </div>
    </div>
     );   
}
export default Windowsboxwhite;