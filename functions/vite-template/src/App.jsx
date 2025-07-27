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






















import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerContent from "./CustomerContent";
import data from "./data.json";

function App() {
  // data.json 파일이 없거나, 내부에 pages 배열이 없으면 로딩 또는 에러 메시지를 표시합니다.
  if (!data || !data.pages || data.pages.length === 0) {
    return <div>사이트 데이터를 불러오는 중이거나, 페이지가 없습니다.</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* data.json 안의 모든 페이지를 순회하며 각각의 경로에 맞는 라우트를 생성합니다. */}
        {data.pages.map((page) => (
          <Route
            key={page.id}
            path={page.path} // 예: "/", "/about", "/products"
            element={
              <CustomerContent
                // 로고, 메뉴 등 사이트 전체에 적용되는 데이터를 props로 전달합니다.
                siteData={{
                  logo: data.logo,
                  menuItems: data.menuItems,
                  headerType: data.headerType,
                }}
                // 현재 URL에 해당하는 특정 페이지의 데이터를 props로 전달합니다.
                currentPageData={page}
              />
            }
          />
        ))}
        {/* 일치하는 경로가 없을 때 보여줄 404 페이지 (선택 사항) */}
        <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;