// import React, { useState } from 'react';
// import styles from './TpHeader03.module.scss';

// const TpHeader03 = ({
//   menuItems = [],
//   logo,
//   isPreview = false,
//   setCurrentPageIndex = () => {},
// }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // 데이터가 없을 경우를 대비한 기본 메뉴
//   const defaultMenuItems = [
//     { id: '1', label: "회사소개", link: "/preview?page=0" },
//     { id: '2', label: "브랜드", link: "/preview?page=1" },
//     { id: '3', label: "제품소개", link: "/preview?page=2" },
//   ];

//   const displayMenuItems = menuItems && menuItems.length > 0 ? menuItems : defaultMenuItems;

//   const handleLinkClick = (link) => {
//     if (isPreview) {
//       // "/preview?page=1" 같은 링크에서 페이지 번호를 추출합니다.
//       try {
//         const pageIndex = new URL(link, window.location.origin).searchParams.get('page');
//         if (pageIndex !== null) {
//           setCurrentPageIndex(parseInt(pageIndex, 10));
//         }
//       } catch (e) {
//         console.error("잘못된 링크 형식입니다:", link);
//       }
//     }
//     setMenuOpen(false); // 메뉴 항목 클릭 시 메뉴 닫기
//   };
  
//   return (
//     <>
//       <header role="banner" className={styles.tpHeader03}>
//         <div className={styles.container}>
//             <div className={styles.logo}>
//               {logo?.imageUrl ? (
//                 <img src={logo.imageUrl} alt={logo.text || '로고'} />
//               ) : (
//                 <span>{logo?.text || "회사로고"}</span>
//               )}
//             </div>
            
//             <div className={styles.right}>
//                 <button className={styles.supportBtn}>지원하기</button>
//                 <button aria-label="메뉴 열기" className={styles.menuBtn} onClick={() => setMenuOpen(true)}>
//                     <span/><span/><span/>
//                 </button>
//             </div>
//         </div>

//         <nav className={`${styles.sideMenu} ${menuOpen ? styles.active : ''}`}>
//             <button aria-label="메뉴 닫기" className={styles.closeBtn} onClick={() => setMenuOpen(false)}>×</button>
//             <ul className={styles.sideMenuLists}>
//               {displayMenuItems.map((item) => (
//                 <li key={item.id}>
//                     <a 
//                       href={isPreview ? '#' : item.link} 
//                       onClick={(e) => {
//                         if (isPreview) e.preventDefault();
//                         handleLinkClick(item.link);
//                       }}
//                     >
//                       {item.label}
//                     </a>
//                 </li>
//               ))}
//             </ul>
//         </nav>
//       </header>
//       {/* 메뉴 바깥 영역 클릭 시 닫히도록 하는 오버레이 */}
//       {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
//     </>
//   );
// };

// export default TpHeader03;






// import React, { useState, useEffect } from 'react';
// import styles from './TpHeader03.module.scss';

// const TpHeader03 = ({
//   menuItems = [],
//   logo,
//   currentPageIndex = 0,
//   setCurrentPageIndex = () => {},
// }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const isNowMobile = window.innerWidth <= 768;
//       setIsMobile(isNowMobile);
//       if (!isNowMobile) {
//         setMenuOpen(false);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const renderLogo = () => {
//     if (!logo || !logo.text) {
//       return <span style={{ fontFamily: 'Pretendard', fontSize: '24px', fontWeight: 700 }}>회사명</span>;
//     }
//     if (logo.type === 'image' && logo.imageUrl) {
//       return <img src={logo.imageUrl} alt={logo.text} style={{ height: '36px', objectFit: 'contain' }} />;
//     }
//     return (
//       <span style={{ fontFamily: logo.fontFamily, fontSize: logo.fontSize, fontWeight: logo.fontWeight }}>
//         {logo.text}
//       </span>
//     );
//   };

//   return (
//     <header className={`${styles.tpHeader03} ${isMobile && menuOpen ? styles.menuActive : ''}`}>
//       <div className={styles.tpHeader03__container}>
//         <div className={styles.tpHeader03__logo} onClick={() => setCurrentPageIndex(0)}>
//           {renderLogo()}
//         </div>
        
//         <nav className={styles.tpHeader03__nav}>
//           <ul className={styles.tpHeader03__navLists}>
//             {(menuItems || []).map((item, index) => (
//               <li key={item?.id || index}>
//                 <button 
//                   className={currentPageIndex === index ? styles.active : ''}
//                   onClick={() => {
//                     setCurrentPageIndex(index);
//                     if (isMobile) setMenuOpen(false);
//                   }}
//                 >
//                   {item.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {isMobile && (
//           <button 
//             className={styles.tpHeader03__mobileToggle} 
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="메뉴 토글"
//           >
//             <div className={styles.line1}></div>
//             <div className={styles.line2}></div>
//             <div className={styles.line3}></div>
//           </button>
//         )}
//       </div>
//     </header>
//   );
// };

// export default TpHeader03;






// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const StrictModeDroppable = ({ children, ...props }) => {
//   const [enabled, setEnabled] = useState(false);
//   useEffect(() => {
//     const animation = requestAnimationFrame(() => setEnabled(true));
//     return () => {
//       cancelAnimationFrame(animation);
//       setEnabled(false);
//     };
//   }, []);
//   if (!enabled) {
//     return null;
//   }
//   return <Droppable {...props}>{children}</Droppable>;
// };

// const LogoModal = ({ logo, setLogo, onClose }) => {
//   const [localLogo, setLocalLogo] = useState(logo || {});
//   useEffect(() => { setLocalLogo(logo || { text: '회사로고', fontSize: '24px', fontWeight: '700' }); }, [logo]);
//   const handleSave = () => { setLogo(localLogo); onClose(); };
//   return ReactDOM.createPortal(
//     <div style={styles.modalOverlay}>
//       <div style={styles.modalContent}>
//         <h2>로고 수정</h2>
//         <label>텍스트: <input type="text" value={localLogo.text || ''} onChange={e => setLocalLogo(p => ({ ...p, text: e.target.value }))} style={styles.modalInput}/></label>
//         <label>폰트 크기: <input type="text" value={localLogo.fontSize || ''} onChange={e => setLocalLogo(p => ({ ...p, fontSize: e.target.value }))} style={styles.modalInput}/></label>
//         <label>폰트 굵기: <input type="text" value={localLogo.fontWeight || ''} onChange={e => setLocalLogo(p => ({ ...p, fontWeight: e.target.value }))} style={styles.modalInput}/></label>
//         <div style={styles.modalActions}>
//           <button onClick={handleSave} style={{...styles.button, ...styles.buttonPrimary}}>저장</button>
//           <button onClick={onClose} style={styles.button}>닫기</button>
//         </div>
//       </div>
//     </div>, document.body
//   );
// };

// const EditModal = ({ editTarget, setEditTarget, pages, onSave, onClose }) => {
// 	if (!editTarget) return null;
// 	return ReactDOM.createPortal(
//     <div style={styles.modalOverlay}>
//       <div style={styles.modalContent}>
// 				<h2>메뉴 수정</h2>
//         <label>이름: <input value={editTarget.label} onChange={(e) => setEditTarget({ ...editTarget, label: e.target.value })} style={styles.modalInput} /></label>
//         <label>페이지 링크:
//           <select value={editTarget.link} onChange={(e) => setEditTarget({ ...editTarget, link: e.target.value })} style={styles.modalInput} >
// 						<option value="">선택하세요</option>
//             {pages.map((_, idx) => <option key={idx} value={`/preview?page=${idx}`}>페이지 {idx + 1}</option>)}
// 					</select>
// 				</label>
//         <div style={styles.modalActions}>
//           <button onClick={onSave} style={{...styles.button, ...styles.buttonPrimary}}>저장</button>
//           <button onClick={onClose} style={styles.button}>닫기</button>
// 				</div>
// 			</div>
//     </div>, document.body
// 	);
// };

// const TpHeader03 = ({ 
//   menuItems = [], 
//   setMenuItems = () => {}, 
//   pages = [], 
//   isBuilder = false, 
//   logo, 
//   setLogo = () => {} 
// }) => {
// 	const [menuOpen, setMenuOpen] = useState(false);
// 	const [editTarget, setEditTarget] = useState(null);
// 	const [showEditModal, setShowEditModal] = useState(false);
// 	const [showLogoModal, setShowLogoModal] = useState(false);
	
// 	const isBuilderPage = isBuilder;

//   const headerStyle = isBuilder 
//     ? { position: 'relative', top: 'auto', left: 'auto', zIndex: 1 } 
//     : {};

//   const defaultMenuItems = [
//     { id: '1', label: "회사소개", link: "/about" }, { id: '2', label: "브랜드", link: "/brand" },
//     { id: '3', label: "제품소개", link: "/products" }, { id: '4', label: "커뮤니티", link: "/community" }
//   ];
  
//   // ✅ [수정] useEffect의 감시 배열에 menuItems를 추가하여 안정성을 높였습니다.
//   useEffect(() => {
//     // isBuilder일 때만, 그리고 menuItems가 비어 있을 때만 기본값을 설정합니다.
//     if (isBuilder && menuItems.length === 0) {
//       setMenuItems(defaultMenuItems);
//     }
//   }, [isBuilder, menuItems]); // isBuilder와 menuItems가 변경될 때마다 이 로직을 재검토합니다.

//   const displayMenuItems = menuItems.length > 0 ? menuItems : defaultMenuItems;

// 	const handleSaveEdit = () => {
//     const updatedItems = menuItems.map((item) => item.id === editTarget.id ? editTarget : item);
// 		setMenuItems(updatedItems);
//     setShowEditModal(false); setEditTarget(null);
//   };
//   const handleDelete = (id) => setMenuItems(menuItems.filter(item => item.id !== id));
//   const handleAddMenu = () => setMenuItems([...menuItems, { id: String(Date.now()), label: "새 메뉴", link: "" }]);
// 	const handleDragEnd = (result) => {
// 		if (!result.destination) return;
//     const items = Array.from(menuItems);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);
//     setMenuItems(items);
// 	};

// 	return (
// 		<>
// 			<header role="banner" className="tpHeader03" style={headerStyle}>
// 			<div className="tpHeader03__container">
// 					<div className="tpHeader03__logo" onClick={isBuilderPage ? () => setShowLogoModal(true) : undefined} style={{ fontSize: logo?.fontSize, fontWeight: logo?.fontWeight, cursor: isBuilderPage ? 'pointer' : 'default' }}>
// 						{logo?.text || "회사로고"}
// 					</div>
					
// 					<div className="tpHeader03__right">
// 						<button className="tpHeader03__support-btn">지원하기</button>
// 						<button aria-label="메뉴 열기" className="tpHeader03__menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
// 							<ul><li/><li/><li/></ul>
// 						</button>
// 					</div>
// 				</div>

// 				<nav className={`tpHeader03__sideMenu ${menuOpen ? "active" : ""}`}>
// 					<button aria-label="메뉴 닫기" className="tpHeader03__sideMenu-closeBtn" onClick={() => setMenuOpen(!menuOpen)}>×</button>
//           {isBuilderPage ? (
//             <div className="sideMenu__builder">
// 						<DragDropContext onDragEnd={handleDragEnd}>
//                 <StrictModeDroppable droppableId="side-menu-items">
// 								{(provided) => (
//                     <ul className="sideMenu__lists" {...provided.droppableProps} ref={provided.innerRef}>
//                       {displayMenuItems.map((item, idx) => (
//                         <Draggable key={item.id} draggableId={item.id} index={idx}>
// 												{(provided) => (
//                             <li className="list" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                               <span className="list-text">{item.label}</span>
//                               <div className="list-controls">
//                                 <button onClick={() => { setEditTarget(item); setShowEditModal(true); }} className="control-btn control-btn--edit">수정</button>
//                                 <button onClick={() => handleDelete(item.id)} className="control-btn control-btn--delete">삭제</button>
//                               </div>
// 													</li>
// 												)}
// 											</Draggable>
// 										))}
// 										{provided.placeholder}
//                     </ul>
// 								)}
// 							</StrictModeDroppable>
// 						</DragDropContext>
//               <button onClick={handleAddMenu} className="tpHeader03__add-btn">메뉴 추가</button>
//             </div>
//           ) : (
//             <ul className="sideMenu__lists">
//               {displayMenuItems.map((item, idx) => <li key={idx}><Link to={item.link}>{item.label}</Link></li>)}
//             </ul>
//           )}
// 				</nav>
// 		</header>

// 			{showLogoModal && <LogoModal logo={logo} setLogo={setLogo} onClose={() => setShowLogoModal(false)} />}
// 			{showEditModal && <EditModal editTarget={editTarget} setEditTarget={setEditTarget} pages={pages} onSave={handleSaveEdit} onClose={() => setShowEditModal(false)} />}
// 		</>
// 	);
// };

// const styles = {
//   modalOverlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 100001 },
//   modalContent: { background: "white", padding: "24px", borderRadius: "12px", width: "320px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", display: 'flex', flexDirection: 'column', gap: '12px' },
//   modalInput: { width: "100%", marginTop: '8px', padding: 8, borderRadius: 6, border: "1px solid #ccc", boxSizing: 'border-box' },
//   modalActions: { display: "flex", justifyContent: "flex-end", gap: '10px', marginTop: '16px' },
//   button: { padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all 0.2s ease', backgroundColor: '#f0f2f5', color: '#444' },
//   buttonPrimary: { backgroundColor: '#1a73e8', color: '#ffffff' }
// };

// export default TpHeader03;









// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const StrictModeDroppable = ({ children, ...props }) => {
//   const [enabled, setEnabled] = useState(false);
//   useEffect(() => {
//     const animation = requestAnimationFrame(() => setEnabled(true));
//     return () => {
//       cancelAnimationFrame(animation);
//       setEnabled(false);
//     };
//   }, []);
//   if (!enabled) {
//     return null;
//   }
//   return <Droppable {...props}>{children}</Droppable>;
// };

// const LogoModal = ({ logo, setLogo, onClose }) => {
//   const [localLogo, setLocalLogo] = useState(logo || {});
//   useEffect(() => { setLocalLogo(logo || { text: '회사로고', fontSize: '24px', fontWeight: '700' }); }, [logo]);
//   const handleSave = () => { setLogo(localLogo); onClose(); };
//   return ReactDOM.createPortal(
//     <div style={styles.modalOverlay}>
//       <div style={styles.modalContent}>
//         <h2>로고 수정</h2>
//         <label>텍스트: <input type="text" value={localLogo.text || ''} onChange={e => setLocalLogo(p => ({ ...p, text: e.target.value }))} style={styles.modalInput}/></label>
//         <label>폰트 크기: <input type="text" value={localLogo.fontSize || ''} onChange={e => setLocalLogo(p => ({ ...p, fontSize: e.target.value }))} style={styles.modalInput}/></label>
//         <label>폰트 굵기: <input type="text" value={localLogo.fontWeight || ''} onChange={e => setLocalLogo(p => ({ ...p, fontWeight: e.target.value }))} style={styles.modalInput}/></label>
//         <div style={styles.modalActions}>
//           <button onClick={handleSave} style={{...styles.button, ...styles.buttonPrimary}}>저장</button>
//           <button onClick={onClose} style={styles.button}>닫기</button>
//         </div>
//       </div>
//     </div>, document.body
//   );
// };

// const EditModal = ({ editTarget, setEditTarget, pages, onSave, onClose }) => {
// 	if (!editTarget) return null;
// 	return ReactDOM.createPortal(
//     <div style={styles.modalOverlay}>
//       <div style={styles.modalContent}>
// 				<h2>메뉴 수정</h2>
//         <label>이름: <input value={editTarget.label} onChange={(e) => setEditTarget({ ...editTarget, label: e.target.value })} style={styles.modalInput} /></label>
//         <label>페이지 링크:
//           <select value={editTarget.link} onChange={(e) => setEditTarget({ ...editTarget, link: e.target.value })} style={styles.modalInput} >
// 						<option value="">선택하세요</option>
//             {pages.map((_, idx) => <option key={idx} value={`/preview?page=${idx}`}>페이지 {idx + 1}</option>)}
// 					</select>
// 				</label>
//         <div style={styles.modalActions}>
//           <button onClick={onSave} style={{...styles.button, ...styles.buttonPrimary}}>저장</button>
//           <button onClick={onClose} style={styles.button}>닫기</button>
// 				</div>
// 			</div>
//     </div>, document.body
// 	);
// };

// const TpHeader03 = ({ 
//   menuItems = [], 
//   setMenuItems = () => {}, 
//   pages = [], 
//   isBuilder = false, 
//   logo, 
//   setLogo = () => {} 
// }) => {
// 	const [menuOpen, setMenuOpen] = useState(false);
// 	const [editTarget, setEditTarget] = useState(null);
// 	const [showEditModal, setShowEditModal] = useState(false);
// 	const [showLogoModal, setShowLogoModal] = useState(false);
	
// 	const isBuilderPage = isBuilder;

//   const headerStyle = isBuilder 
//     ? { position: 'relative', top: 'auto', left: 'auto', zIndex: 1 } 
//     : {};
  
//   // ✅ [수정] 보여줄 메뉴를 동적으로 결정하는 로직
//   let displayMenuItems = menuItems;
//   // 고객 사이트이고, 저장된 메뉴가 없다면 페이지 목록으로 메뉴를 자동 생성
//   if (!isBuilder && (!menuItems || menuItems.length === 0)) {
//     displayMenuItems = pages.map((page, index) => ({
//       id: page.id || String(index),
//       label: page.name || `페이지 ${index + 1}`,
//       link: `/preview?page=${index}` // 올바른 링크 형식
//     }));
//   } 
//   // 빌더이고, 메뉴가 없다면 빈 배열로 시작
//   else if (isBuilder && menuItems.length === 0) {
//     displayMenuItems = [];
//   }

//   // ✅ [수정] 빌더에서 처음 헤더를 추가했을 때의 기본 메뉴 설정
//   useEffect(() => {
//     if (isBuilder && menuItems.length === 0) {
//       setMenuItems([
//         { id: '1', label: "회사소개", link: "/preview?page=0" }, 
//         { id: '2', label: "브랜드", link: "/preview?page=1" },
//       ]);
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isBuilder]);

// 	const handleSaveEdit = () => {
//     const updatedItems = menuItems.map((item) => item.id === editTarget.id ? editTarget : item);
// 		setMenuItems(updatedItems);
//     setShowEditModal(false); setEditTarget(null);
//   };
//   const handleDelete = (id) => setMenuItems(menuItems.filter(item => item.id !== id));
//   const handleAddMenu = () => setMenuItems([...menuItems, { id: String(Date.now()), label: "새 메뉴", link: "" }]);
// 	const handleDragEnd = (result) => {
// 		if (!result.destination) return;
//     const items = Array.from(menuItems);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);
//     setMenuItems(items);
// 	};

// 	return (
// 		<>
// 			<header role="banner" className="tpHeader03" style={headerStyle}>
// 			<div className="tpHeader03__container">
// 					<div className="tpHeader03__logo" onClick={isBuilderPage ? () => setShowLogoModal(true) : undefined} style={{ fontSize: logo?.fontSize, fontWeight: logo?.fontWeight, cursor: isBuilderPage ? 'pointer' : 'default' }}>
// 						{logo?.text || "회사로고"}
// 					</div>
					
// 					<div className="tpHeader03__right">
// 						<button className="tpHeader03__support-btn">지원하기</button>
// 						<button aria-label="메뉴 열기" className="tpHeader03__menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
// 							<ul><li/><li/><li/></ul>
// 						</button>
// 					</div>
// 				</div>

// 				<nav className={`tpHeader03__sideMenu ${menuOpen ? "active" : ""}`}>
// 					<button aria-label="메뉴 닫기" className="tpHeader03__sideMenu-closeBtn" onClick={() => setMenuOpen(!menuOpen)}>×</button>
//           {isBuilderPage ? (
//             <div className="sideMenu__builder">
// 						<DragDropContext onDragEnd={handleDragEnd}>
//                 <StrictModeDroppable droppableId="side-menu-items">
// 								{(provided) => (
//                     <ul className="sideMenu__lists" {...provided.droppableProps} ref={provided.innerRef}>
//                       {displayMenuItems.map((item, idx) => (
//                         <Draggable key={item.id} draggableId={item.id} index={idx}>
// 												{(provided) => (
//                             <li className="list" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                               <span className="list-text">{item.label}</span>
//                               <div className="list-controls">
//                                 <button onClick={() => { setEditTarget(item); setShowEditModal(true); }} className="control-btn control-btn--edit">수정</button>
//                                 <button onClick={() => handleDelete(item.id)} className="control-btn control-btn--delete">삭제</button>
//                               </div>
// 													</li>
// 												)}
// 											</Draggable>
// 										))}
// 										{provided.placeholder}
//                     </ul>
// 								)}
// 							</StrictModeDroppable>
// 						</DragDropContext>
//               <button onClick={handleAddMenu} className="tpHeader03__add-btn">메뉴 추가</button>
//             </div>
//           ) : (
//             <ul className="sideMenu__lists">
//               {displayMenuItems.map((item) => <li key={item.id}><Link to={item.link}>{item.label}</Link></li>)}
//             </ul>
//           )}
// 				</nav>
// 		</header>

// 			{showLogoModal && <LogoModal logo={logo} setLogo={setLogo} onClose={() => setShowLogoModal(false)} />}
// 			{showEditModal && <EditModal editTarget={editTarget} setEditTarget={setEditTarget} pages={pages} onSave={handleSaveEdit} onClose={() => setShowEditModal(false)} />}
// 		</>
// 	);
// };

// const styles = {
//   modalOverlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(126, 76, 76, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 100001 },
//   modalContent: { background: "white", padding: "24px", borderRadius: "12px", width: "320px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", display: 'flex', flexDirection: 'column', gap: '12px' },
//   modalInput: { width: "100%", marginTop: '8px', padding: 8, borderRadius: 6, border: "1px solid #ccc", boxSizing: 'border-box' },
//   modalActions: { display: "flex", justifyContent: "flex-end", gap: '10px', marginTop: '16px' },
//   button: { padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all 0.2s ease', backgroundColor: '#f0f2f5', color: '#444' },
//   buttonPrimary: { backgroundColor: '#1a73e8', color: '#ffffff' }
// };

// export default TpHeader03;





// import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom"; // <Link>를 사용하지 않으므로 제거합니다.
// import ReactDOM from "react-dom";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const StrictModeDroppable = ({ children, ...props }) => {
//   const [enabled, setEnabled] = useState(false);
//   useEffect(() => {
//     const animation = requestAnimationFrame(() => setEnabled(true));
//     return () => {
//       cancelAnimationFrame(animation);
//       setEnabled(false);
//     };
//   }, []);
//   if (!enabled) {
//     return null;
//   }
//   return <Droppable {...props}>{children}</Droppable>;
// };

// const LogoModal = ({ logo, setLogo, onClose }) => {
//   const [localLogo, setLocalLogo] = useState(logo || {});
//   useEffect(() => { setLocalLogo(logo || { text: '회사로고', fontSize: '24px', fontWeight: '700' }); }, [logo]);
//   const handleSave = () => { setLogo(localLogo); onClose(); };
//   return ReactDOM.createPortal(
//     <div style={styles.modalOverlay}>
//       <div style={styles.modalContent}>
//         <h2>로고 수정</h2>
//         <label>텍스트: <input type="text" value={localLogo.text || ''} onChange={e => setLocalLogo(p => ({ ...p, text: e.target.value }))} style={styles.modalInput}/></label>
//         <label>폰트 크기: <input type="text" value={localLogo.fontSize || ''} onChange={e => setLocalLogo(p => ({ ...p, fontSize: e.target.value }))} style={styles.modalInput}/></label>
//         <label>폰트 굵기: <input type="text" value={localLogo.fontWeight || ''} onChange={e => setLocalLogo(p => ({ ...p, fontWeight: e.target.value }))} style={styles.modalInput}/></label>
//         <div style={styles.modalActions}>
//           <button onClick={handleSave} style={{...styles.button, ...styles.buttonPrimary}}>저장</button>
//           <button onClick={onClose} style={styles.button}>닫기</button>
//         </div>
//       </div>
//     </div>, document.body
//   );
// };

// const EditModal = ({ editTarget, setEditTarget, pages, onSave, onClose }) => {
// 	if (!editTarget) return null;
// 	return ReactDOM.createPortal(
//     <div style={styles.modalOverlay}>
//       <div style={styles.modalContent}>
// 				<h2>메뉴 수정</h2>
//         <label>이름: <input value={editTarget.label} onChange={(e) => setEditTarget({ ...editTarget, label: e.target.value })} style={styles.modalInput} /></label>
//         <label>페이지 링크:
//           <select value={editTarget.link} onChange={(e) => setEditTarget({ ...editTarget, link: e.target.value })} style={styles.modalInput} >
// 						<option value="">선택하세요</option>
//             {pages.map((_, idx) => <option key={idx} value={`/preview?page=${idx}`}>페이지 {idx + 1}</option>)}
// 					</select>
// 				</label>
//         <div style={styles.modalActions}>
//           <button onClick={onSave} style={{...styles.button, ...styles.buttonPrimary}}>저장</button>
//           <button onClick={onClose} style={styles.button}>닫기</button>
// 				</div>
// 			</div>
//     </div>, document.body
// 	);
// };

// // ✅ [수정] props에 currentPageIndex와 setCurrentPageIndex 추가
// const TpHeader03 = ({ 
//   menuItems = [], 
//   setMenuItems = () => {}, 
//   pages = [], 
//   isBuilder = false, 
//   logo, 
//   setLogo = () => {},
//   currentPageIndex = 0,
//   setCurrentPageIndex = () => {} 
// }) => {
// 	const [menuOpen, setMenuOpen] = useState(false);
// 	const [editTarget, setEditTarget] = useState(null);
// 	const [showEditModal, setShowEditModal] = useState(false);
// 	const [showLogoModal, setShowLogoModal] = useState(false);
	
// 	const isBuilderPage = isBuilder;

//   const headerStyle = isBuilder 
//     ? { position: 'relative', top: 'auto', left: 'auto', zIndex: 1 } 
//     : {};
  
//   let displayMenuItems = menuItems;
//   if (!isBuilder && (!menuItems || menuItems.length === 0)) {
//     displayMenuItems = pages.map((page, index) => ({
//       id: page.id || String(index),
//       label: page.name || `페이지 ${index + 1}`,
//       link: `/preview?page=${index}`
//     }));
//   } 
//   else if (isBuilder && menuItems.length === 0) {
//     displayMenuItems = [];
//   }

//   useEffect(() => {
//     if (isBuilder && menuItems.length === 0) {
//       setMenuItems([
//         { id: '1', label: "회사소개", link: "/preview?page=0" }, 
//         { id: '2', label: "브랜드", link: "/preview?page=1" },
//       ]);
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isBuilder]);

// 	const handleSaveEdit = () => {
//     const updatedItems = menuItems.map((item) => item.id === editTarget.id ? editTarget : item);
// 		setMenuItems(updatedItems);
//     setShowEditModal(false); setEditTarget(null);
//   };
//   const handleDelete = (id) => setMenuItems(menuItems.filter(item => item.id !== id));
//   const handleAddMenu = () => setMenuItems([...menuItems, { id: String(Date.now()), label: "새 메뉴", link: "" }]);
// 	const handleDragEnd = (result) => {
// 		if (!result.destination) return;
//     const items = Array.from(menuItems);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);
//     setMenuItems(items);
// 	};

//   // ✅ [추가] 링크 문자열에서 페이지 인덱스를 추출하는 함수
//   const getIndexFromLink = (link) => {
//     if (typeof link !== "string" || !link.includes("?page=")) return null;
//     const pageStr = link.split("?page=")[1];
//     const pageIndex = parseInt(pageStr, 10);
//     return isNaN(pageIndex) ? null : pageIndex;
//   };

// 	return (
// 		<>
// 			<header role="banner" className="tpHeader03" style={headerStyle}>
// 			<div className="tpHeader03__container">
// 					<div className="tpHeader03__logo" onClick={isBuilderPage ? () => setShowLogoModal(true) : undefined} style={{ fontSize: logo?.fontSize, fontWeight: logo?.fontWeight, cursor: isBuilderPage ? 'pointer' : 'default' }}>
// 						{logo?.text || "회사로고"}
// 					</div>
					
// 					<div className="tpHeader03__right">
// 						<button className="tpHeader03__support-btn">지원하기</button>
// 						<button aria-label="메뉴 열기" className="tpHeader03__menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
// 							<ul><li/><li/><li/></ul>
// 						</button>
// 					</div>
// 				</div>

// 				<nav className={`tpHeader03__sideMenu ${menuOpen ? "active" : ""}`}>
// 					<button aria-label="메뉴 닫기" className="tpHeader03__sideMenu-closeBtn" onClick={() => setMenuOpen(!menuOpen)}>×</button>
//           {isBuilderPage ? (
//             <div className="sideMenu__builder">
// 						<DragDropContext onDragEnd={handleDragEnd}>
//                 <StrictModeDroppable droppableId="side-menu-items">
// 								{(provided) => (
//                     <ul className="sideMenu__lists" {...provided.droppableProps} ref={provided.innerRef}>
//                       {displayMenuItems.map((item, idx) => (
//                         <Draggable key={item.id} draggableId={item.id} index={idx}>
// 												{(provided) => (
//                             <li className="list" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                               <span className="list-text">{item.label}</span>
//                               <div className="list-controls">
//                                 <button onClick={() => { setEditTarget(item); setShowEditModal(true); }} className="control-btn control-btn--edit">수정</button>
//                                 <button onClick={() => handleDelete(item.id)} className="control-btn control-btn--delete">삭제</button>
//                               </div>
// 													</li>
// 												)}
// 											</Draggable>
// 										))}
// 										{provided.placeholder}
//                     </ul>
// 								)}
// 							</StrictModeDroppable>
// 						</DragDropContext>
//               <button onClick={handleAddMenu} className="tpHeader03__add-btn">메뉴 추가</button>
//             </div>
//           ) : (
//             // ✅ [수정] <Link> 대신 <button>을 사용하여 페이지 전환 함수 호출
//             <ul className="sideMenu__lists">
//               {displayMenuItems.map((item) => {
//                 const pageIndex = getIndexFromLink(item.link);
//                 if (pageIndex === null) {
//                   return <li key={item.id}><span>{item.label}</span></li>;
//                 }
//                 const isActive = currentPageIndex === pageIndex;
//                 return (
//                   <li key={item.id}>
//                     <button
//                       onClick={() => {
//                         setCurrentPageIndex(pageIndex);
//                         setMenuOpen(false);
//                       }}
//                       // 현재 페이지일 경우 'active' 클래스를 추가합니다. (스타일링 필요)
//                       style={{ 
//                         background: 'none', 
//                         border: 'none', 
//                         color: isActive ? '#fff' : '#aaa', // 예시 스타일
//                         fontWeight: isActive ? 'bold' : 'normal',
//                         cursor: 'pointer',
//                         padding: '1rem',
//                         fontSize: '1.2rem',
//                         width: '100%',
//                         textAlign: 'left'
//                       }}
//                     >
//                       {item.label}
//                     </button>
//                   </li>
//                 );
//               })}
//             </ul>
//           )}
// 				</nav>
// 		</header>

// 			{showLogoModal && <LogoModal logo={logo} setLogo={setLogo} onClose={() => setShowLogoModal(false)} />}
// 			{showEditModal && <EditModal editTarget={editTarget} setEditTarget={setEditTarget} pages={pages} onSave={handleSaveEdit} onClose={() => setShowEditModal(false)} />}
// 		</>
// 	);
// };

// const styles = {
//   modalOverlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(126, 76, 76, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 100001 },
//   modalContent: { background: "white", padding: "24px", borderRadius: "12px", width: "320px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", display: 'flex', flexDirection: 'column', gap: '12px' },
//   modalInput: { width: "100%", marginTop: '8px', padding: 8, borderRadius: 6, border: "1px solid #ccc", boxSizing: 'border-box' },
//   modalActions: { display: "flex", justifyContent: "flex-end", gap: '10px', marginTop: '16px' },
//   button: { padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all 0.2s ease', backgroundColor: '#f0f2f5', color: '#444' },
//   buttonPrimary: { backgroundColor: '#1a73e8', color: '#ffffff' }
// };

// export default TpHeader03;


import React, { useState } from "react";

// 고객 사이트용 헤더 컴포넌트
const TpHeader03 = ({ 
  menuItems = [], 
  pages = [],
  logo, 
  currentPageIndex = 0,
  setCurrentPageIndex = () => {} 
}) => {
	const [menuOpen, setMenuOpen] = useState(false);

  // 서버에서 받은 menuItems가 없다면, pages 데이터로 기본 메뉴를 생성합니다.
  let displayMenuItems = menuItems;
  if (!menuItems || menuItems.length === 0) {
    displayMenuItems = pages.map((page, index) => ({
      id: page.id || String(index),
      label: page.name || `페이지 ${index + 1}`,
      link: `/preview?page=${index}`
    }));
  }

  // 메뉴 링크(예: "/preview?page=1")에서 페이지 번호(1)를 추출하는 함수
  const getIndexFromLink = (link) => {
    if (typeof link !== "string" || !link.includes("?page=")) return null;
    try {
      const pageStr = link.split("?page=")[1];
      const pageIndex = parseInt(pageStr, 10);
      return isNaN(pageIndex) ? null : pageIndex;
    } catch {
      return null;
    }
  };

	return (
		<header role="banner" className="tpHeader03">
			<div className="tpHeader03__container">
					<div className="tpHeader03__logo" style={{ fontSize: logo?.fontSize, fontWeight: logo?.fontWeight }}>
						{logo?.text || "회사로고"}
					</div>
					
					<div className="tpHeader03__right">
						<button className="tpHeader03__support-btn">지원하기</button>
						<button aria-label="메뉴 열기" className="tpHeader03__menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
							<ul><li/><li/><li/></ul>
						</button>
					</div>
				</div>

				<nav className={`tpHeader03__sideMenu ${menuOpen ? "active" : ""}`}>
					<button aria-label="메뉴 닫기" className="tpHeader03__sideMenu-closeBtn" onClick={() => setMenuOpen(!menuOpen)}>×</button>

          {/* 고객 사이트에서는 항상 이 메뉴 리스트가 렌더링 됩니다. */}
          <ul className="sideMenu__lists">
            {displayMenuItems.map((item) => {
              const pageIndex = getIndexFromLink(item.link);
              
              if (pageIndex === null) {
                return <li key={item.id}><span>{item.label}</span></li>;
              }

              const isActive = currentPageIndex === pageIndex;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setCurrentPageIndex(pageIndex);
                      setMenuOpen(false);
                    }}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: isActive ? '#FFFFFF' : '#AAAAAA',
                      fontWeight: isActive ? 'bold' : 'normal',
                      cursor: 'pointer',
                      padding: '1rem',
                      fontSize: '1.2rem',
                      width: '100%',
                      textAlign: 'left'
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
				</nav>
		</header>
	);
};

export default TpHeader03;








// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./TpHeader03.module.scss";

// const TpHeader03 = ({ menuItems = [], logo }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const defaultMenuItems = [
//     { id: '1', label: "회사소개", link: "/about" },
//     { id: '2', label: "브랜드", link: "/brand" },
//     { id: '3', label: "제품소개", link: "/products" },
//     { id: '4', label: "커뮤니티", link: "/community" },
//   ];

//   const displayMenuItems = menuItems.length > 0 ? menuItems : defaultMenuItems;

//   return (
//     <header className={`tpHeader03 ${menuOpen ? "menuActive" : ""}`}>
//       <div className="tpHeader03__container">
//         <div className="tpHeader03__logo">
//           {logo?.text || "회사로고"}
//         </div>

//         <nav className="tpHeader03__nav">
//           <ul className="tpHeader03__navLists">
//             {displayMenuItems.map((item) => (
//               <li key={item.id}>
//                 <Link to={item.link} className="tpHeader03__link">
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <button
//           className="tpHeader03__mobileToggle"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="메뉴 열기"
//         >
//           <div className="line1" />
//           <div className="line2" />
//           <div className="line3" />
//         </button>
//       </div>
//     </header>
//   );
// };

// export default TpHeader03;