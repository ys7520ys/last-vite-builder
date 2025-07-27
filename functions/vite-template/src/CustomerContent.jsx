// import { useState, useEffect } from "react";
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpBanner04 from "./components/TpBanner/TpBanner04";
// import AnimatedPage from "./components/AnimatedPage";

// // ✅ 등록된 컴포넌트 매핑
// const componentMap = {
//   배너04: TpBanner04,
// };

// // ✅ 등록된 헤더 타입 매핑
// const headerMap = {
//   헤더02: TpHeader02,
// };

// export default function CustomerContent({ pageData }) {
//   const [currentPageIndex, setCurrentPageIndex] = useState(0);

//   // useEffect(() => {
//   //   window.scrollTo({ top: 0, behavior: "smooth" });
//   // }, [currentPageIndex]);

//   useEffect(() => {
//     // ❌ 제거하세요
//     // window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [currentPageIndex]);

//   const currentPage = pageData?.pages?.[currentPageIndex] || { components: [] };
//   const isValidComponents =
//     Array.isArray(currentPage.components) && currentPage.components.length > 0;

//   const HeaderComponent = headerMap[pageData.headerType];

//   return (
//     <main style={{ background: "#000", color: "#fff", margin: 0, padding: 0 }}>
//       {HeaderComponent && (
//         <HeaderComponent
//           isPreview
//           setCurrentPageIndex={setCurrentPageIndex}
//           currentPageIndex={currentPageIndex}
//           menuItems={pageData.menuItems || []}
//         />
//       )}

//       <AnimatedPage key={currentPageIndex} index={currentPageIndex}>
//         {isValidComponents ? (
//           currentPage.components.map((comp, i) => {
//             const Comp = componentMap[comp.type];
//             return Comp ? (
//               <Comp key={i} {...comp} isPreview />
//             ) : (
//               <div key={i} style={{ padding: "60px", background: "#111" }}>
//                 ⚠️ 알 수 없는 컴포넌트: <strong>{comp.type}</strong>
//               </div>
//             );
//           })
//         ) : (
//           <div style={{ padding: "100px", textAlign: "center" }}>
//             ❌ 페이지 구성 요소가 없습니다
//           </div>
//         )}
//       </AnimatedPage>
//     </main>
//   );
// }






// import { useState } from "react";
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpBanner04 from "./components/TpBanner/TpBanner04";
// import TpSection04 from "./components/TpSection/TpSection04";
// import { AnimatePresence } from "framer-motion";
// import AnimatedPage from "./components/AnimatedPage";

// // ✅ 등록된 컴포넌트 매핑
// const componentMap = {
//   배너04: TpBanner04,
//   섹션04: TpSection04, 
// };

// // ✅ 등록된 헤더 타입 매핑
// const headerMap = {
//   헤더02: TpHeader02,
// };

// export default function CustomerContent({ pageData }) {
//   const [currentPageIndex, setCurrentPageIndex] = useState(0);
//   const [pageKey, setPageKey] = useState(0); // ✅ motion 애니메이션을 위한 별도 key

//   const handleChangePage = (index) => {
//     if (index === currentPageIndex) return;
//     setPageKey((prev) => prev + 1); // key 변경 → motion 감지 유도
//     setCurrentPageIndex(index);
//   };

//   const currentPage = pageData?.pages?.[currentPageIndex] || { components: [] };
//   const isValidComponents =
//     Array.isArray(currentPage.components) && currentPage.components.length > 0;

//   const HeaderComponent = headerMap[pageData.headerType];

//   return (
//     <main style={{ background: "#000", color: "#fff", margin: 0, padding: 0 }}>
//       {HeaderComponent && (
//         <HeaderComponent
//           isPreview
//           setCurrentPageIndex={handleChangePage}
//           currentPageIndex={currentPageIndex}
//           menuItems={pageData.menuItems || []}
//         />
//       )}

//       <AnimatePresence
//         mode="wait"
//         onExitComplete={() => {
//           // ✅ 이전 페이지 사라진 뒤 상단으로 이동
//           window.scrollTo({ top: 0 });
//         }}
//       >
//         <AnimatedPage key={pageKey} index={currentPageIndex}>
//           {isValidComponents ? (
//             currentPage.components.map((comp, i) => {
//               const Comp = componentMap[comp.type];
//               return Comp ? (
//                 <Comp key={i} {...comp} isPreview />
//               ) : (
//                 <div key={i} style={{ padding: "60px", background: "#111" }}>
//                   ⚠️ 알 수 없는 컴포넌트: <strong>{comp.type}</strong>
//                 </div>
//               );
//             })
//           ) : (
//             <div style={{ padding: "100px", textAlign: "center" }}>
//               ❌ 페이지 구성 요소가 없습니다
//             </div>
//           )}
//         </AnimatedPage>
//       </AnimatePresence>
//     </main>
//   );
// }








// import { useState } from "react";
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpBanner04 from "./components/TpBanner/TpBanner04";
// import TpSection04 from "./components/TpSection/TpSection04";
// import { AnimatePresence } from "framer-motion";
// import AnimatedPage from "./components/AnimatedPage";

// // ✅ 등록된 컴포넌트 매핑
// const componentMap = {
//   배너04: TpBanner04,
//   섹션04: TpSection04, 
// };

// // ✅ 등록된 헤더 타입 매핑
// const headerMap = {
//   헤더02: TpHeader02,
// };

// export default function CustomerContent({ pageData }) {
//   const [currentPageIndex, setCurrentPageIndex] = useState(0);
//   const [pageKey, setPageKey] = useState(0);

//   const handleChangePage = (index) => {
//     if (index === currentPageIndex) return;
//     setPageKey((prev) => prev + 1);
//     setCurrentPageIndex(index);
//   };

//   const currentPage = pageData?.pages?.[currentPageIndex] || { components: [] };
//   const isValidComponents =
//     Array.isArray(currentPage.components) && currentPage.components.length > 0;

//   const HeaderComponent = headerMap[pageData.headerType];

//   return (
//     <main style={{ background: "#111", color: "#111", margin: 0, padding: 0 }}>
//       {HeaderComponent && (
//         <HeaderComponent
//           isPreview
//           setCurrentPageIndex={handleChangePage}
//           currentPageIndex={currentPageIndex}
//           menuItems={pageData.menuItems || []}
//           logo={pageData.logo} // ✅ 누락되었던 로고 데이터를 전달하는 코드 추가!
//         />
//       )}

//       <AnimatePresence
//         mode="wait"
//         onExitComplete={() => {
//           window.scrollTo({ top: 0 });
//         }}
//       >
//         <AnimatedPage key={pageKey} index={currentPageIndex}>
//           {isValidComponents ? (
//             currentPage.components.map((comp, i) => {
//               const Comp = componentMap[comp.type];
//               return Comp ? (
//                 <Comp key={comp.id || i} {...comp} isPreview />
//               ) : (
//                 <div key={i} style={{ padding: "60px", background: "#f0f0f0", color: 'red' }}>
//                   ⚠️ 알 수 없는 컴포넌트: <strong>{comp.type}</strong>
//                 </div>
//               );
//             })
//           ) : (
//             <div style={{ padding: "100px", textAlign: "center" }}>
//               ❌ 페이지 구성 요소가 없습니다
//             </div>
//           )}
//         </AnimatedPage>
//       </AnimatePresence>
//     </main>
//   );
// }






// import { useState } from "react";
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpHeader03 from "./components/TpHeader/TpHeader03"; // [추가]
// import TpBanner04 from "./components/TpBanner/TpBanner04";
// import TpSection04 from "./components/TpSection/TpSection04";
// import { AnimatePresence } from "framer-motion";
// import AnimatedPage from "./components/AnimatedPage";

// // ✅ 등록된 컴포넌트 매핑
// const componentMap = {
//   배너04: TpBanner04,
//   섹션04: TpSection04,
//   헤더03: TpHeader03, // ✅ 이거 꼭 필요!
// };

// // ✅ 등록된 헤더 타입 매핑
// const headerMap = {
//   헤더02: TpHeader02,
//   헤더03: TpHeader03, // [추가]
// };

// export default function CustomerContent({ pageData }) {
//   const [currentPageIndex, setCurrentPageIndex] = useState(0);
//   const [pageKey, setPageKey] = useState(0);

//   const handleChangePage = (index) => {
//     if (index === currentPageIndex) return;
//     setPageKey((prev) => prev + 1);
//     setCurrentPageIndex(index);
//   };

//   const currentPage = pageData?.pages?.[currentPageIndex] || { components: [] };
//   const isValidComponents =
//     Array.isArray(currentPage.components) && currentPage.components.length > 0;

//   // pageData.headerType 값 (예: "헤더03")에 따라 올바른 헤더 컴포넌트를 선택합니다.
//   const HeaderComponent = headerMap[pageData.headerType || '헤더02']; // 기본값 '헤더02'

//   return (
//     <main style={{ background: "#111", color: "#111", margin: 0, padding: 0 }}>
//       {HeaderComponent && (
//         <HeaderComponent
//           isPreview
//           setCurrentPageIndex={handleChangePage}
//           currentPageIndex={currentPageIndex}
//           menuItems={pageData.menuItems || []}
//           logo={pageData.logo}
//         />
//       )}

//       <AnimatePresence
//         mode="wait"
//         onExitComplete={() => {
//           window.scrollTo({ top: 0 });
//         }}
//       >
//         <AnimatedPage key={pageKey} index={currentPageIndex}>
//           {isValidComponents ? (
//             currentPage.components.map((comp, i) => {
//               const Comp = componentMap[comp.type];
//               return Comp ? (
//                 <Comp key={comp.id || i} {...comp} isPreview />
//               ) : (
//                 <div key={i} style={{ padding: "60px", background: "#f0f0f0", color: 'red' }}>
//                   ⚠️ 알 수 없는 컴포넌트: <strong>{comp.type}</strong>
//                 </div>
//               );
//             })
//           ) : (
//             <div style={{ padding: "100px", textAlign: "center" }}>
//               ❌ 페이지 구성 요소가 없습니다
//             </div>
//           )}
//         </AnimatedPage>
//       </AnimatePresence>
//     </main>
//   );
// // }














// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";

// // 컴포넌트 임포트
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpHeader03 from "./components/TpHeader/TpHeader03";
// import TpBanner04 from "./components/TpBanner/TpBanner04";
// import TpSection04 from "./components/TpSection/TpSection04";
// import AnimatedPage from "./components/AnimatedPage";

// // 렌더링할 컴포넌트와 타입을 짝지어주는 맵(Map)
// const componentMap = {
//   배너04: TpBanner04,
//   섹션04: TpSection04,
// };

// // 렌더링할 헤더와 타입을 짝지어주는 맵(Map)
// const headerMap = {
//   헤더02: TpHeader02,
//   헤더03: TpHeader03, // '헤더03' 타입을 TpHeader03 컴포넌트와 연결
// };

// export default function CustomerContent({ pageData }) {
//   const [currentPageIndex, setCurrentPageIndex] = useState(0);
//   // 애니메이션 효과를 위해 페이지 변경 시 key를 업데이트
//   const [pageKey, setPageKey] = useState(0);

//   // 페이지 변경 함수
//   const handleChangePage = (index) => {
//     if (index === currentPageIndex) return;
//     setPageKey((prev) => prev + 1);
//     setCurrentPageIndex(index);
//   };

//   // 현재 페이지에 대한 데이터 (없으면 빈 배열로 초기화)
//   const currentPage = pageData?.pages?.[currentPageIndex] || { components: [] };
//   const isValidComponents =
//     Array.isArray(currentPage.components) && currentPage.components.length > 0;

//   // pageData에서 headerType을 찾아 headerMap에서 해당하는 컴포넌트를 가져옴
//   const HeaderComponent = headerMap[pageData.headerType];

//   return (
//     // 전체 레이아웃
//     <main style={{ background: "#111", color: "#111", margin: 0, padding: 0 }}>
//       {/* 헤더 컴포넌트가 존재할 경우 렌더링 */}
//       {HeaderComponent && (
//         <HeaderComponent
//           isPreview
//           setCurrentPageIndex={handleChangePage}
//           currentPageIndex={currentPageIndex}
//           menuItems={pageData.menuItems || []}
//           logo={pageData.logo}
//         />
//       )}

//       {/* 페이지 전환 애니메이션 */}
//       <AnimatePresence
//         mode="wait"
//         onExitComplete={() => {
//           // 페이지가 사라진 후 스크롤을 맨 위로 이동
//           window.scrollTo({ top: 0 });
//         }}
//       >
//         <AnimatedPage key={pageKey} index={currentPageIndex}>
//           {isValidComponents ? (
//             // 페이지 내부의 컴포넌트들을 순서대로 렌더링
//             currentPage.components.map((comp) => {
//               const Comp = componentMap[comp.type];
//               return Comp ? (
//                 <Comp key={comp.id} {...comp} isPreview />
//               ) : (
//                 // componentMap에 등록되지 않은 컴포넌트일 경우 경고 메시지 표시
//                 <div key={comp.id} style={{ padding: "60px", background: "#f0f0f0", color: 'red' }}>
//                   ⚠️ 알 수 없는 컴포넌트: <strong>{comp.type}</strong>
//                 </div>
//               );
//             })
//           ) : (
//             // 페이지에 구성 요소가 없을 경우 메시지 표시
//             <div style={{ padding: "100px", textAlign: "center", color: "#fff" }}>
//               ❌ 페이지 구성 요소가 없습니다
//             </div>
//           )}
//         </AnimatedPage>
//       </AnimatePresence>
//     </main>
//   );
// }






// //성공함함
// import { useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

// // 컴포넌트 임포트
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpHeader03 from "./components/TpHeader/TpHeader03";
// import TpBanner04 from "./components/TpBanner/TpBanner04";
// import TpSection04 from "./components/TpSection/TpSection04";
// import AnimatedPage from "./components/AnimatedPage";

// // 렌더링할 컴포넌트와 타입을 짝지어주는 맵(Map)
// const componentMap = {
//   배너04: TpBanner04,
//   섹션04: TpSection04,
// };

// // 렌더링할 헤더와 타입을 짝지어주는 맵(Map)
// const headerMap = {
//   헤더02: TpHeader02,
//   헤더03: TpHeader03,
// };

// export default function CustomerContent({ pageData }) {
//   const [pageKey, setPageKey] = useState(0);
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const currentPageIndex = parseInt(searchParams.get("page")) || 0;

//   // 페이지 변경 함수
//   const handleChangePage = (index) => {
//     if (index === currentPageIndex) return;
//     setPageKey((prev) => prev + 1);
//     navigate(`/preview?page=${index}`);
//   };

//   // 현재 페이지에 대한 데이터 (없으면 빈 배열로 초기화)
//   const currentPage = pageData?.pages?.[currentPageIndex] || { components: [] };
//   const isValidComponents =
//     Array.isArray(currentPage.components) && currentPage.components.length > 0;

//   // pageData에서 headerType을 찾아 headerMap에서 해당하는 컴포넌트를 가져옴
//   const HeaderComponent = headerMap[pageData.headerType];

//   return (
//     // 전체 레이아웃
//     <main style={{ background: "#111", color: "#111", margin: 0, padding: 0 }}>
//       {/* 헤더 컴포넌트가 존재할 경우 렌더링 */}
//       {HeaderComponent && (
//         <HeaderComponent
//           isPreview
//           setCurrentPageIndex={handleChangePage}
//           currentPageIndex={currentPageIndex}
//           menuItems={pageData.menuItems || []}
//           logo={pageData.logo}
//         />
//       )}

//       {/* 페이지 전환 애니메이션 */}
//       <AnimatePresence
//         mode="wait"
//         onExitComplete={() => {
//           // 페이지가 사라진 후 스크롤을 맨 위로 이동
//           window.scrollTo({ top: 0 });
//         }}
//       >
//         <AnimatedPage key={pageKey} index={currentPageIndex}>
//           {isValidComponents ? (
//             // 페이지 내부의 컴포넌트들을 순서대로 렌더링
//             currentPage.components.map((comp) => {
//               const Comp = componentMap[comp.type];
//               return Comp ? (
//                 <Comp key={comp.id} {...comp} isPreview />
//               ) : (
//                 // componentMap에 등록되지 않은 컴포넌트일 경우 경고 메시지 표시
//                 <div
//                   key={comp.id}
//                   style={{
//                     padding: "60px",
//                     background: "#f0f0f0",
//                     color: "red",
//                   }}
//                 >
//                   ⚠️ 알 수 없는 컴포넌트: <strong>{comp.type}</strong>
//                 </div>
//               );
//             })
//           ) : (
//             // 페이지에 구성 요소가 없을 경우 메시지 표시
//             <div
//               style={{
//                 padding: "100px",
//                 textAlign: "center",
//                 color: "#fff",
//               }}
//             >
//               ❌ 페이지 구성 요소가 없습니다
//             </div>
//           )}
//         </AnimatedPage>
//       </AnimatePresence>
//     </main>
//   );
// }

























// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

// // 컴포넌트 임포트
// import TpHeader03 from "./components/TpHeader/TpHeader03";
// import TpBanner04 from "./components/TpBanner/TpBanner04";
// // ... 다른 컴포넌트들도 필요에 따라 import ...
// import AnimatedPage from "./components/AnimatedPage";

// // 렌더링할 컴포넌트와 타입을 짝지어주는 맵(Map)
// const componentMap = {
//   배너04: TpBanner04,
//   // ... 다른 컴포넌트들 ...
// };

// // 렌더링할 헤더와 타입을 짝지어주는 맵(Map)
// const headerMap = {
//   헤더03: TpHeader03,
//   // ... 다른 헤더 타입들 ...
// };

// // ✅ [수정] props로 siteData와 currentPageData를 직접 받도록 변경
// function CustomerContent({ siteData, currentPageData }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // App.jsx에서 내려준 props를 바로 사용합니다.
//   const { logo, menuItems, headerType } = siteData;
//   const { components, path } = currentPageData;

//   if (!currentPageData) {
//     return <div>페이지 데이터가 없습니다.</div>;
//   }

//   // pageData에서 headerType을 찾아 headerMap에서 해당하는 컴포넌트를 가져옴
//   const HeaderComponent = headerMap[headerType];

//   // 헤더 메뉴 클릭 시 페이지를 이동시키는 함수
//   const handleNavigate = (pagePath) => {
//     // 현재 경로와 목표 경로가 다를 때만 이동을 실행합니다.
//     if (location.pathname !== pagePath) {
//       navigate(pagePath);
//     }
//   };

//   return (
//     <main style={{ background: "#111", color: "#111", margin: 0, padding: 0 }}>
//       {HeaderComponent && (
//         <HeaderComponent
//           logo={logo}
//           menuItems={menuItems}
//           isPreview={true}
//           onPreviewNavigate={handleNavigate}
//         />
//       )}

//       {/* 페이지 전환 애니메이션을 위해 현재 페이지의 고유 경로(path)를 key로 사용 */}
//       <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
//         <AnimatedPage key={path}>
//           {components && components.length > 0 ? (
//             components.map((comp) => {
//               const Component = componentMap[comp.type];
//               return Comp ? (
//                 <Component key={comp.id} {...comp} isPreview />
//               ) : (
//                 <div key={comp.id} style={{ padding: "60px", background: "#f0f0f0", color: 'red' }}>
//                   ⚠️ 알 수 없는 컴포넌트: <strong>{comp.type}</strong>
//                 </div>
//               );
//             })
//           ) : (
//             <div style={{ padding: "100px", textAlign: "center", color: "#fff" }}>
//               ❌ 페이지 구성 요소가 없습니다
//             </div>
//           )}
//         </AnimatedPage>
//       </AnimatePresence>
//     </main>
//   );
// }

// export default CustomerContent;

// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import { useNavigate, useSearchParams } from "react-router-dom";

// // 컴포넌트 임포트
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpHeader03 from "./components/TpHeader/TpHeader03";
// import TpBanner04 from "./components/TpBanner/TpBanner04";
// import TpSection04 from "./components/TpSection/TpSection04";
// import AnimatedPage from "./components/AnimatedPage";

// const componentMap = {
//   배너04: TpBanner04,
//   섹션04: TpSection04,
// };

// const headerMap = {
//   헤더02: TpHeader02,
//   헤더03: TpHeader03,
// };

// export default function CustomerContent({ pageData }) {
//   const [pageKey, setPageKey] = useState(0);
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   // URL에서 `page` 파라미터 값을 읽어 현재 페이지 인덱스로 사용
//   const currentPageIndex = parseInt(searchParams.get("page")) || 0;

//   // 페이지 변경 시 URL을 업데이트하는 함수
//   const handleChangePage = (index) => {
//     if (index === currentPageIndex) return;
//     setPageKey((prev) => prev + 1);
//     navigate(`/preview?page=${index}`);
//   };

//   const currentPage = pageData?.pages?.[currentPageIndex] || { components: [] };
//   const isValidComponents =
//     Array.isArray(currentPage.components) && currentPage.components.length > 0;

//   const HeaderComponent = headerMap[pageData.headerType];

//   return (
//     <main style={{ background: "#111", margin: 0, padding: 0 }}>
//       {HeaderComponent && (
//         <HeaderComponent
//           isPreview
//           setCurrentPageIndex={handleChangePage}
//           currentPageIndex={currentPageIndex}
//           menuItems={pageData.menuItems || []}
//           logo={pageData.logo}
//         />
//       )}

//       <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0 })}>
//         <AnimatedPage key={pageKey} index={currentPageIndex}>
//           {isValidComponents ? (
//             currentPage.components.map((comp) => {
//               const Component = componentMap[comp.type];
//               return Component ? (
//                 <Component key={comp.id} {...comp} isPreview />
//               ) : (
//                 <div key={comp.id} style={{ padding: "60px", background: "#f0f0f0", color: "red" }}>
//                   ⚠️ 알 수 없는 컴포넌트: <strong>{comp.type}</strong>
//                 </div>
//               );
//             })
//           ) : (
//             <div style={{ padding: "100px", textAlign: "center", color: "#fff" }}>
//               ❌ 페이지 구성 요소가 없습니다
//             </div>
//           )}
//         </AnimatedPage>
//       </AnimatePresence>
//     </main>
//   );
// }
// import { useNavigate } from "react-router-dom";
// import AnimatedPage from "./components/AnimatedPage";

// // 컴포넌트 임포트
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpHeader03 from "./components/TpHeader/TpHeader03";
// import TpBanner04 from "./components/TpBanner/TpBanner04";
// import TpSection04 from "./components/TpSection/TpSection04";

// const componentMap = {
//   배너04: TpBanner04,
//   섹션04: TpSection04,
// };

// const headerMap = {
//   헤더02: TpHeader02,
//   헤더03: TpHeader03,
// };

// export default function CustomerContent({ siteData, currentPageData }) {
//   const navigate = useNavigate();

//   // 헤더 메뉴 클릭 시 해당 경로로 이동시키는 함수
//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   const { components, path: currentPath } = currentPageData;
//   const isValidComponents =
//     Array.isArray(components) && components.length > 0;
//   const HeaderComponent = headerMap[siteData.headerType];

//   return (
//     <AnimatedPage key={currentPath}>
//       <main style={{ background: "#111", margin: 0, padding: 0, minHeight: "100vh" }}>
//         {HeaderComponent && (
//           <HeaderComponent
//             isPreview
//             onNavigate={handleNavigate} // 페이지 이동 함수 전달
//             menuItems={siteData.menuItems || []} // 전체 메뉴 목록 전달
//             activePath={currentPath} // 현재 활성화된 페이지 경로 전달
//             logo={siteData.logo}
//           />
//         )}
//         {isValidComponents ? (
//           components.map((comp) => {
//             const Component = componentMap[comp.type];
//             return Component ? (
//               <Component key={comp.id} {...comp} isPreview />
//             ) : (
//               <div key={comp.id} style={{ padding: "60px", background: "#f0f0f0", color: "red" }}>
//                 ⚠️ 알 수 없는 컴포넌트: <strong>{comp.type}</strong>
//               </div>
//             );
//           })
//         ) : (
//           <div style={{ padding: "100px", textAlign: "center", color: "#fff" }}>
//             ❌ 페이지 구성 요소가 없습니다
//           </div>
//         )}
//       </main>
//     </AnimatedPage>
//   );
// }


import AnimatedPage from "./components/AnimatedPage";
import TpBanner04 from "./components/TpBanner/TpBanner04";
import TpSection04 from "./components/TpSection/TpSection04";

const componentMap = {
  배너04: TpBanner04,
  섹션04: TpSection04,
};

export default function CustomerContent({ currentPageData }) {
  const { components, path: currentPath } = currentPageData;
  const isValidComponents =
    Array.isArray(components) && components.length > 0;

  return (
    <AnimatedPage key={currentPath}>
      {isValidComponents ? (
        components.map((comp) => {
          const Component = componentMap[comp.type];
          return Component ? (
            <Component key={comp.id} {...comp} isPreview />
          ) : (
            <div key={comp.id} style={{ padding: "60px", background: "#f0f0f0", color: "red" }}>
              ⚠️ 알 수 없는 컴포넌트: <strong>{comp.type}</strong>
            </div>
          );
        })
      ) : (
        <div style={{ padding: "100px", textAlign: "center", color: "#fff" }}>
          ❌ 페이지 구성 요소가 없습니다
        </div>
      )}
    </AnimatedPage>
  );
}

































// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";

// // 컴포넌트 임포트
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpHeader03 from "./components/TpHeader/TpHeader03";
// import TpBanner04 from "./components/TpBanner/TpBanner04";
// import TpSection04 from "./components/TpSection/TpSection04";
// import AnimatedPage from "./components/AnimatedPage";

// // 렌더링할 컴포넌트와 타입을 짝지어주는 맵(Map)
// const componentMap = {
//   배너04: TpBanner04,
//   섹션04: TpSection04,
// };

// // 렌더링할 헤더와 타입을 짝지어주는 맵(Map)
// const headerMap = {
//   헤더02: TpHeader02,
//   헤더03: TpHeader03,
// };

// export default function CustomerContent({ pageData, currentPageIndex, onPageChange }) {
//   const currentPage = pageData?.pages?.[currentPageIndex] || { components: [] };
//   const isValidComponents =
//     Array.isArray(currentPage.components) && currentPage.components.length > 0;

//   const HeaderComponent = headerMap[pageData.headerType];

//   return (
//     <main style={{ background: "#111", color: "#111", margin: 0, padding: 0 }}>
//       {HeaderComponent && (
//         <HeaderComponent
//           isPreview
//           setCurrentPageIndex={onPageChange}
//           currentPageIndex={currentPageIndex}
//           menuItems={pageData.menuItems || []}
//           logo={pageData.logo}
//           pages={pageData.pages || []}
//         />
//       )}

//       <AnimatePresence
//         mode="wait"
//         onExitComplete={() => {
//           window.scrollTo({ top: 0 });
//         }}
//       >
//         <AnimatedPage key={currentPageIndex} index={currentPageIndex}>
//           {isValidComponents ? (
//             currentPage.components.map((comp) => {
//               const Comp = componentMap[comp.type];
//               return Comp ? (
//                 <Comp key={comp.id} {...comp} isPreview />
//               ) : (
//                 <div key={comp.id} style={{ padding: "60px", background: "#f0f0f0", color: 'red' }}>
//                   ⚠️ 알 수 없는 컴포넌트: <strong>{comp.type}</strong>
//                 </div>
//               );
//             })
//           ) : (
//             <div style={{ padding: "100px", textAlign: "center", color: "#fff" }}>
//               ❌ 페이지 구성 요소가 없습니다
//             </div>
//           )}
//         </AnimatedPage>
//       </AnimatePresence>
//     </main>
//   );
// }







// import { useEffect, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpHeader03 from "./components/TpHeader/TpHeader03";
// import TpBanner04 from "./components/TpBanner/TpBanner04";
// import TpSection04 from "./components/TpSection/TpSection04";
// import { AnimatePresence } from "framer-motion";
// import AnimatedPage from "./components/AnimatedPage";

// const componentMap = {
//   배너04: TpBanner04,
//   섹션04: TpSection04,
//   헤더03: TpHeader03,
// };

// const headerMap = {
//   헤더02: TpHeader02,
//   헤더03: TpHeader03,
// };

// export default function CustomerContent({ pageData, currentPageIndex }) {
//   const [pageKey, setPageKey] = useState(0);
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const currentIdx = parseInt(searchParams.get("page")) || currentPageIndex || 0;

//   const handleChangePage = (index) => {
//     if (index === currentIdx) return;
//     setPageKey((prev) => prev + 1);
//     navigate(`/preview?page=${index}`);
//   };

//   const currentPage = pageData?.pages?.[currentIdx] || { components: [] };
//   const isValidComponents = Array.isArray(currentPage.components) && currentPage.components.length > 0;
//   const HeaderComponent = headerMap[pageData.headerType || "헤더02"];

//   return (
//     <main style={{ background: "#111", color: "#111", margin: 0, padding: 0 }}>
//       {HeaderComponent && (
//         <HeaderComponent
//           isPreview
//           setCurrentPageIndex={handleChangePage}
//           currentPageIndex={currentIdx}
//           menuItems={pageData.menuItems || []}
//           logo={pageData.logo}
//         />
//       )}

//       <AnimatePresence
//         mode="wait"
//         onExitComplete={() => {
//           window.scrollTo({ top: 0 });
//         }}
//       >
//         <AnimatedPage key={pageKey} index={currentIdx}>
//           {isValidComponents ? (
//             currentPage.components.map((comp, i) => {
//               const Comp = componentMap[comp.type];
//               return Comp ? (
//                 <Comp key={comp.id || i} {...comp} isPreview />
//               ) : (
//                 <div key={i} style={{ padding: "60px", background: "#f0f0f0", color: "red" }}>
//                   ⚠️ 알 수 없는 컴포넌트: <strong>{comp.type}</strong>
//                 </div>
//               );
//             })
//           ) : (
//             <div style={{ padding: "100px", textAlign: "center" }}>
//               ❌ 페이지 구성 요소가 없습니다
//             </div>
//           )}
//         </AnimatedPage>
//       </AnimatePresence>
//     </main>
//   );
// }
