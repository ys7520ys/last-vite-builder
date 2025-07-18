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






import { useState } from "react";
import TpHeader02 from "./components/TpHeader/TpHeader02";
import TpHeader03 from "./components/TpHeader/TpHeader03"; // [추가]
import TpBanner04 from "./components/TpBanner/TpBanner04";
import TpSection04 from "./components/TpSection/TpSection04";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./components/AnimatedPage";

// ✅ 등록된 컴포넌트 매핑
const componentMap = {
  배너04: TpBanner04,
  섹션04: TpSection04,
  헤더03: TpHeader03, // ✅ 이거 꼭 필요!
};

// ✅ 등록된 헤더 타입 매핑
const headerMap = {
  헤더02: TpHeader02,
  헤더03: TpHeader03, // [추가]
};

export default function CustomerContent({ pageData }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [pageKey, setPageKey] = useState(0);

  const handleChangePage = (index) => {
    if (index === currentPageIndex) return;
    setPageKey((prev) => prev + 1);
    setCurrentPageIndex(index);
  };

  const currentPage = pageData?.pages?.[currentPageIndex] || { components: [] };
  const isValidComponents =
    Array.isArray(currentPage.components) && currentPage.components.length > 0;

  // pageData.headerType 값 (예: "헤더03")에 따라 올바른 헤더 컴포넌트를 선택합니다.
  const HeaderComponent = headerMap[pageData.headerType || '헤더02']; // 기본값 '헤더02'

  return (
    <main style={{ background: "#111", color: "#111", margin: 0, padding: 0 }}>
      {HeaderComponent && (
        <HeaderComponent
          isPreview
          setCurrentPageIndex={handleChangePage}
          currentPageIndex={currentPageIndex}
          menuItems={pageData.menuItems || []}
          logo={pageData.logo}
        />
      )}

      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        <AnimatedPage key={pageKey} index={currentPageIndex}>
          {isValidComponents ? (
            currentPage.components.map((comp, i) => {
              const Comp = componentMap[comp.type];
              return Comp ? (
                <Comp key={comp.id || i} {...comp} isPreview />
              ) : (
                <div key={i} style={{ padding: "60px", background: "#f0f0f0", color: 'red' }}>
                  ⚠️ 알 수 없는 컴포넌트: <strong>{comp.type}</strong>
                </div>
              );
            })
          ) : (
            <div style={{ padding: "100px", textAlign: "center" }}>
              ❌ 페이지 구성 요소가 없습니다
            </div>
          )}
        </AnimatedPage>
      </AnimatePresence>
    </main>
  );
}








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
