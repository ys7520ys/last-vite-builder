// import React from "react";
// import styles from "./TpHeader02.module.scss";

// const TpHeader02 = ({
//   menuItems = [],
//   isPreview = false,
//   currentPageIndex = 0,
//   setCurrentPageIndex = () => {}
// }) => {
//   return (
//     <header className={styles.tpHeader02}>
//       <nav className={styles.tpHeader02__nav}>
//         <ul className={styles.tpHeader02__navLists}>
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <button
//                 className={`${styles.linkButton} ${currentPageIndex === index ? styles.active : ""}`}
//                 onClick={() => setCurrentPageIndex(index)}
//               >
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default TpHeader02;






// import React from "react";
// import styles from "./TpHeader02.module.scss";

// const TpHeader02 = ({
//   menuItems = [],
//   isPreview = false,
//   currentPageIndex = 0,
//   setCurrentPageIndex = () => {},
// }) => {
//   return (
//     <header className={styles.tpHeader02}>
//       <nav className={styles.tpHeader02__nav}>
//         <ul className={styles.tpHeader02__navLists}>
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <button
//                 className={`${styles.linkButton} ${
//                   currentPageIndex === index ? styles.active : ""
//                 }`}
//                 onClick={() => setCurrentPageIndex(index)}
//               >
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default TpHeader02;












// import React, { useEffect, useState } from "react";
// import styles from "./TpHeader02.module.scss";
// import { db } from "@/lib/firebase";
// import { collection, query, where, getDocs } from "firebase/firestore";

// const TpHeader02 = ({
//   menuItems: defaultMenuItems = [],
//   isPreview = false,
//   currentPageIndex = 0,
//   setCurrentPageIndex = () => {},
// }) => {
//   const [menuItems, setMenuItems] = useState(defaultMenuItems);

//   useEffect(() => {
//     const domain = window.location.hostname; // 예: abc.droppy.kr

//     const getMenu = async () => {
//       try {
//         const q = query(collection(db, "orders"), where("domain", "==", domain));
//         const snap = await getDocs(q);
//         if (!snap.empty) {
//           const data = snap.docs[0].data();
//           setMenuItems(data.menuItems || []);
//         }
//       } catch (error) {
//         console.error("메뉴 데이터를 불러오는 중 오류 발생:", error);
//       }
//     };

//     getMenu();
//   }, []);

//   return (
//     <header className={styles.tpHeader02}>
//       <nav className={styles.tpHeader02__nav}>
//         <ul className={styles.tpHeader02__navLists}>
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <button
//                 className={`${styles.linkButton} ${
//                   currentPageIndex === index ? styles.active : ""
//                 }`}
//                 onClick={() => setCurrentPageIndex(index)}
//               >
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default TpHeader02;








// import React from "react";
// import styles from "./TpHeader02.module.scss";

// const TpHeader02 = ({
//   menuItems = [],
//   isPreview = false,
//   currentPageIndex = 0,
//   setCurrentPageIndex = () => {},
// }) => {
//   return (
//     <header className={styles.tpHeader02}>
//       <nav className={styles.tpHeader02__nav}>
//         <ul className={styles.tpHeader02__navLists}>
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <button
//                 className={`${styles.linkButton} ${
//                   currentPageIndex === index ? styles.active : ""
//                 }`}
//                 onClick={() => setCurrentPageIndex(index)}
//               >
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default TpHeader02;



// import React, { useState, useEffect } from "react";
// import styles from "./TpHeader02.module.scss";

// const TpHeader02 = ({
//   menuItems = [],
//   isPreview = false,
//   currentPageIndex = 0,
//   setCurrentPageIndex = () => {},
// }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const isNowMobile = window.innerWidth <= 768;
//       setIsMobile(isNowMobile);

//       // ✅ PC로 전환되면 메뉴 자동 닫기
//       if (!isNowMobile) {
//         setIsMenuOpen(false);
//       }
//     };

//     handleResize(); // 처음 실행
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <header className={styles.tpHeader02}>
//       <nav className={styles.tpHeader02__nav}>
//         {/* 햄버거 버튼 */}
//         {isMobile && (
//           <button
//             className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="메뉴 열기"
//             aria-expanded={isMenuOpen}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         )}

//         {/* 네비게이션 메뉴 */}
//         <ul
//           className={`${styles.tpHeader02__navLists} ${
//             isMobile && isMenuOpen ? styles.open : ""
//           }`}
//           aria-hidden={isMobile && !isMenuOpen}
//         >
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               <button
//                 className={`${styles.linkButton} ${
//                   currentPageIndex === index ? styles.active : ""
//                 }`}
//                 onClick={() => {
//                   setCurrentPageIndex(index);
//                   if (isMobile) setIsMenuOpen(false);
//                 }}
//                 tabIndex={
//                   !isMobile || (isMobile && isMenuOpen) ? 0 : -1
//                 }
//               >
//                 {item.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default TpHeader02;






// import React, { useState, useEffect } from "react";
// import styles from "./TpHeader02.module.scss";

// const TpHeader02 = ({
//   menuItems = [],
//   logo = {
//     type: "text", // "text" or "image"
//     text: "회사명",
//     fontSize: 24,
//     fontWeight: 700,
//     fontFamily: "Pretendard",
//     imageUrl: "", // image 타입일 경우 사용
//   },
//   isPreview = false,
//   currentPageIndex = 0,
//   setCurrentPageIndex = () => {},
// }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const isNowMobile = window.innerWidth <= 768;
//       setIsMobile(isNowMobile);
//       if (!isNowMobile) setIsMenuOpen(false); // PC 전환 시 메뉴 닫기
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <header className={styles.tpHeader02}>
//       <div className={styles.tpHeader02__container}>
//         {/* ✅ 로고 영역 */}
//         <div
//           className={styles.tpHeader02__logo}
//           style={{
//             fontFamily: logo.fontFamily,
//             fontSize: logo.fontSize,
//             fontWeight: logo.fontWeight,
//           }}
//         >
//           {logo.type === "text" ? (
//             <span>{logo.text}</span>
//           ) : (
//             <img src={logo.imageUrl} alt="logo" />
//           )}
//         </div>

//         {/* ✅ 네비게이션 */}
//         <nav className={styles.tpHeader02__nav}>
//           {isMobile && (
//             <button
//               className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="메뉴 열기"
//               aria-expanded={isMenuOpen}
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
//           )}

//           <ul
//             className={`${styles.tpHeader02__navLists} ${
//               isMobile && isMenuOpen ? styles.open : ""
//             }`}
//             aria-hidden={isMobile && !isMenuOpen}
//           >
//             {menuItems.map((item, index) => (
//               <li key={index}>
//                 <button
//                   className={`${styles.linkButton} ${
//                     currentPageIndex === index ? styles.active : ""
//                   }`}
//                   onClick={() => {
//                     setCurrentPageIndex(index);
//                     if (isMobile) setIsMenuOpen(false);
//                   }}
//                   tabIndex={!isMobile || (isMobile && isMenuOpen) ? 0 : -1}
//                 >
//                   {item.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default TpHeader02;





import React, { useState, useEffect } from "react";
import styles from "./TpHeader02.module.scss";

const TpHeader02 = ({
  menuItems = [],
  logo, // pageData.logo가 그대로 전달됩니다.
  isPreview = false,
  currentPageIndex = 0,
  setCurrentPageIndex = () => {},
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile) setIsMenuOpen(false); // PC 전환 시 메뉴 닫기
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 로고를 렌더링하는 함수
  const renderLogo = () => {
    // 로고 데이터가 없거나, 있더라도 내용이 없으면 기본 텍스트를 표시합니다.
    if (!logo || !logo.text) {
        return <span style={{ fontFamily: 'Pretendard', fontSize: '24px', fontWeight: 700 }}>회사명</span>;
    }
    
    // 로고 타입에 따라 이미지를 보여주거나, 스타일이 적용된 텍스트를 보여줍니다.
    if (logo.type === "image" && logo.imageUrl) {
        return <img src={logo.imageUrl} alt={logo.text} style={{ height: '36px', objectFit: 'contain' }} />;
    }
    
    return (
        <span style={{ fontFamily: logo.fontFamily, fontSize: logo.fontSize, fontWeight: logo.fontWeight }}>
            {logo.text}
        </span>
    );
  };

  return (
    <header className={styles.tpHeader02}>
      <div className={styles.tpHeader02__container}>
        {/* ✅ 로고 영역 */}
        <div className={styles.tpHeader02__logo}>
          {renderLogo()}
        </div>

        {/* ✅ 네비게이션 */}
        <nav className={styles.tpHeader02__nav}>
          {isMobile && (
            <button
              className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴 열기"
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}

          <ul
            className={`${styles.tpHeader02__navLists} ${
              isMobile && isMenuOpen ? styles.open : ""
            }`}
            aria-hidden={isMobile && !isMenuOpen}
          >
            {(Array.isArray(menuItems) ? menuItems : []).map((item, index) => (
              <li key={item?.id || index}>
                <button
                  className={`${styles.linkButton} ${
                    currentPageIndex === index ? styles.active : ""
                  }`}
                  onClick={() => {
                    setCurrentPageIndex(index);
                    if (isMobile) setIsMenuOpen(false);
                  }}
                  tabIndex={!isMobile || (isMobile && isMenuOpen) ? 0 : -1}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TpHeader02;