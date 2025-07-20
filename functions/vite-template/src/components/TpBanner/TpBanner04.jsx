// // components/TpBanner/TpBanner04.jsx
// import React, { useEffect, useRef } from "react";
// import styles from "./TpBanner04.module.scss";
// import { gsap } from "gsap";

// // ✅ ScrollTrigger를 브라우저 환경에서만 등록
// if (typeof window !== "undefined") {
//   import("gsap/ScrollTrigger").then((mod) => {
//     gsap.registerPlugin(mod.ScrollTrigger);
//   });
// }

// const TpBanner04 = ({
//   title = "건강한 하루의 시작",
//   subTitle = "신선한 재료로 만들어지는 건강한 습관",
//   mediaUrl = "/videos/default.mp4",
//   mediaType = "video",
//   align = "center",
//   buttonText = "지금 문의하기",
// }) => {
//   const sectionRef = useRef(null);

//   // ✅ 반응형 클래스 자동 추가
//   useEffect(() => {
//     const updateResponsiveClass = () => {
//       if (!sectionRef.current) return;
//       sectionRef.current.classList.remove("is-mobile", "is-tablet", "is-pc");

//       const width = window.innerWidth;
//       if (width <= 768) {
//         sectionRef.current.classList.add("is-mobile");
//       } else if (width <= 1200) {
//         sectionRef.current.classList.add("is-tablet");
//       } else {
//         sectionRef.current.classList.add("is-pc");
//       }
//     };

//     updateResponsiveClass();
//     window.addEventListener("resize", updateResponsiveClass);
//     return () => window.removeEventListener("resize", updateResponsiveClass);
//   }, []);

//   // ✅ GSAP 애니메이션
//   useEffect(() => {
//     if (!sectionRef.current || typeof window === "undefined") return;

//     const ctx = gsap.context(() => {
//       gsap.from(`.${styles.title}`, {
//         opacity: 0,
//         y: 60,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className={styles.tpBanner04}>
//       {mediaType === "video" ? (
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className={styles.tpBanner04__background}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : (
//         <div
//           className={styles.tpBanner04__background}
//           style={{
//             backgroundImage: `url(${mediaUrl})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       )}

//       <div className={styles.tpBanner04__text} style={{ textAlign: align }}>
//         <h2 className={styles.title}>
//           {title.split("\n").map((line, i) => (
//             <span key={i}>{line}<br /></span>
//           ))}
//         </h2>
//         <p className={styles.subTitle}>
//           {subTitle.split("\n").map((line, i) => (
//             <span key={i}>{line}<br /></span>
//           ))}
//         </p>
//         <button className={styles.btn}>{buttonText}</button>
//       </div>
//     </section>
//   );
// };

// export default TpBanner04;










// import React, { useEffect, useRef, useState } from "react";
// import styles from "./TpBanner04.module.scss";
// import { gsap } from "gsap";
// import { getDownloadURL, ref } from "firebase/storage";
// import { storage } from "@/lib/firebase";

// // ✅ ScrollTrigger 등록 (브라우저 환경에서만)
// if (typeof window !== "undefined") {
//   import("gsap/ScrollTrigger").then((mod) => {
//     gsap.registerPlugin(mod.ScrollTrigger);
//   });
// }

// const TpBanner04 = ({
//   title = "건강한 하루의 시작",
//   subTitle = "신선한 재료로 만들어지는 건강한 습관",
//   mediaPath = "videos/default.mp4", // ✅ Firebase Storage 전체 경로
//   mediaType = "video", // "video" 또는 "image"
//   align = "center",
//   buttonText = "지금 문의하기",
// }) => {
//   const sectionRef = useRef(null);
//   const [mediaUrl, setMediaUrl] = useState("");

//   // ✅ Firebase Storage에서 mediaPath로 파일 URL 가져오기
//   useEffect(() => {
//     const fetchMediaUrl = async () => {
//       try {
//         const fileRef = ref(storage, mediaPath); // 경로 전체 사용
//         const url = await getDownloadURL(fileRef);
//         setMediaUrl(url);
//       } catch (error) {
//         console.error("📦 mediaUrl fetch 실패:", error);
//         setMediaUrl("/videos/default.mp4"); // fallback
//       }
//     };
//     fetchMediaUrl();
//   }, [mediaPath]);

//   // ✅ 반응형 클래스 적용
//   useEffect(() => {
//     const updateResponsiveClass = () => {
//       if (!sectionRef.current) return;
//       sectionRef.current.classList.remove("is-mobile", "is-tablet", "is-pc");

//       const width = window.innerWidth;
//       if (width <= 768) {
//         sectionRef.current.classList.add("is-mobile");
//       } else if (width <= 1200) {
//         sectionRef.current.classList.add("is-tablet");
//       } else {
//         sectionRef.current.classList.add("is-pc");
//       }
//     };

//     updateResponsiveClass();
//     window.addEventListener("resize", updateResponsiveClass);
//     return () => window.removeEventListener("resize", updateResponsiveClass);
//   }, []);

//   // ✅ GSAP ScrollTrigger 애니메이션
//   useEffect(() => {
//     if (!sectionRef.current || typeof window === "undefined") return;

//     const ctx = gsap.context(() => {
//       gsap.from(`.${styles.title}`, {
//         opacity: 0,
//         y: 60,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className={styles.tpBanner04}>
//       {mediaType === "video" ? (
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className={styles.tpBanner04__background}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : (
//         <div
//           className={styles.tpBanner04__background}
//           style={{
//             backgroundImage: `url(${mediaUrl})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       )}

//       <div className={styles.tpBanner04__text} style={{ textAlign: align }}>
//         <h2 className={styles.title}>
//           {title.split("\n").map((line, i) => (
//             <span key={i}>{line}<br /></span>
//           ))}
//         </h2>
//         <p className={styles.subTitle}>
//           {subTitle.split("\n").map((line, i) => (
//             <span key={i}>{line}<br /></span>
//           ))}
//         </p>
//         <button className={styles.btn}>{buttonText}</button>
//       </div>
//     </section>
//   );
// };

// export default TpBanner04;






// // 정적인 상태로 수정한 배너04
// "use client";

// import React, { useEffect, useRef } from "react";
// import styles from "./TpBanner04.module.scss";
// import { gsap } from "gsap";

// // ✅ ScrollTrigger 등록 (브라우저 환경에서만)
// if (typeof window !== "undefined") {
//   import("gsap/ScrollTrigger").then((mod) => {
//     gsap.registerPlugin(mod.ScrollTrigger);
//   });
// }

// const TpBanner04 = ({
//   title = "건강한 하루의 시작",
//   subTitle = "신선한 재료로 만들어지는 건강한 습관",
//   mediaUrl = "/videos/default.mp4", // ✅ 외부에서 직접 URL로 전달받음
//   mediaType = "video", // "video" 또는 "image"
//   align = "center",
//   buttonText = "지금 문의하기",
// }) => {
//   const sectionRef = useRef(null);

//   // ✅ 반응형 클래스 적용
//   useEffect(() => {
//     const updateResponsiveClass = () => {
//       if (!sectionRef.current) return;
//       sectionRef.current.classList.remove("is-mobile", "is-tablet", "is-pc");

//       const width = window.innerWidth;
//       if (width <= 768) {
//         sectionRef.current.classList.add("is-mobile");
//       } else if (width <= 1200) {
//         sectionRef.current.classList.add("is-tablet");
//       } else {
//         sectionRef.current.classList.add("is-pc");
//       }
//     };

//     updateResponsiveClass();
//     window.addEventListener("resize", updateResponsiveClass);
//     return () => window.removeEventListener("resize", updateResponsiveClass);
//   }, []);

//   // ✅ GSAP ScrollTrigger 애니메이션
//   useEffect(() => {
//     if (!sectionRef.current || typeof window === "undefined") return;

//     // const ctx = gsap.context(() => {
//     //   gsap.from(`.${styles.title}`, {
//     //     opacity: 0,
//     //     y: 60,
//     //     duration: 0.8,
//     //     ease: "power3.out",
//     //     scrollTrigger: {
//     //       trigger: sectionRef.current,
//     //       start: "top 80%",
//     //     },
//     //   });
//     // }, sectionRef);

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 30%",
//           toggleActions: "restart none none none", // ✅ 올바른 위치!
//         },
//       });

//       tl.from(`.${styles.title}`, {
//         opacity: 0,
//         y: 100,
//         duration: 0.8,
//         ease: "power3.out",
//       })
//         .from(`.${styles.subTitle}`, {
//           opacity: 0,
//           y: 40,
//           duration: 0.6,
//           ease: "power3.out",
//         }, "-=0.2")
//         .from(`.${styles.btn}`, {
//           opacity: 0,
//           y: 40,
//           duration: 0.5,
//           ease: "power3.out",
//         }, "-=0.3");
//     }, sectionRef);


//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className={styles.tpBanner04}>
//       {mediaType === "video" ? (
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className={styles.tpBanner04__background}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : (
//         <div
//           className={styles.tpBanner04__background}
//           style={{
//             backgroundImage: `url(${mediaUrl})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       )}

//       <div className={styles.tpBanner04__text} style={{ textAlign: align }}>
//         <h2 className={styles.title}>
//           {title.split("\n").map((line, i) => (
//             <span key={i}>{line}<br /></span>
//           ))}
//         </h2>
//         <p className={styles.subTitle}>
//           {subTitle.split("\n").map((line, i) => (
//             <span key={i}>{line}<br /></span>
//           ))}
//         </p>
//         <button className={styles.btn}>{buttonText}</button>
//       </div>
//     </section>
//   );
// };

// export default TpBanner04;
















// "use client";

// import React, { useEffect, useRef } from "react";
// import styles from "./TpBanner04.module.scss";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// // ✅ ScrollTrigger 전역 등록 (한 번만)
// gsap.registerPlugin(ScrollTrigger);

// const TpBanner04 = ({
//   title = "건강한 하루의 시작",
//   subTitle = "신선한 재료로 만들어지는 건강한 습관",
//   mediaUrl = "/videos/default.mp4",
//   mediaType = "video",
//   align = "center",
//   buttonText = "지금 문의하기",
// }) => {
//   const sectionRef = useRef(null);

//   // ✅ 반응형 클래스 적용
//   useEffect(() => {
//     const updateResponsiveClass = () => {
//       if (!sectionRef.current) return;
//       sectionRef.current.classList.remove("is-mobile", "is-tablet", "is-pc");

//       const width = window.innerWidth;
//       if (width <= 768) {
//         sectionRef.current.classList.add("is-mobile");
//       } else if (width <= 1200) {
//         sectionRef.current.classList.add("is-tablet");
//       } else {
//         sectionRef.current.classList.add("is-pc");
//       }
//     };

//     updateResponsiveClass();
//     window.addEventListener("resize", updateResponsiveClass);
//     return () => window.removeEventListener("resize", updateResponsiveClass);
//   }, []);

//   // ✅ GSAP ScrollTrigger 애니메이션 (1회만 실행)
// useEffect(() => {
//   if (!sectionRef.current) return;

//   const ctx = gsap.context(() => {
//     const titleEl = sectionRef.current.querySelector(`.${styles.title}`);
//     const subTitleEl = sectionRef.current.querySelector(`.${styles.subTitle}`);
//     const btnEl = sectionRef.current.querySelector(`.${styles.btn}`);

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 30%",
//         once: true,
//       },
//     });

//     if (titleEl) {
//       tl.from(titleEl, {
//         opacity: 0,
//         y: 100,
//         duration: 0.8,
//         ease: "power3.out",
//       });
//     }

//     if (subTitleEl) {
//       tl.from(subTitleEl, {
//         opacity: 0,
//         y: 40,
//         duration: 0.6,
//         ease: "power3.out",
//       }, "-=0.2");
//     }

//     if (btnEl) {
//       tl.from(btnEl, {
//         opacity: 0,
//         y: 40,
//         duration: 0.5,
//         ease: "power3.out",
//       }, "-=0.3");
//     }
//   }, sectionRef);

//   return () => ctx.revert();
// }, []);


//   return (
//     <section ref={sectionRef} className={styles.tpBanner04}>
//       {/* {mediaType === "video" ? (
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           className={styles.tpBanner04__background}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : (
//         <div
//           className={styles.tpBanner04__background}
//           style={{
//             backgroundImage: `url(${mediaUrl})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       )} */}

//       {mediaType === "video" ? (
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           className={styles.tpBanner04__background}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : (
//         <img
//           src={mediaUrl}
//           alt="배경 이미지"
//           className={styles.tpBanner04__background}
//           loading="lazy" // ✅ 핵심
//           style={{
//             objectFit: "cover",
//             width: "100%",
//             height: "100%",
//           }}
//         />
//       )}

//       <div className={styles.tpBanner04__text} style={{ textAlign: align }}>
//         <h2 className={styles.title}>
//           {title.split("\n").map((line, i) => (
//             <span key={i}>{line}<br /></span>
//           ))}
//         </h2>
//         <p className={styles.subTitle}>
//           {subTitle.split("\n").map((line, i) => (
//             <span key={i}>{line}<br /></span>
//           ))}
//         </p>
//         <button className={styles.btn}>{buttonText}</button>
//       </div>
//     </section>
//   );
// };

// export default TpBanner04;




// // ✅ 제작페이지용 TpBanner04.jsx (ref 적용 + 수정모달 유지)
// import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
// import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "../../firebase";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const EditBannerModal = ({ localData, onChange, onClose }) => {
//   const [localTitle, setLocalTitle] = useState(localData.title || "");
//   const [localSubTitle, setLocalSubTitle] = useState(localData.subTitle || "");
//   const [textAlign, setTextAlign] = useState(localData.align || "center");
//   const [mediaSrc, setMediaSrc] = useState(localData.mediaUrl || "");
//   const [fileType, setFileType] = useState(localData.mediaType || "video");
//   const [localButtonText, setLocalButtonText] = useState(localData.buttonText || "지금 문의하기");

//   useEffect(() => {
//     onChange?.({ title: localTitle, subTitle: localSubTitle, align: textAlign, mediaUrl: mediaSrc, mediaType: fileType, buttonText: localButtonText });
//   }, [localTitle, localSubTitle, textAlign, mediaSrc, fileType, localButtonText]);

//   const handleMediaUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const detectedType = file.type.includes("image") ? "image" : "video";
//     setFileType(detectedType);
//     const fileRef = storageRef(storage, `banner04/${Date.now()}_${file.name}`);
//     await uploadBytes(fileRef, file);
//     const url = await getDownloadURL(fileRef);
//     setMediaSrc(url);
//   };

//   return (
//     <div onClick={(e) => e.stopPropagation()} style={{ position: "fixed", top: 100, left: 100, background: "#fff", padding: 20, zIndex: 9999, borderRadius: 8, boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}>
//       <h3>배너 수정</h3>
//       <textarea value={localTitle} onChange={(e) => setLocalTitle(e.target.value)} placeholder="제목" style={{ width: "100%" }} />
//       <textarea value={localSubTitle} onChange={(e) => setLocalSubTitle(e.target.value)} placeholder="서브제목" style={{ width: "100%" }} />
//       <input value={localButtonText} onChange={(e) => setLocalButtonText(e.target.value)} placeholder="버튼 텍스트" style={{ width: "100%" }} />
//       <input type="file" accept="image/*,video/mp4" onChange={handleMediaUpload} />
//       <input type="text" value={mediaSrc} onChange={(e) => setMediaSrc(e.target.value)} placeholder="직접 URL" style={{ width: "100%" }} />
//       <button onClick={onClose}>닫기</button>
//     </div>
//   );
// };

// const TpBanner04 = ({ title, subTitle, align, mediaUrl, mediaType, buttonText, onEdit, isPreview = false }) => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const subRef = useRef(null);
//   const btnRef = useRef(null);

//   const [bannerData, setBannerData] = useState({
//     title: title || "건강한 하루의 시작",
//     subTitle: subTitle || "신선한 재료로 만들어지는 건강한 습관",
//     align: align || "center",
//     mediaUrl: mediaUrl || "/videos/1757799-hd_1920_1080_25fps.mp4",
//     mediaType: mediaType || "video",
//     buttonText: buttonText || "지금 문의하기",
//   });

//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     onEdit?.(bannerData);
//   }, []);

//   useEffect(() => {
//     const updateClass = () => {
//       if (!sectionRef.current) return;
//       sectionRef.current.classList.remove("is-mobile", "is-tablet", "is-pc");
//       const width = sectionRef.current.clientWidth;
//       sectionRef.current.classList.add(width <= 768 ? "is-mobile" : width <= 1200 ? "is-tablet" : "is-pc");
//     };
//     updateClass();
//     window.addEventListener("resize", updateClass);
//     return () => window.removeEventListener("resize", updateClass);
//   }, []);

//   useLayoutEffect(() => {
//     if (!sectionRef.current || editing) return;
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
//       if (titleRef.current) tl.from(titleRef.current, { opacity: 0, y: 60, duration: 0.8, ease: "power3.out" });
//       if (subRef.current) tl.from(subRef.current, { opacity: 0, y: 40, duration: 0.6, ease: "power3.out" }, "-=0.3");
//       if (btnRef.current) tl.from(btnRef.current, { opacity: 0, y: 40, duration: 0.5, ease: "power3.out" }, "-=0.3");
//     }, sectionRef);
//     return () => ctx.revert();
//   }, [editing]);

//   return (
//     <section ref={sectionRef} className="tpBanner04" onClick={() => !isPreview && setEditing(true)}>
//       {bannerData.mediaType === "video" ? (
//         <video autoPlay loop muted playsInline className="tpBanner04__background">
//           <source src={bannerData.mediaUrl} type="video/mp4" />
//         </video>
//       ) : (
//         <div className="tpBanner04__background" style={{ backgroundImage: `url(${bannerData.mediaUrl})` }} />
//       )}

//       <div className="tpBanner04__text" style={{ textAlign: bannerData.align }}>
//         <h2 ref={titleRef} className="title">{bannerData.title.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}</h2>
//         <p ref={subRef} className="subTitle">{bannerData.subTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}</p>
//         <button ref={btnRef} className="btn">{bannerData.buttonText}</button>
//       </div>

//       {editing && (
//         <EditBannerModal
//           localData={bannerData}
//           onChange={(newData) => {
//             setBannerData(newData);
//             onEdit?.(newData);
//           }}
//           onClose={() => setEditing(false)}
//         />
//       )}
//     </section>
//   );
// };

// export default TpBanner04;





// // ✅ 고객용 TpBanner04.jsx (제작용과 동일한 애니메이션, 스타일 적용)
// "use client";

// import React, { useEffect, useRef } from "react";
// import styles from "./TpBanner04.module.scss";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TpBanner04 = ({
//   title = "건강한 하루의 시작",
//   subTitle = "신선한 재료로 만들어지는 건강한 습관",
//   mediaUrl = "/videos/default.mp4",
//   mediaType = "video",
//   align = "center",
//   buttonText = "지금 문의하기",
// }) => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const subTitleRef = useRef(null);
//   const btnRef = useRef(null);

//   // 반응형 클래스 적용
//   useEffect(() => {
//     const updateResponsiveClass = () => {
//       if (!sectionRef.current) return;
//       sectionRef.current.classList.remove("is-mobile", "is-tablet", "is-pc");

//       const width = window.innerWidth;
//       if (width <= 768) {
//         sectionRef.current.classList.add("is-mobile");
//       } else if (width <= 1200) {
//         sectionRef.current.classList.add("is-tablet");
//       } else {
//         sectionRef.current.classList.add("is-pc");
//       }
//     };

//     updateResponsiveClass();
//     window.addEventListener("resize", updateResponsiveClass);
//     return () => window.removeEventListener("resize", updateResponsiveClass);
//   }, []);

//   // GSAP ScrollTrigger 애니메이션
//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 30%",
//           once: true,
//         },
//       });

//       if (titleRef.current) {
//         tl.from(titleRef.current, {
//           opacity: 0,
//           y: 100,
//           duration: 0.8,
//           ease: "power3.out",
//         });
//       }

//       if (subTitleRef.current) {
//         tl.from(subTitleRef.current, {
//           opacity: 0,
//           y: 40,
//           duration: 0.6,
//           ease: "power3.out",
//         }, "-=0.2");
//       }

//       if (btnRef.current) {
//         tl.from(btnRef.current, {
//           opacity: 0,
//           y: 40,
//           duration: 0.5,
//           ease: "power3.out",
//         }, "-=0.3");
//       }
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className={styles.tpBanner04}>
//       {mediaType === "video" ? (
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           className={styles.tpBanner04__background}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : (
//         <img
//           src={mediaUrl}
//           alt="배경 이미지"
//           className={styles.tpBanner04__background}
//           loading="lazy"
//           style={{ objectFit: "cover", width: "100%", height: "100%" }}
//         />
//       )}

//       <div className={styles.tpBanner04__text} style={{ textAlign: align }}>
//         <h2 ref={titleRef} className={styles.title}>
//           {title.split("\n").map((line, i) => (
//             <span key={i}>{line}<br /></span>
//           ))}
//         </h2>
//         <p ref={subTitleRef} className={styles.subTitle}>
//           {subTitle.split("\n").map((line, i) => (
//             <span key={i}>{line}<br /></span>
//           ))}
//         </p>
//         <button ref={btnRef} className={styles.btn}>{buttonText}</button>
//       </div>
//     </section>
//   );
// };

// export default TpBanner04;






// ✅ 고객용 TpBanner04.jsx (제작용과 동일한 애니메이션, 스타일 적용)
"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./TpBanner04.module.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TpBanner04 = ({
  title = "건강한 하루의 시작",
  subTitle = "신선한 재료로 만들어지는 건강한 습관",
  mediaUrl = "/videos/default.mp4",
  mediaType = "video",
  align = "center",
  buttonText = "지금 문의하기",
}) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const btnRef = useRef(null);
  const [viewMode, setViewMode] = useState('is-pc');

  // 반응형 클래스 적용
  useEffect(() => {
    const updateResponsiveClass = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setViewMode('is-mobile');
      } else if (width <= 1200) {
        setViewMode('is-tablet');
      } else {
        setViewMode('is-pc');
      }
    };

    updateResponsiveClass();
    window.addEventListener("resize", updateResponsiveClass);
    return () => window.removeEventListener("resize", updateResponsiveClass);
  }, []);

  // GSAP ScrollTrigger 애니메이션
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          once: true,
        },
      });

      if (titleRef.current) {
        tl.from(titleRef.current, {
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      if (subTitleRef.current) {
        tl.from(subTitleRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.2");
      }

      if (btnRef.current) {
        tl.from(btnRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.5,
          ease: "power3.out",
        }, "-=0.3");
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const sectionClassName = `${styles.tpBanner04} ${styles[viewMode] || ''}`;

  return (
    <section ref={sectionRef} className={sectionClassName}>
      {mediaType === "video" ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={styles.tpBanner04__background}
        >
          <source src={mediaUrl} type="video/mp4" />
        </video>
      ) : (
        <img
          src={mediaUrl}
          alt="배경 이미지"
          className={styles.tpBanner04__background}
          loading="lazy"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      )}

      <div className={styles.tpBanner04__text} style={{ textAlign: align }}>
        <h2 ref={titleRef} className={styles.title}>
          {title.split("\n").map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h2>
        <p ref={subTitleRef} className={styles.subTitle}>
          {subTitle.split("\n").map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </p>
        <button ref={btnRef} className={styles.btn}>{buttonText}</button>
      </div>
    </section>
  );
};

export default TpBanner04;