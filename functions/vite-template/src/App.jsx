// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/data.json")
//       .then((res) => res.json())
//       .then(setData);
//   }, []);

//   if (!data) return <div>로딩 중...</div>;

//   return (
//     <div>
//       <h1>{data.shopName}</h1>
//       <p>{data.description}</p>
//       <img src={data.bannerImage} alt="배너" style={{ width: "100%" }} />
//       <ul>
//         {data.products.map((item, idx) => (
//           <li key={idx}>
//             <h3>{item.name}</h3>
//             <img src={item.image} alt={item.name} width="150" />
//             <p>{item.price.toLocaleString()}원</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// // 추가적인 App.jsx의 수정한 형태 for firebaseDatabase + firebseStorage
// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/data.json")
//       .then((res) => res.json())
//       .then(setData);
//   }, []);

//   if (!data) return <div>로딩 중...</div>;

//   return (
//     <div>
//       <h1>{data.shopName}</h1>
//       <p>{data.description}</p>
//       <img src={data.bannerImage} alt="배너" style={{ width: "100%" }} />
//       <ul>
//         {data.products.map((item, idx) => (
//           <li key={idx}>
//             <h3>{item.name}</h3>
//             <img src={item.image} alt={item.name} width="150" />
//             <p>{item.price.toLocaleString()}원</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;






// // 마지막 수정본 
// import { useEffect, useState } from "react";
// import CustomerContent from "./CustomerContent";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/data.json")
//       .then((res) => res.json())
//       .then(setData);
//   }, []);

//   if (!data) return <div>로딩 중...</div>;

//   return <CustomerContent pageData={data} />;
// }

// export default App;








// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, useSearchParams, Navigate } from "react-router-dom";
// import CustomerContent from "./CustomerContent";

// function CustomerPageWrapper({ data }) {
//   const [searchParams] = useSearchParams();
//   const pageIndex = parseInt(searchParams.get("page")) || 0;

//   return <CustomerContent pageData={data} currentPageIndex={pageIndex} />;
// }

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/data.json")
//       .then((res) => res.json())
//       .then(setData);
//   }, []);

//   if (!data) return <div>로딩 중...</div>;

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/preview?page=0" />} />
//         <Route path="/preview" element={<CustomerPageWrapper data={data} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { useEffect, useState } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import CustomerContent from "./CustomerContent";

// // CustomerContent에서 URL 파라미터를 직접 처리하므로,
// // 이 Wrapper 컴포넌트는 더 이상 페이지 인덱스를 전달할 필요가 없습니다.
// function CustomerPageWrapper({ data }) {
//   return <CustomerContent pageData={data} />;
// }

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // data.json에서 페이지 데이터를 가져옵니다.
//     fetch("/data.json")
//       .then((res) => res.json())
//       .then(setData);
//   }, []);

//   // 데이터 로딩 중일 때 표시할 UI
//   if (!data) return <div>로딩 중...</div>;

//   // 라우터 설정
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* 기본 경로(/)로 접근 시 '/preview?page=0'으로 리디렉션 */}
//         <Route path="/" element={<Navigate to="/preview?page=0" />} />
//         {/* 미리보기 페이지 경로 */}
//         <Route path="/preview" element={<CustomerPageWrapper data={data} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;







// 네이버로그인 라우터해결용용
// //성공함함
// import { useEffect, useState } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import CustomerContent from "./CustomerContent";

// // CustomerContent에서 URL 파라미터를 직접 처리하므로,
// // 이 Wrapper 컴포넌트는 더 이상 페이지 인덱스를 전달할 필요가 없습니다.
// function CustomerPageWrapper({ data }) {
//   return <CustomerContent pageData={data} />;
// }

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // data.json에서 페이지 데이터를 가져옵니다.
//     fetch("/data.json")
//       .then((res) => res.json())
//       .then(setData);
//   }, []);

//   // 데이터 로딩 중일 때 표시할 UI
//   if (!data) return <div>로딩 중...</div>;

//   // 라우터 설정
//   return (
//     <BrowserRouter>
//       <Routes
//         future={{
//           v7_startTransition: true,
//           v7_relativeSplatPath: true,
//         }}
//       >
//         {/* 기본 경로(/)로 접근 시 '/preview?page=0'으로 리디렉션 */}
//         <Route path="/" element={<Navigate to="/preview?page=0" />} />
//         {/* 미리보기 페이지 경로 */}
//         <Route path="/preview" element={<CustomerPageWrapper data={data} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
















// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import CustomerContent from "./CustomerContent";
// import "./App.css";

// // CustomerContent에 pageData를 전달하는 역할
// function CustomerPageWrapper({ pageData }) {
//   return <CustomerContent pageData={pageData} />;
// }

// function App() {
//   const [pageData, setPageData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // data.json을 비동기적으로 가져옵니다.
//         const response = await fetch("/data.json");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setPageData(data);
//       } catch (e) {
//         console.error("Failed to fetch page data:", e);
//         setError(e.message);
//       }
//     };

//     fetchData();
//   }, []);

//   // 데이터 로딩 중 에러 발생 시
//   if (error) {
//     return <div>Error loading page data: {error}</div>;
//   }

//   // 데이터 로딩 중일 때 (이 코드가 없어서 이전 오류 발생)
//   if (!pageData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* 기본 경로(/)로 오면 '/preview?page=0'으로 자동 이동 */}
//         <Route path="/" element={<Navigate to="/preview?page=0" replace />} />
//         {/* 미리보기 페이지 */}
//         <Route
//           path="/preview"
//           element={<CustomerPageWrapper pageData={pageData} />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// // export default App;
// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import CustomerContent from "./CustomerContent";
// import "./App.css";

// // 라우팅과 애니메이션을 관리하는 컴포넌트
// function ContentSwitcher({ pageData }) {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0 })}>
//       {/* URL 경로가 바뀔 때마다 애니메이션이 동작하도록 key 설정 */}
//       <Routes location={location} key={location.pathname}>
//         {/* data.json에 있는 페이지 목록으로 동적 라우트 생성 */}
//         {pageData.pages.map((page) => (
//           <Route
//             key={page.id || page.path}
//             path={page.path}
//             element={
//               <CustomerContent
//                 siteData={pageData} // 헤더, 메뉴 등 전체 사이트 정보 전달
//                 currentPageData={page} // 현재 페이지에 해당하는 정보만 전달
//               />
//             }
//           />
//         ))}
//       </Routes>
//     </AnimatePresence>
//   );
// }

// function App() {
//   const [pageData, setPageData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/data.json");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setPageData(data);
//       } catch (e) {
//         console.error("Failed to fetch page data:", e);
//         setError(e.message);
//       }
//     };
//     fetchData();
//   }, []);

//   if (error) return <div>Error loading page data: {error}</div>;
//   if (!pageData) return <div>Loading...</div>;

//   return (
//     <BrowserRouter>
//       <ContentSwitcher pageData={pageData} />
//     </BrowserRouter>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import CustomerContent from "./CustomerContent";
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpHeader03 from "./components/TpHeader/TpHeader03";
// import "./App.css";

// const headerMap = {
//   헤더02: TpHeader02,
//   헤더03: TpHeader03,
// };

// // 페이지 내용만 렌더링하고 애니메이션을 적용하는 컴포넌트
// function PageRenderer({ pageData }) {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0 })}>
//       <Routes location={location} key={location.pathname}>
//         {pageData.pages.map((page) => (
//           <Route
//             key={page.id || page.path}
//             path={page.path}
//             element={<CustomerContent currentPageData={page} />}
//           />
//         ))}
//       </Routes>
//     </AnimatePresence>
//   );
// }

// // 헤더와 페이지 컨텐츠를 포함하는 전체 레이아웃 컴포넌트
// function MainLayout({ pageData }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   const HeaderComponent = headerMap[pageData.headerType];

//   return (
//     <main style={{ background: "#111", margin: 0, padding: 0, minHeight: "100vh" }}>
//       {/* 헤더는 여기서 한 번만 렌더링됩니다. */}
//       {HeaderComponent && (
//         <HeaderComponent
//           isPreview
//           onNavigate={handleNavigate}
//           menuItems={pageData.menuItems || []}
//           activePath={location.pathname}
//           logo={pageData.logo}
//         />
//       )}
//       {/* 페이지 내용만 PageRenderer에서 전환됩니다. */}
//       <PageRenderer pageData={pageData} />
//     </main>
//   );
// }

// function App() {
//   const [pageData, setPageData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/data.json");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setPageData(data);
//       } catch (e) {
//         console.error("Failed to fetch page data:", e);
//         setError(e.message);
//       }
//     };
//     fetchData();
//   }, []);

//   if (error) return <div>Error loading page data: {error}</div>;
//   if (!pageData) return <div>Loading...</div>;
  
//   if (!pageData.pages || pageData.pages.length === 0) {
//     return <div>페이지 데이터가 없습니다.</div>;
//   }

//   return (
//     <BrowserRouter>
//       <MainLayout pageData={pageData} />
//     </BrowserRouter>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import CustomerContent from "./CustomerContent";
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpHeader03 from "./components/TpHeader/TpHeader03";
// import "./App.css";

// const headerMap = {
//   헤더02: TpHeader02,
//   헤더03: TpHeader03,
// };

// // 페이지 내용만 렌더링하고 애니메이션을 적용하는 컴포넌트
// function PageRenderer({ pageData }) {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0 })}>
//       <Routes location={location} key={location.pathname}>
//         {pageData.pages.map((page) => (
//           <Route
//             key={page.id || page.path}
//             path={page.path}
//             element={<CustomerContent currentPageData={page} />}
//           />
//         ))}
//       </Routes>
//     </AnimatePresence>
//   );
// }

// // 헤더와 페이지 컨텐츠를 포함하는 전체 레이아웃 컴포넌트
// function MainLayout({ pageData }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   const HeaderComponent = headerMap[pageData.headerType];

//   return (
//     <main style={{
//       background: "#111",
//       margin: 0,
//       padding: 0,
//       minHeight: "100vh",
//       display: "flex", // Flexbox 레이아웃 적용
//       flexDirection: "column" // 세로 방향으로 아이템 정렬
//     }}>
//       {/* 헤더는 고정된 높이를 가집니다. */}
//       {HeaderComponent && (
//         <HeaderComponent
//           isPreview
//           onNavigate={handleNavigate}
//           menuItems={pageData.menuItems || []}
//           activePath={location.pathname}
//           logo={pageData.logo}
//         />
//       )}
//       {/* 이 div가 남은 공간을 모두 채웁니다. (flex: 1) */}
//       <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//         <PageRenderer pageData={pageData} />
//       </div>
//     </main>
//   );
// }

// function App() {
//   const [pageData, setPageData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/data.json");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setPageData(data);
//       } catch (e) {
//         console.error("Failed to fetch page data:", e);
//         setError(e.message);
//       }
//     };
//     fetchData();
//   }, []);

//   if (error) return <div>Error loading page data: {error}</div>;
//   if (!pageData) return <div>Loading...</div>;
  
//   if (!pageData.pages || pageData.pages.length === 0) {
//     return <div>페이지 데이터가 없습니다.</div>;
//   }

//   return (
//     <BrowserRouter>
//       <MainLayout pageData={pageData} />
//     </BrowserRouter>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import CustomerContent from "./CustomerContent";
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpHeader03 from "./components/TpHeader/TpHeader03";
// import "./App.css";

// const headerMap = {
//   헤더02: TpHeader02,
//   헤더03: TpHeader03,
// };

// // 페이지 내용만 렌더링하고 애니메이션을 적용하는 컴포넌트
// function PageRenderer({ pageData }) {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0 })}>
//       <Routes location={location} key={location.pathname}>
//         {pageData.pages.map((page) => (
//           <Route
//             key={page.id || page.path}
//             path={page.path}
//             element={<CustomerContent currentPageData={page} />}
//           />
//         ))}
//       </Routes>
//     </AnimatePresence>
//   );
// }

// // 헤더와 페이지 컨텐츠를 포함하는 전체 레이아웃 컴포넌트
// function MainLayout({ pageData }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   const HeaderComponent = headerMap[pageData.headerType];

//   return (
//     // ✅ 최상위 태그를 <div>로 변경하고, 레이아웃 스타일을 여기로 이동
//     <div style={{
//       background: "#111",
//       minHeight: "100vh",
//       display: "flex",
//       flexDirection: "column"
//     }}>
//       {/* ✅ HeaderComponent가 <main>의 형제가 됨 */}
//       {HeaderComponent && (
//         <HeaderComponent
//           isPreview
//           onNavigate={handleNavigate}
//           menuItems={pageData.menuItems || []}
//           activePath={location.pathname}
//           logo={pageData.logo}
//         />
//       )}
//       {/* ✅ <main> 태그가 페이지 컨텐츠만 감싸고, 남은 공간을 채움 */}
//       <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//         <PageRenderer pageData={pageData} />
//       </main>
//     </div>
//   );
// }

// function App() {
//   const [pageData, setPageData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/data.json");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setPageData(data);
//       } catch (e) {
//         console.error("Failed to fetch page data:", e);
//         setError(e.message);
//       }
//     };
//     fetchData();
//   }, []);

//   if (error) return <div>Error loading page data: {error}</div>;
//   if (!pageData) return <div>Loading...</div>;
  
//   if (!pageData.pages || pageData.pages.length === 0) {
//     return <div>페이지 데이터가 없습니다.</div>;
//   }

//   return (
//     <BrowserRouter>
//       <MainLayout pageData={pageData} />
//     </BrowserRouter>
//   );
// }

// export default App;


// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import CustomerContent from "./CustomerContent";
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpHeader03 from "./components/TpHeader/TpHeader03";
// import "./App.css";

// const headerMap = {
//   헤더02: TpHeader02,
//   헤더03: TpHeader03,
// };

// function PageRenderer({ pageData }) {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0 })}>
//       <Routes location={location} key={location.pathname}>
//         {pageData.pages.map((page) => (
//           <Route
//             key={page.id || page.path}
//             path={page.path}
//             element={<CustomerContent currentPageData={page} />}
//           />
//         ))}
//       </Routes>
//     </AnimatePresence>
//   );
// }

// function MainLayout({ pageData }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   const HeaderComponent = headerMap[pageData.headerType];

//   return (
//     <div style={{
//       background: "#111",
//       minHeight: "100vh",
//       display: "flex",
//       flexDirection: "column"
//     }}>
//       {HeaderComponent && (
//         <HeaderComponent
//           isPreview
//           onNavigate={handleNavigate}
//           menuItems={pageData.menuItems || []}
//           activePath={location.pathname}
//           logo={pageData.logo}
//         />
//       )}
//       <main style={{ flex: 1, display: 'flex' }}>
//         <PageRenderer pageData={pageData} />
//       </main>
//     </div>
//   );
// }

// function App() {
//   const [pageData, setPageData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/data.json");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setPageData(data);
//       } catch (e) {
//         console.error("Failed to fetch page data:", e);
//         setError(e.message);
//       }
//     };
//     fetchData();
//   }, []);

//   if (error) return <div>Error loading page data: {error}</div>;
//   if (!pageData) return <div>Loading...</div>;
  
//   if (!pageData.pages || pageData.pages.length === 0) {
//     return <div>페이지가 없습니다.</div>;
//   }

//   return (
//     <BrowserRouter>
//       <MainLayout pageData={pageData} />
//     </BrowserRouter>
//   );
// }

// export default App;













//성공함
// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import CustomerContent from "./CustomerContent";
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpHeader03 from "./components/TpHeader/TpHeader03";
// import "./App.css";

// const headerMap = {
//   헤더02: TpHeader02,
//   헤더03: TpHeader03,
// };

// function PageRenderer({ pageData }) {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0 })}>
//       <Routes location={location} key={location.pathname}>
//         {pageData.pages.map((page) => (
//           <Route
//             key={page.id || page.path}
//             path={page.path}
//             element={<CustomerContent currentPageData={page} />}
//           />
//         ))}
//       </Routes>
//     </AnimatePresence>
//   );
// }

// function MainLayout({ pageData }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   const HeaderComponent = headerMap[pageData.headerType];

//   return (
//     <div style={{
//       background: "#111",
//       minHeight: "100vh",
//       display: "flex",
//       flexDirection: "column"
//     }}>
//       {HeaderComponent && (
//         <HeaderComponent
//           isPreview
//           onNavigate={handleNavigate}
//           menuItems={pageData.menuItems || []}
//           activePath={location.pathname}
//           logo={pageData.logo}
//         />
//       )}
//       <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//         <PageRenderer pageData={pageData} />
//       </main>
//     </div>
//   );
// }

// function App() {
//   const [pageData, setPageData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/data.json");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setPageData(data);
//       } catch (e) {
//         console.error("Failed to fetch page data:", e);
//         setError(e.message);
//       }
//     };
//     fetchData();
//   }, []);

//   if (error) return <div>Error loading page data: {error}</div>;
//   if (!pageData) return <div>Loading...</div>;
  
//   if (!pageData.pages || pageData.pages.length === 0) {
//     return <div>페이지가 없습니다.</div>;
//   }

//   return (
//     <BrowserRouter>
//       <MainLayout pageData={pageData} />
//     </BrowserRouter>
//   );
// }

// export default App;










//SEO를 위한 수정
// import React, { useState, useEffect } from "react";
// import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from 'react-helmet-async';
// import CustomerContent from "./CustomerContent";

// // 동적으로 헤더 컴포넌트를 가져오기 위한 설정
// const headerModules = import.meta.glob('./components/TpHeader/*.jsx');

// function App() {
//   const [siteData, setSiteData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [HeaderComponent, setHeaderComponent] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/data.json");
//         const data = await response.json();
//         setSiteData(data);
//       } catch (error) {
//         console.error("Error fetching site data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (siteData?.headerType) {
//       const headerPath = `./components/TpHeader/${siteData.headerType}.jsx`;
//       if (headerModules[headerPath]) {
//         headerModules[headerPath]().then(mod => {
//           setHeaderComponent(() => mod.default);
//         });
//       }
//     }
//   }, [siteData?.headerType]);

//   const handleNavigate = (path) => {
//     if (location.pathname !== path) {
//       navigate(path);
//     }
//   };
  
//   if (loading) {
//     return <div style={{ background: '#111', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>사이트를 불러오는 중입니다...</div>;
//   }

//   if (!siteData) {
//     return <div style={{ background: '#111', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>사이트 데이터를 불러올 수 없습니다.</div>;
//   }

//   const seo = siteData.seo || {};
//   const currentPage = siteData.pages?.find(p => p.path === location.pathname);

//   return (
//     <>
//       <Helmet>
//         <title>{currentPage?.name ? `${currentPage.name} | ${seo.title || 'Droppy'}` : seo.title || 'Droppy'}</title>
//         <meta name="description" content={seo.description || 'Droppy로 만든 나만의 웹사이트'} />
//         {seo.favicon && <link rel="icon" href={seo.favicon} />}
//         <meta property="og:title" content={seo.title || 'Droppy'} />
//         <meta property="og:description" content={seo.description || 'Droppy로 만든 나만의 웹사이트'} />
//         {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
//         <meta property="og:type" content="website" />
//         <meta name="generator" content="Droppy" />
//       </Helmet>
      
//       <main style={{ background: "#111", margin: 0, padding: 0, minHeight: "100vh" }}>
//         {HeaderComponent && (
//             <HeaderComponent
//               isPreview
//               onNavigate={handleNavigate}
//               menuItems={siteData.menuItems || []}
//               activePath={location.pathname}
//               logo={siteData.logo}
//             />
//         )}
//         <Routes>
//           {siteData.pages?.map(page => (
//             <Route 
//               key={page.id}
//               path={page.path}
//               element={<CustomerContent currentPageData={page} />}
//             />
//           ))}
//           {/* 일치하는 라우트가 없을 때 기본 페이지로 리디렉션 */}
//           {siteData.pages && siteData.pages.length > 0 &&
//             <Route path="*" element={<CustomerContent currentPageData={siteData.pages[0]} />} />
//           }
//         </Routes>
//       </main>
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from 'react-helmet-async';
// import CustomerContent from "./CustomerContent";

// // 1. 사용할 헤더 컴포넌트를 직접 import 합니다.
// import TpHeader02 from "./components/TpHeader/TpHeader02";
// import TpHeader03 from "./components/TpHeader/TpHeader03";
// // ※ 만약 TpHeader04, 05 등 다른 헤더가 있다면 아래에 추가해주세요.

// // 2. data.json에 저장된 헤더 이름(키)과 실제 컴포넌트(값)를 연결합니다.
// const headerMap = {
//   "헤더02": TpHeader02,
//   "헤더03": TpHeader03,
// };

// function App() {
//   const [siteData, setSiteData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/data.json");
//         const data = await response.json();
//         setSiteData(data);
//       } catch (error) {
//         console.error("Error fetching site data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleNavigate = (path) => {
//     if (location.pathname !== path) {
//       navigate(path);
//     }
//   };
  
//   if (loading) {
//     return <div style={{ background: '#111', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>사이트를 불러오는 중입니다...</div>;
//   }

//   if (!siteData) {
//     return <div style={{ background: '#111', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>사이트 데이터를 불러올 수 없습니다.</div>;
//   }

//   // 3. headerMap을 이용해 data.json의 headerType에 맞는 컴포넌트를 찾습니다.
//   const HeaderComponent = headerMap[siteData.headerType];
//   const seo = siteData.seo || {};

//   return (
//     <>
//       <Helmet>
//         {/* 사이트 제목을 SEO 설정값으로만 표시하도록 수정 */}
//         <title>{seo.title || 'Droppy'}</title>
//         <meta name="description" content={seo.description || 'Droppy로 만든 나만의 웹사이트'} />
//         {seo.favicon && <link rel="icon" href={seo.favicon} />}
        
//         {/* 소셜 공유(OG) 태그 */}
//         <meta property="og:title" content={seo.title || 'Droppy'} />
//         <meta property="og:description" content={seo.description || 'Droppy로 만든 나만의 웹사이트'} />
//         {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
//         <meta property="og:type" content="website" />
//         <meta name="generator" content="Droppy" />
//       </Helmet>
      
//       <main style={{ background: "#111", margin: 0, padding: 0, minHeight: "100vh" }}>
//         {HeaderComponent && (
//             <HeaderComponent
//               isPreview
//               onNavigate={handleNavigate}
//               menuItems={siteData.menuItems || []}
//               activePath={location.pathname}
//               logo={siteData.logo}
//             />
//         )}
//         <Routes>
//           {siteData.pages?.map(page => (
//             <Route 
//               key={page.id}
//               path={page.path}
//               element={<CustomerContent currentPageData={page} />}
//             />
//           ))}
//           {/* 일치하는 라우트가 없을 때 기본 페이지(첫 번째 페이지)로 이동 */}
//           {siteData.pages && siteData.pages.length > 0 &&
//             <Route path="*" element={<CustomerContent currentPageData={siteData.pages[0]} />} />
//           }
//         </Routes>
//       </main>
//     </>
//   );
// }

// export default App;




import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from "framer-motion"; // 1. 애니메이션을 위해 AnimatePresence를 import 합니다.
import CustomerContent from "./CustomerContent";

// 사용할 헤더 컴포넌트를 직접 import 합니다.
import TpHeader02 from "./components/TpHeader/TpHeader02";
import TpHeader03 from "./components/TpHeader/TpHeader03";
// ※ 만약 TpHeader04, 05 등 다른 헤더가 있다면 아래에 추가해주세요.

// data.json에 저장된 헤더 이름(키)과 실제 컴포넌트(값)를 연결합니다.
const headerMap = {
  "헤더02": TpHeader02,
  "헤더03": TpHeader03,
};

function App() {
  const [siteData, setSiteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // 2. 현재 경로 정보를 가져옵니다. (애니메이션에 필요)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setSiteData(data);
      } catch (error) {
        console.error("Error fetching site data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleNavigate = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };
  
  if (loading) {
    return <div style={{ background: '#111', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>사이트를 불러오는 중입니다...</div>;
  }

  if (!siteData) {
    return <div style={{ background: '#111', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>사이트 데이터를 불러올 수 없습니다.</div>;
  }

  const HeaderComponent = headerMap[siteData.headerType];
  const seo = siteData.seo || {};
  const currentPage = siteData.pages?.find(p => p.path === location.pathname);
  
  const getPageTitle = () => {
    const siteTitle = seo.title || 'Droppy';
    if (!currentPage) return siteTitle;
    const isMainPage = siteData.pages[0]?.id === currentPage.id;
    return isMainPage ? siteTitle : `${currentPage.name} | ${siteTitle}`;
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={seo.description || 'Droppy로 만든 나만의 웹사이트'} />
        {seo.favicon && <link rel="icon" href={seo.favicon} />}
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content={seo.description || 'Droppy로 만든 나만의 웹사이트'} />
        {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
        <meta property="og:type" content="website" />
        <meta name="generator" content="Droppy" />
      </Helmet>
      
      <main style={{ background: "#111", margin: 0, padding: 0, minHeight: "100vh", display: 'flex', flexDirection: 'column' }}>
        {HeaderComponent && (
            <HeaderComponent
              isPreview
              onNavigate={handleNavigate}
              menuItems={siteData.menuItems || []}
              activePath={location.pathname}
              logo={siteData.logo}
            />
        )}
        
        {/* 3. AnimatePresence로 Routes를 감싸 애니메이션을 적용합니다. */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {siteData.pages?.map(page => (
                <Route 
                  key={page.id}
                  path={page.path}
                  element={<CustomerContent currentPageData={page} />}
                />
              ))}
              {siteData.pages && siteData.pages.length > 0 &&
                <Route path="*" element={<CustomerContent currentPageData={siteData.pages[0]} />} />
              }
            </Routes>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}

export default App;