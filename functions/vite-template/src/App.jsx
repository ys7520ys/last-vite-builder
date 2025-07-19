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


import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CustomerContent from "./CustomerContent";

// CustomerContent에서 URL 파라미터를 직접 처리하므로,
// 이 Wrapper 컴포넌트는 더 이상 페이지 인덱스를 전달할 필요가 없습니다.
function CustomerPageWrapper({ data }) {
  return <CustomerContent pageData={data} />;
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // data.json에서 페이지 데이터를 가져옵니다.
    fetch("/data.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  // 데이터 로딩 중일 때 표시할 UI
  if (!data) return <div>로딩 중...</div>;

  // 라우터 설정
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 경로(/)로 접근 시 '/preview?page=0'으로 리디렉션 */}
        <Route path="/" element={<Navigate to="/preview?page=0" />} />
        {/* 미리보기 페이지 경로 */}
        <Route path="/preview" element={<CustomerPageWrapper data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;















// import { Routes, Route, useSearchParams, Navigate } from "react-router-dom";
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
//     <Routes>
//       <Route path="/" element={<Navigate to="/preview?page=0" />} />
//       <Route path="/preview" element={<CustomerPageWrapper data={data} />} />
//     </Routes>
//   );
// }

// export default App;
