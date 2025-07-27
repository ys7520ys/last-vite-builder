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

function App() {
  // 1. 데이터를 저장할 state를 만듭니다. 초기값은 null입니다.
  const [data, setData] = useState(null);

  // 2. 컴포넌트가 처음 렌더링될 때 data.json 파일을 비동기적으로 불러옵니다.
  useEffect(() => {
    fetch("/data.json") // Vite 환경에서는 public 폴더의 파일은 '/'를 기준으로 절대 경로로 접근합니다.
      .then((res) => {
        // fetch 요청이 실패했을 경우 에러를 발생시킵니다.
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(setData) // 성공적으로 데이터를 가져오면 state를 업데이트합니다.
      .catch((err) => {
        console.error("data.json을 불러오는 데 실패했습니다:", err);
      });
  }, []); // 빈 배열을 전달하여 이 effect가 한 번만 실행되도록 합니다.

  // 3. 데이터를 불러오는 중일 때(data가 null일 때) 로딩 메시지를 표시합니다.
  if (!data) {
    return <div>사이트 데이터를 불러오는 중입니다...</div>;
  }

  // 4. 데이터 로딩에 실패했거나, 데이터 형식이 올바르지 않을 경우를 대비한 방어 코드입니다.
  if (!data.pages || data.pages.length === 0) {
    return <div>사이트 데이터를 불러오지 못했거나, 표시할 페이지가 없습니다.</div>;
  }

  // 5. 데이터가 성공적으로 로드되면 페이지를 렌더링합니다.
  return (
    <BrowserRouter>
      <Routes>
        {/* data.json 안의 모든 페이지를 순회하며 각각의 경로에 맞는 라우트를 생성합니다. */}
        {data.pages.map((page) => (
          <Route
            key={page.id}
            path={page.path}
            element={
              <CustomerContent
                siteData={{
                  logo: data.logo,
                  menuItems: data.menuItems,
                  headerType: data.headerType,
                }}
                currentPageData={page}
              />
            }
          />
        ))}
        {/* 일치하는 경로가 없을 때 보여줄 404 페이지 */}
        <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;