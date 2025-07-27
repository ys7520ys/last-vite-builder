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

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CustomerContent from "./CustomerContent";
import TpHeader02 from "./components/TpHeader/TpHeader02";
import TpHeader03 from "./components/TpHeader/TpHeader03";
import "./App.css";

const headerMap = {
  헤더02: TpHeader02,
  헤더03: TpHeader03,
};

// 페이지 내용만 렌더링하고 애니메이션을 적용하는 컴포넌트
function PageRenderer({ pageData }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0 })}>
      <Routes location={location} key={location.pathname}>
        {pageData.pages.map((page) => (
          <Route
            key={page.id || page.path}
            path={page.path}
            element={<CustomerContent currentPageData={page} />}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

// 헤더와 페이지 컨텐츠를 포함하는 전체 레이아웃 컴포넌트
function MainLayout({ pageData }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const HeaderComponent = headerMap[pageData.headerType];

  return (
    <main style={{ background: "#111", margin: 0, padding: 0, minHeight: "100vh" }}>
      {/* 헤더는 여기서 한 번만 렌더링됩니다. */}
      {HeaderComponent && (
        <HeaderComponent
          isPreview
          onNavigate={handleNavigate}
          menuItems={pageData.menuItems || []}
          activePath={location.pathname}
          logo={pageData.logo}
        />
      )}
      {/* 페이지 내용만 PageRenderer에서 전환됩니다. */}
      <PageRenderer pageData={pageData} />
    </main>
  );
}

function App() {
  const [pageData, setPageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPageData(data);
      } catch (e) {
        console.error("Failed to fetch page data:", e);
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  if (error) return <div>Error loading page data: {error}</div>;
  if (!pageData) return <div>Loading...</div>;
  
  if (!pageData.pages || pageData.pages.length === 0) {
    return <div>페이지 데이터가 없습니다.</div>;
  }

  return (
    <BrowserRouter>
      <MainLayout pageData={pageData} />
    </BrowserRouter>
  );
}

export default App;