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






// // ✅ 고객용 TpBanner04.jsx (제작용과 동일한 애니메이션, 스타일 적용)
// "use client";

// import React, { useEffect, useRef, useState } from "react";
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
//   const [viewMode, setViewMode] = useState('is-pc');

//   // 반응형 클래스 적용
//   useEffect(() => {
//     const updateResponsiveClass = () => {
//       const width = window.innerWidth;
//       if (width <= 768) {
//         setViewMode('is-mobile');
//       } else if (width <= 1200) {
//         setViewMode('is-tablet');
//       } else {
//         setViewMode('is-pc');
//       }
//     };

//     updateResponsiveClass();
//     window.addEventListener("resize", updateResponsiveClass);
//     return () => window.removeEventListener("resize", updateResponsiveClass);
//   }, []);

//   // GSAP ScrollTrigger 애니메이션
//   // useEffect(() => {
//   //   if (!sectionRef.current) return;

//   //   const ctx = gsap.context(() => {
//   //     const tl = gsap.timeline({
//   //       scrollTrigger: {
//   //         trigger: sectionRef.current,
//   //         start: "top 30%",
//   //         once: true,
//   //       },
//   //     });

//   //     if (titleRef.current) {
//   //       tl.from(titleRef.current, {
//   //         opacity: 0,
//   //         y: 100,
//   //         duration: 0.8,
//   //         ease: "power3.out",
//   //       });
//   //     }

//   //     if (subTitleRef.current) {
//   //       tl.from(subTitleRef.current, {
//   //         opacity: 0,
//   //         y: 40,
//   //         duration: 0.6,
//   //         ease: "power3.out",
//   //       }, "-=0.2");
//   //     }

//   //     if (btnRef.current) {
//   //       tl.from(btnRef.current, {
//   //         opacity: 0,
//   //         y: 40,
//   //         duration: 0.5,
//   //         ease: "power3.out",
//   //       }, "-=0.3");
//   //     }
//   //   }, sectionRef);

//   //   return () => ctx.revert();
//   // }, []);

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

//   const sectionClassName = `${styles.tpBanner04} ${styles[viewMode] || ''}`;

//   return (
//     <section ref={sectionRef} className={sectionClassName}>
//       {mediaType === "video" ? (
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           className={styles.background}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : (
//         <img
//           src={mediaUrl}
//           alt="배경 이미지"
//           className={styles.background}
//           loading="lazy"
//           style={{ objectFit: "cover", width: "100%", height: "100%" }}
//         />
//       )}

//       <div className={styles.text} style={{ textAlign: align }}>
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







// "use client";

// import React, { useEffect, useRef, useState } from "react";
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
//   const [viewMode, setViewMode] = useState('is-pc');
//   const [isMediaLoaded, setIsMediaLoaded] = useState(false);

//   useEffect(() => {
//     const updateResponsiveClass = () => {
//       const width = window.innerWidth;
//       if (width <= 768) {
//         setViewMode('is-mobile');
//       } else if (width <= 1200) {
//         setViewMode('is-tablet');
//       } else {
//         setViewMode('is-pc');
//       }
//     };

//     updateResponsiveClass();
//     window.addEventListener("resize", updateResponsiveClass);
//     return () => window.removeEventListener("resize", updateResponsiveClass);
//   }, []);

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

//   const sectionClassName = `${styles.tpBanner04} ${styles[viewMode] || ''}`;

//   return (
//     <section ref={sectionRef} className={sectionClassName}>
//       {mediaType === "video" ? (
//         <video
//           key={mediaUrl}
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           className={styles.background}
//           onCanPlay={() => setIsMediaLoaded(true)}
//           style={{ opacity: isMediaLoaded ? 1 : 0 }}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : (
//         <img
//           key={mediaUrl}
//           src={mediaUrl}
//           alt="배경 이미지"
//           className={styles.background}
//           onLoad={() => setIsMediaLoaded(true)}
//           style={{
//             objectFit: "cover",
//             width: "100%",
//             height: "100%",
//             opacity: isMediaLoaded ? 1 : 0,
//           }}
//         />
//       )}

//       <div className={styles.text} style={{ textAlign: align }}>
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








// "use client";

// import React, { useEffect, useRef, useState } from "react";
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
//   const videoRef = useRef(null);
//   const titleRef = useRef(null);
//   const subTitleRef = useRef(null);
//   const btnRef = useRef(null);
//   const [viewMode, setViewMode] = useState('is-pc');
//   const [isImageLoaded, setIsImageLoaded] = useState(false);

//   useEffect(() => {
//     if (mediaType === 'image' && mediaUrl) {
//       const img = new Image();
//       img.src = mediaUrl;
//       img.onload = () => setIsImageLoaded(true);
//     }
//   }, [mediaUrl, mediaType]);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const fadeDuration = 0.5;

//     const handleTimeUpdate = () => {
//       const { currentTime, duration } = video;
//       if (isNaN(duration)) return;

//       if (currentTime < fadeDuration) {
//         video.style.opacity = currentTime / fadeDuration;
//       } else if (currentTime > duration - fadeDuration) {
//         video.style.opacity = (duration - currentTime) / fadeDuration;
//       } else {
//         if (video.style.opacity !== '1') {
//           video.style.opacity = 1;
//         }
//       }
//     };
    
//     const handleLoadedData = () => {
//       video.style.opacity = 0;
//     };

//     video.addEventListener('loadeddata', handleLoadedData);
//     video.addEventListener('timeupdate', handleTimeUpdate);

//     return () => {
//       video.removeEventListener('loadeddata', handleLoadedData);
//       video.removeEventListener('timeupdate', handleTimeUpdate);
//     };
//   }, [mediaUrl]);

//   useEffect(() => {
//     const updateResponsiveClass = () => {
//       const width = window.innerWidth;
//       if (width <= 768) {
//         setViewMode('is-mobile');
//       } else if (width <= 1200) {
//         setViewMode('is-tablet');
//       } else {
//         setViewMode('is-pc');
//       }
//     };

//     updateResponsiveClass();
//     window.addEventListener("resize", updateResponsiveClass);
//     return () => window.removeEventListener("resize", updateResponsiveClass);
//   }, []);

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

//   const sectionClassName = `${styles.tpBanner04} ${styles[viewMode] || ''}`;

//   return (
//     <section ref={sectionRef} className={sectionClassName}>
//       {mediaType === "video" ? (
//         <video
//           ref={videoRef}
//           key={mediaUrl}
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="auto"
//           className={styles.background}
//           style={{ opacity: 0 }}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : (
//         <img
//           key={mediaUrl}
//           src={mediaUrl}
//           alt="배경 이미지"
//           className={styles.background}
//           style={{
//             objectFit: "cover",
//             width: "100%",
//             height: "100%",
//             opacity: isImageLoaded ? 1 : 0,
//           }}
//         />
//       )}

//       <div className={styles.text} style={{ textAlign: align }}>
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







// import React, { useEffect, useRef, useState } from "react";
// import styles from "./TpBanner04.module.scss";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TpBanner04 = ({ bannerData = {} }) => {
//   const {
//     mediaUrl,
//     mediaType = "video",
//     title = "건강한 하루의 시작",
//     subTitle = "신선한 재료로 만들어지는 건강한 습관",
//     buttonText = "지금 문의하기",
//     align = "center",
//     styles: bannerStyles = {},
//   } = bannerData;

//   // `customFonts`를 `styles` 객체 안에서 올바르게 추출합니다.
//   const { customFonts = [] } = bannerStyles;

//   const sectionRef = useRef(null);
//   const videoRef = useRef(null);
//   const titleRef = useRef(null);
//   const subTitleRef = useRef(null);
//   const btnRef = useRef(null);
//   const [viewMode, setViewMode] = useState('is-pc');
//   const [isImageLoaded, setIsImageLoaded] = useState(false);

//   useEffect(() => {
//     if (customFonts && customFonts.length > 0) {
//       const styleId = `custom-banner-fonts`;
//       let styleTag = document.getElementById(styleId);
//       if (!styleTag) {
//         styleTag = document.createElement('style');
//         styleTag.id = styleId;
//         document.head.appendChild(styleTag);
//       }
//       styleTag.innerHTML = customFonts.map(font => font.fontFace || font.code).join('\n');
//     }
//   }, [customFonts]);

//   useEffect(() => {
//     if (mediaType === 'image' && mediaUrl) {
//       const img = new Image();
//       img.src = mediaUrl;
//       img.onload = () => setIsImageLoaded(true);
//     }
//   }, [mediaUrl, mediaType]);

//   // 영상 페이드인 로직을 더 안정적인 방식으로 수정합니다.
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const onCanPlay = () => {
//       video.style.transition = 'opacity 0.8s ease-in';
//       video.style.opacity = 1;
//     };

//     video.style.opacity = 0; // 초기 상태는 투명
//     video.addEventListener('canplay', onCanPlay);

//     return () => {
//       if (video) {
//         video.removeEventListener('canplay', onCanPlay);
//       }
//     };
//   }, [mediaUrl]);


//   useEffect(() => {
//     const updateResponsiveClass = () => {
//       const width = window.innerWidth;
//       setViewMode(width <= 768 ? 'is-mobile' : width <= 1200 ? 'is-tablet' : 'is-pc');
//     };
//     updateResponsiveClass();
//     window.addEventListener("resize", updateResponsiveClass);
//     return () => window.removeEventListener("resize", updateResponsiveClass);
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 30%", once: true } });
//       tl.from(titleRef.current, { opacity: 0, y: 100, duration: 0.8, ease: "power3.out" })
//         .from(subTitleRef.current, { opacity: 0, y: 40, duration: 0.6, ease: "power3.out" }, "-=0.2")
//         .from(btnRef.current, { opacity: 0, y: 40, duration: 0.5, ease: "power3.out" }, "-=0.3");
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   const sectionClassName = `${styles.tpBanner04} ${styles[viewMode] || ''}`;

//   const getStyleObject = (styleData) => {
//     if (!styleData) return {};
//     const result = {
//         color: styleData.color,
//         fontFamily: styleData.fontFamily,
//     };
//     if (styleData.fontSize) result.fontSize = `${styleData.fontSize}px`;
//     if (styleData.marginBottom) result.marginBottom = `${styleData.marginBottom}px`;
//     if (styleData.backgroundColor) result.backgroundColor = styleData.backgroundColor;
//     return result;
//   };

//   const titleStyle = getStyleObject(bannerStyles.title);
//   const subTitleStyle = getStyleObject(bannerStyles.subTitle);
//   const buttonStyle = getStyleObject(bannerStyles.button);

//   return (
//     <section ref={sectionRef} className={sectionClassName}>
//       {mediaType === "video" && mediaUrl ? (
//         <video
//           ref={videoRef}
//           key={mediaUrl}
//           autoPlay loop muted playsInline preload="auto"
//           className={styles.background}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : mediaType === "image" && mediaUrl ? (
//         <img
//           key={mediaUrl} src={mediaUrl} alt="배경 이미지" className={styles.background}
//           style={{ objectFit: "cover", width: "100%", height: "100%", opacity: isImageLoaded ? 1 : 0 }}
//         />
//       ) : null}

//       <div className={styles.text} style={{ textAlign: align }}>
//         <h2 ref={titleRef} className={styles.title} style={titleStyle}>
//           {title && title.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </h2>
//         <p ref={subTitleRef} className={styles.subTitle} style={subTitleStyle}>
//           {subTitle && subTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </p>
//         <button ref={btnRef} className={styles.btn} style={buttonStyle}>
//           {buttonText}
//         </button>
//       </div>
//     </section>
//   );
// };

// export default TpBanner04;








// import React, { useEffect, useRef, useState } from "react";
// import styles from "./TpBanner04.module.scss";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TpBanner04 = ({ bannerData = {} }) => {
//   const {
//     mediaUrl,
//     mediaType = "video",
//     title = "건강한 하루의 시작",
//     subTitle = "신선한 재료로 만들어지는 건강한 습관",
//     buttonText = "지금 문의하기",
//     align = "center",
//     styles: bannerStyles = {},
//   } = bannerData;

//   const { customFonts = [] } = bannerStyles;

//   const sectionRef = useRef(null);
//   const videoRef = useRef(null);
//   const titleRef = useRef(null);
//   const subTitleRef = useRef(null);
//   const btnRef = useRef(null);
//   const [viewMode, setViewMode] = useState('is-pc');
//   const [isImageLoaded, setIsImageLoaded] = useState(false);

//   useEffect(() => {
//     if (customFonts && customFonts.length > 0) {
//       const styleId = `custom-banner-fonts`;
//       let styleTag = document.getElementById(styleId);
//       if (!styleTag) {
//         styleTag = document.createElement('style');
//         styleTag.id = styleId;
//         document.head.appendChild(styleTag);
//       }
//       styleTag.innerHTML = customFonts.map(font => font.fontFace || font.code).join('\n');
//     }
//   }, [customFonts]);

//   useEffect(() => {
//     if (mediaType === 'image' && mediaUrl) {
//       const img = new Image();
//       img.src = mediaUrl;
//       img.onload = () => setIsImageLoaded(true);
//     }
//   }, [mediaUrl, mediaType]);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const onCanPlay = () => {
//       gsap.to(video, { opacity: 1, duration: 0.8, ease: 'ease-in' });
//     };

//     gsap.set(video, { opacity: 0 });
//     video.addEventListener('canplay', onCanPlay);

//     return () => {
//       if (video) {
//         video.removeEventListener('canplay', onCanPlay);
//       }
//     };
//   }, [mediaUrl]);


//   useEffect(() => {
//     const updateResponsiveClass = () => {
//       const width = window.innerWidth;
//       setViewMode(width <= 768 ? 'is-mobile' : width <= 1200 ? 'is-tablet' : 'is-pc');
//     };
//     updateResponsiveClass();
//     window.addEventListener("resize", updateResponsiveClass);
//     return () => window.removeEventListener("resize", updateResponsiveClass);
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 30%", once: true } });
//       tl.from(titleRef.current, { opacity: 0, y: 100, duration: 0.8, ease: "power3.out" })
//         .from(subTitleRef.current, { opacity: 0, y: 40, duration: 0.6, ease: "power3.out" }, "-=0.2")
//         .from(btnRef.current, { opacity: 0, y: 40, duration: 0.5, ease: "power3.out" }, "-=0.3");
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   const sectionClassName = `${styles.tpBanner04} ${styles[viewMode] || ''}`;

//   const getStyleObject = (styleData) => {
//     if (!styleData) return {};
//     const result = {
//         color: styleData.color,
//         fontFamily: styleData.fontFamily,
//     };
//     if (styleData.fontSize) result.fontSize = `${styleData.fontSize}px`;
//     if (styleData.marginBottom) result.marginBottom = `${styleData.marginBottom}px`;
//     if (styleData.backgroundColor) result.backgroundColor = styleData.backgroundColor;
//     return result;
//   };

//   const titleStyle = getStyleObject(bannerStyles.title);
//   const subTitleStyle = getStyleObject(bannerStyles.subTitle);
//   const buttonStyle = getStyleObject(bannerStyles.button);

//   return (
//     <section ref={sectionRef} className={sectionClassName}>
//       {mediaType === "video" && mediaUrl ? (
//         <video
//           ref={videoRef}
//           key={mediaUrl}
//           autoPlay loop muted playsInline preload="auto"
//           className={styles.background}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : mediaType === "image" && mediaUrl ? (
//         <img
//           key={mediaUrl} src={mediaUrl} alt="배경 이미지" className={styles.background}
//           style={{ objectFit: "cover", width: "100%", height: "100%", opacity: isImageLoaded ? 1 : 0 }}
//         />
//       ) : null}

//       <div className={styles.text} style={{ textAlign: align }}>
//         <h2 ref={titleRef} className={styles.title} style={titleStyle}>
//           {title && title.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </h2>
//         <p ref={subTitleRef} className={styles.subTitle} style={subTitleStyle}>
//           {subTitle && subTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </p>
//         {buttonText && (
//           <button ref={btnRef} className={styles.btn} style={buttonStyle}>
//             {buttonText}
//           </button>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TpBanner04;








// import React, { useEffect, useRef, useState } from "react";
// import styles from "./TpBanner04.module.scss";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TpBanner04 = ({ bannerData = {} }) => {
//   const {
//     mediaUrl,
//     mediaType = "video",
//   title = "건강한 하루의 시작",
//   subTitle = "신선한 재료로 만들어지는 건강한 습관",
//     buttonText = "지금 문의d하기",
//   align = "center",
//     styles: bannerStyles = {},
//   } = bannerData;

//   const { customFonts = [] } = bannerStyles;

//   const sectionRef = useRef(null);
//   const videoRef = useRef(null);
//   const titleRef = useRef(null);
//   const subTitleRef = useRef(null);
//   const btnRef = useRef(null);
//   const [viewMode, setViewMode] = useState('is-pc');
//   const [isImageLoaded, setIsImageLoaded] = useState(false);

//   useEffect(() => {
//     if (customFonts && customFonts.length > 0) {
//       const styleId = `custom-banner-fonts`;
//       let styleTag = document.getElementById(styleId);
//       if (!styleTag) {
//         styleTag = document.createElement('style');
//         styleTag.id = styleId;
//         document.head.appendChild(styleTag);
//       }
//       styleTag.innerHTML = customFonts.map(font => font.fontFace || font.code).join('\n');
//     }
//   }, [customFonts]);

//   useEffect(() => {
//     if (mediaType === 'image' && mediaUrl) {
//       const img = new Image();
//       img.src = mediaUrl;
//       img.onload = () => setIsImageLoaded(true);
//     }
//   }, [mediaUrl, mediaType]);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const onCanPlay = () => {
//       gsap.to(video, { opacity: 1, duration: 0.8, ease: 'ease-in' });
//     };

//     gsap.set(video, { opacity: 0 });
//     video.addEventListener('canplay', onCanPlay);

//     return () => {
//       if (video) {
//         video.removeEventListener('canplay', onCanPlay);
//       }
//     };
//   }, [mediaUrl]);


//   useEffect(() => {
//     const updateResponsiveClass = () => {
//       const width = window.innerWidth;
//       setViewMode(width <= 768 ? 'is-mobile' : width <= 1200 ? 'is-tablet' : 'is-pc');
//     };
//     updateResponsiveClass();
//     window.addEventListener("resize", updateResponsiveClass);
//     return () => window.removeEventListener("resize", updateResponsiveClass);
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top 30%", once: true } });
//       tl.from(titleRef.current, { opacity: 0, y: 100, duration: 0.8, ease: "power3.out" })
//         .from(subTitleRef.current, { opacity: 0, y: 40, duration: 0.6, ease: "power3.out" }, "-=0.2")
//         .from(btnRef.current, { opacity: 0, y: 40, duration: 0.5, ease: "power3.out" }, "-=0.3");
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   const sectionClassName = `${styles.tpBanner04} ${styles[viewMode] || ''}`;

//   const getStyleObject = (styleData) => {
//     if (!styleData) return {};
//     const result = {
//         color: styleData.color,
//         fontFamily: styleData.fontFamily,
//     };
//     if (styleData.fontSize) result.fontSize = `${styleData.fontSize}px`;
//     if (styleData.marginBottom) result.marginBottom = `${styleData.marginBottom}px`;
//     if (styleData.backgroundColor) result.backgroundColor = styleData.backgroundColor;
//     return result;
//   };

//   const titleStyle = getStyleObject(bannerStyles.title);
//   const subTitleStyle = getStyleObject(bannerStyles.subTitle);
//   const buttonStyle = getStyleObject(bannerStyles.button);

//   return (
//     <section ref={sectionRef} className={sectionClassName}>
//       {mediaType === "video" && mediaUrl ? (
//         <video
//           ref={videoRef}
//           key={mediaUrl}
//           autoPlay loop muted playsInline preload="auto"
//           className={styles.background}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : mediaType === "image" && mediaUrl ? (
//         <img
//           key={mediaUrl} src={mediaUrl} alt="배경 이미지" className={styles.background}
//           style={{ objectFit: "cover", width: "100%", height: "100%", opacity: isImageLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
//         />
//       ) : null}

//       <div className={styles.text} style={{ textAlign: align }}>
//         <h2 ref={titleRef} className={styles.title} style={titleStyle}>
//           {title && title.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </h2>
//         <p ref={subTitleRef} className={styles.subTitle} style={subTitleStyle}>
//           {subTitle && subTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </p>
//         {buttonText && (
//           <button ref={btnRef} className={styles.btn} style={buttonStyle}>
//             {buttonText}
//           </button>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TpBanner04;













// import React, { useEffect, useRef, useState } from "react";
// import styles from "./TpBanner04.module.scss";

// const TpBanner04 = ({ bannerData = {} }) => {
//   // 전달받은 bannerData와 기본값을 병합하여 최종 데이터를 생성합니다.
//   // 이로써 데이터가 일부 누락되어도 안전하게 렌더링됩니다.
//   const defaultData = {
//     mediaUrl: "",
//     mediaType: "video",
//     title: "건강한 하루의 시작",
//     subTitle: "신선한 재료로 만들어지는 건강한 습관",
//     buttonText: "지금 문의하기",
//     align: "center",
//     styles: {
//       customFonts: [],
//       title: { fontSize: 48, color: '#ffffff', marginBottom: 20, fontFamily: "'Pretendard', sans-serif" },
//       subTitle: { fontSize: 18, color: '#ffffff', marginBottom: 30, fontFamily: "'Pretendard', sans-serif" },
//       button: { fontSize: 16, color: '#ffffff', backgroundColor: '#3182f6', fontFamily: "'Pretendard', sans-serif" },
//     },
//   };

//   const mergedStyles = {
//       ...defaultData.styles,
//       ...(bannerData.styles || {}),
//       title: {...defaultData.styles.title, ...(bannerData.styles?.title || {})},
//       subTitle: {...defaultData.styles.subTitle, ...(bannerData.styles?.subTitle || {})},
//       button: {...defaultData.styles.button, ...(bannerData.styles?.button || {})},
//       customFonts: bannerData.styles?.customFonts || [],
//   };

//   const data = {
//       ...defaultData,
//       ...bannerData,
//       styles: mergedStyles,
//   };

//   const {
//     mediaUrl, mediaType, title, subTitle, buttonText, align, styles: bannerStyles,
//   } = data;
  
//   const { customFonts = [] } = bannerStyles || {};
  
//   const sectionRef = useRef(null);
//   const videoRef = useRef(null);
//   const [isMediaReady, setIsMediaReady] = useState(false);
//   const [viewMode, setViewMode] = useState('is-pc');

//   useEffect(() => {
//     if (customFonts && customFonts.length > 0) {
//       const styleId = `custom-banner-fonts`;
//       let styleTag = document.getElementById(styleId);
//       if (!styleTag) {
//         styleTag = document.createElement('style');
//         styleTag.id = styleId;
//         document.head.appendChild(styleTag);
//       }
//       styleTag.innerHTML = customFonts.map(font => font.code || '').join('\n');
//     }
//   }, [customFonts]);
  
//   // 미디어(이미지/비디오)가 실제로 로드되었는지 확인하는 로직을 단순화하고 안정화했습니다.
//   useEffect(() => {
//     setIsMediaReady(false);
//     if (!mediaUrl) return;

//     if (mediaType === 'image') {
//       const img = new Image();
//       img.src = mediaUrl;
//       img.onload = () => setIsMediaReady(true);
//       img.onerror = () => console.error("배너 이미지 로딩 실패:", mediaUrl);
//     } else if (mediaType === 'video') {
//         const video = videoRef.current;
//         if(video) {
//             const handleCanPlay = () => setIsMediaReady(true);
//             video.addEventListener('canplay', handleCanPlay);
//             // 비디오가 이미 로드된 경우를 대비
//             if (video.readyState >= 3) {
//                 handleCanPlay();
//             }
//             return () => video.removeEventListener('canplay', handleCanPlay);
//         }
//     }
//   }, [mediaUrl, mediaType]);

//   useEffect(() => {
//     const updateResponsiveClass = () => {
//       const width = window.innerWidth;
//       setViewMode(width <= 768 ? 'is-mobile' : width <= 1200 ? 'is-tablet' : 'is-pc');
//     };
//     updateResponsiveClass();
//     window.addEventListener("resize", updateResponsiveClass);
//     return () => window.removeEventListener("resize", updateResponsiveClass);
//   }, []);

//   const sectionClassName = `${styles.tpBanner04} ${styles[viewMode] || ''}`;

//   return (
//     <section ref={sectionRef} className={sectionClassName}>
//       {mediaType === "video" && mediaUrl ? (
//         <video
//           ref={videoRef}
//           key={mediaUrl}
//           autoPlay loop muted playsInline preload="auto"
//           className={styles.background}
//           // isMediaReady가 true일 때만 opacity를 1로 만들어 화면에 표시합니다.
//           style={{ opacity: isMediaReady ? 1 : 0 }}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : mediaType === "image" && mediaUrl ? (
//         <div
//           key={mediaUrl}
//           className={styles.background}
//           style={{
//             backgroundImage: `url(${mediaUrl})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             opacity: isMediaReady ? 1 : 0,
//           }}
//         />
//       ) : null}

//       <div className={styles.text} style={{ textAlign: align }}>
//         <h2 className={styles.title} style={{
//           color: bannerStyles?.title?.color,
//           fontFamily: bannerStyles?.title?.fontFamily,
//           fontSize: `${bannerStyles?.title?.fontSize}px`,
//           marginBottom: `${bannerStyles?.title?.marginBottom}px`,
//         }}>
//           {title && title.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </h2>
//         <p className={styles.subTitle} style={{
//           color: bannerStyles?.subTitle?.color,
//           fontFamily: bannerStyles?.subTitle?.fontFamily,
//           fontSize: `${bannerStyles?.subTitle?.fontSize}px`,
//           marginBottom: `${bannerStyles?.subTitle?.marginBottom}px`,
//         }}>
//           {subTitle && subTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </p>
//         {buttonText && (
//           <button className={styles.btn} style={{
//             color: bannerStyles?.button?.color,
//             backgroundColor: bannerStyles?.button?.backgroundColor,
//             fontFamily: bannerStyles?.button?.fontFamily,
//             fontSize: `${bannerStyles?.button?.fontSize}px`,
//           }}>
//             {buttonText}
//           </button>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TpBanner04;

































































// //성공함 건들지마마
// import React, { useEffect, useRef, useState } from "react";
// import styles from "./TpBanner04.module.scss";

// // props를 bannerData 객체 하나로 받는 대신, 필요한 모든 데이터를 개별적으로 받도록 수정했습니다.
// const TpBanner04 = ({
//   mediaUrl,
//   mediaType = "video",
//   title = "건강한 하루의 시작",
//   subTitle = "신선한 재료로 만들어지는 건강한 습관",
//   buttonText = "지금 문의하기",
//   align = "center",
//   styles: initialStyles = {},
// }) => {
  
//   // 전달받은 개별 props와 기본값을 병합하여 최종 데이터를 생성합니다.
//   const defaultStyles = {
//     customFonts: [],
//     title: { fontSize: 48, color: '#ffffff', marginBottom: 20, fontFamily: "'Pretendard', sans-serif" },
//     subTitle: { fontSize: 18, color: '#ffffff', marginBottom: 30, fontFamily: "'Pretendard', sans-serif" },
//     button: { fontSize: 16, color: '#ffffff', backgroundColor: '#3182f6', fontFamily: "'Pretendard', sans-serif" },
//   };

//   const bannerStyles = {
//     ...defaultStyles,
//     ...initialStyles,
//     title: { ...defaultStyles.title, ...(initialStyles.title || {}) },
//     subTitle: { ...defaultStyles.subTitle, ...(initialStyles.subTitle || {}) },
//     button: { ...defaultStyles.button, ...(initialStyles.button || {}) },
//   };
  
//   const { customFonts = [] } = bannerStyles;
  
//   const sectionRef = useRef(null);
//   const videoRef = useRef(null);
//   const [isMediaReady, setIsMediaReady] = useState(false);
//   const [viewMode, setViewMode] = useState('is-pc');

//   useEffect(() => {
//     if (customFonts && customFonts.length > 0) {
//       const styleId = `custom-banner-fonts`;
//       let styleTag = document.getElementById(styleId);
//       if (!styleTag) {
//         styleTag = document.createElement('style');
//         styleTag.id = styleId;
//         document.head.appendChild(styleTag);
//       }
//       styleTag.innerHTML = customFonts.map(font => font.code || '').join('\n');
//     }
//   }, [customFonts]);
  
//   useEffect(() => {
//     setIsMediaReady(false);
//     if (!mediaUrl) return;

//     if (mediaType === 'image') {
//       const img = new Image();
//       img.src = mediaUrl;
//       img.onload = () => setIsMediaReady(true);
//       img.onerror = () => console.error("배너 이미지 로딩 실패:", mediaUrl);
//     } else if (mediaType === 'video') {
//         const video = videoRef.current;
//         if(video) {
//             const handleCanPlay = () => setIsMediaReady(true);
//             video.addEventListener('canplay', handleCanPlay);
//             if (video.readyState >= 3) { // 비디오가 이미 로드된 경우 대비
//                 handleCanPlay();
//             }
//             return () => video.removeEventListener('canplay', handleCanPlay);
//         }
//     }
//   }, [mediaUrl, mediaType]);

//   useEffect(() => {
//     const updateResponsiveClass = () => {
//       const width = window.innerWidth;
//       setViewMode(width <= 768 ? 'is-mobile' : width <= 1200 ? 'is-tablet' : 'is-pc');
//     };
//     updateResponsiveClass();
//     window.addEventListener("resize", updateResponsiveClass);
//     return () => window.removeEventListener("resize", updateResponsiveClass);
//   }, []);

//   const sectionClassName = `${styles.tpBanner04} ${styles[viewMode] || ''}`;

//   return (
//     <section ref={sectionRef} className={sectionClassName}>
//       {mediaType === "video" && mediaUrl ? (
//         <video
//           ref={videoRef}
//           key={mediaUrl}
//           autoPlay loop muted playsInline preload="auto"
//           className={styles.background}
//           style={{ opacity: isMediaReady ? 1 : 0 }}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : mediaType === "image" && mediaUrl ? (
//         <div
//           key={mediaUrl}
//           className={styles.background}
//           style={{
//             backgroundImage: `url(${mediaUrl})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             opacity: isMediaReady ? 1 : 0,
//           }}
//         />
//       ) : null}

//       <div className={styles.text} style={{ textAlign: align }}>
//         <h2 className={styles.title} style={{
//           color: bannerStyles.title.color,
//           fontFamily: bannerStyles.title.fontFamily,
//           fontSize: `${bannerStyles.title.fontSize}px`,
//           marginBottom: `${bannerStyles.title.marginBottom}px`,
//         }}>
//           {title && title.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </h2>
//         <p className={styles.subTitle} style={{
//           color: bannerStyles.subTitle.color,
//           fontFamily: bannerStyles.subTitle.fontFamily,
//           fontSize: `${bannerStyles.subTitle.fontSize}px`,
//           marginBottom: `${bannerStyles.subTitle.marginBottom}px`,
//         }}>
//           {subTitle && subTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </p>
//         {buttonText && (
//           <button className={styles.btn} style={{
//             color: bannerStyles.button.color,
//             backgroundColor: bannerStyles.button.backgroundColor,
//             fontFamily: bannerStyles.button.fontFamily,
//             fontSize: `${bannerStyles.button.fontSize}px`,
//           }}>
//             {buttonText}
//           </button>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TpBanner04;






// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import styles from "./TpBanner04.module.scss";

// const TpBanner04 = ({
//   mediaUrl,
//   mediaType = "video",
//   title = "건강한 하루의 시작",
//   subTitle = "신선한 재료로 만들어지는 건강한 습관",
//   buttonText = "지금 문의하기",
//   align = "center",
//   styles: initialStyles = {},
// }) => {
  
//   const defaultStyles = {
//     customFonts: [],
//     title: { fontSize: 48, color: '#ffffff', marginBottom: 20, fontFamily: "'Pretendard', sans-serif" },
//     subTitle: { fontSize: 18, color: '#ffffff', marginBottom: 30, fontFamily: "'Pretendard', sans-serif" },
//     button: { fontSize: 16, color: '#ffffff', backgroundColor: '#3182f6', fontFamily: "'Pretendard', sans-serif" },
//   };

//   const bannerStyles = {
//     ...defaultStyles,
//     ...initialStyles,
//     title: { ...defaultStyles.title, ...(initialStyles.title || {}) },
//     subTitle: { ...defaultStyles.subTitle, ...(initialStyles.subTitle || {}) },
//     button: { ...defaultStyles.button, ...(initialStyles.button || {}) },
//   };
  
//   const { customFonts = [] } = bannerStyles;
  
//   const sectionRef = useRef(null);
//   const videoRef = useRef(null);
//   const [isMediaReady, setIsMediaReady] = useState(false);

//   useEffect(() => {
//     if (customFonts && customFonts.length > 0) {
//       const styleId = `custom-banner-fonts`;
//       let styleTag = document.getElementById(styleId);
//       if (!styleTag) {
//         styleTag = document.createElement('style');
//         styleTag.id = styleId;
//         document.head.appendChild(styleTag);
//       }
//       styleTag.innerHTML = customFonts.map(font => font.code || '').join('\n');
//     }
//   }, [customFonts]);
  
//   useEffect(() => {
//     setIsMediaReady(false);
//     if (!mediaUrl) return;

//     if (mediaType === 'image') {
//       const img = new Image();
//       img.src = mediaUrl;
//       img.onload = () => setIsMediaReady(true);
//       img.onerror = () => console.error("배너 이미지 로딩 실패:", mediaUrl);
//     } else if (mediaType === 'video') {
//         const video = videoRef.current;
//         if(video) {
//             const handleCanPlay = () => setIsMediaReady(true);
//             video.addEventListener('canplay', handleCanPlay);
//             if (video.readyState >= 3) {
//                 handleCanPlay();
//             }
//             return () => video.removeEventListener('canplay', handleCanPlay);
//         }
//     }
//   }, [mediaUrl, mediaType]);

//   // ✅ [수정] 텍스트 애니메이션 효과 추가
//   useLayoutEffect(() => {
//     if (!sectionRef.current) return;
//     const ctx = gsap.context(() => {
//         // 클래스 이름을 정확하게 참조하도록 수정
//         const elements = [`.${styles.title}`, `.${styles.subTitle}`, `.${styles.btn}`];
//         gsap.from(elements, {
//             opacity: 0,
//             y: 40,
//             duration: 0.8,
//             ease: 'power3.out',
//             stagger: 0.2,
//         });
//     }, sectionRef);
//     return () => ctx.revert();
//   }, [title, subTitle, buttonText]); // 내용이 바뀔 때 애니메이션이 다시 실행되도록 의존성 배열 추가

//   return (
//     <section ref={sectionRef} className={styles.tpBanner04}>
//       {mediaType === "video" && mediaUrl ? (
//         <video
//           ref={videoRef}
//           key={mediaUrl}
//           autoPlay loop muted playsInline preload="auto"
//           className={styles.background}
//           style={{ opacity: isMediaReady ? 1 : 0 }}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : mediaType === "image" && mediaUrl ? (
//         <div
//           key={mediaUrl}
//           className={styles.background}
//           style={{
//             backgroundImage: `url(${mediaUrl})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             opacity: isMediaReady ? 1 : 0,
//           }}
//         />
//       ) : null}

//       <div className={styles.text} style={{ textAlign: align }}>
//         <h2 className={styles.title} style={{
//           color: bannerStyles.title.color,
//           fontFamily: bannerStyles.title.fontFamily,
//           '--base-font-size': `${bannerStyles.title.fontSize}px`,
//           marginBottom: `${bannerStyles.title.marginBottom}px`,
//         }}>
//           {title && title.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </h2>
//         <p className={styles.subTitle} style={{
//           color: bannerStyles.subTitle.color,
//           fontFamily: bannerStyles.subTitle.fontFamily,
//           '--base-font-size': `${bannerStyles.subTitle.fontSize}px`,
//           marginBottom: `${bannerStyles.subTitle.marginBottom}px`,
//         }}>
//           {subTitle && subTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </p>
//         {buttonText && (
//           <button className={styles.btn} style={{
//             color: bannerStyles.button.color,
//             backgroundColor: bannerStyles.button.backgroundColor,
//             fontFamily: bannerStyles.button.fontFamily,
//             '--base-font-size': `${bannerStyles.button.fontSize}px`,
//           }}>
//             {buttonText}
//           </button>
//         )}
//       </div>
//     </section>
//   );
// };

// // export default TpBanner04;
// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import styles from "./TpBanner04.module.scss";

// const TpBanner04 = ({
//   mediaUrl,
//   mediaType = "video",
//   title = "건강한 하루의 시작",
//   subTitle = "신선한 재료로 만들어지는 건강한 습관",
//   buttonText = "지금 문의하기",
//   align = "center",
//   styles: initialStyles = {},
// }) => {
  
//   const defaultStyles = {
//     customFonts: [],
//     title: { fontSize: 48, color: '#ffffff', marginBottom: 20, fontFamily: "'Pretendard', sans-serif" },
//     subTitle: { fontSize: 18, color: '#ffffff', marginBottom: 30, fontFamily: "'Pretendard', sans-serif" },
//     button: { fontSize: 16, color: '#ffffff', backgroundColor: '#3182f6', fontFamily: "'Pretendard', sans-serif" },
//   };

//   const bannerStyles = {
//     ...defaultStyles,
//     ...initialStyles,
//     title: { ...defaultStyles.title, ...(initialStyles.title || {}) },
//     subTitle: { ...defaultStyles.subTitle, ...(initialStyles.subTitle || {}) },
//     button: { ...defaultStyles.button, ...(initialStyles.button || {}) },
//   };
  
//   const { customFonts = [] } = bannerStyles;
  
//   const sectionRef = useRef(null);
//   const videoRef = useRef(null);
//   const [isMediaReady, setIsMediaReady] = useState(false);

//   useEffect(() => {
//     if (customFonts && customFonts.length > 0) {
//       const styleId = `custom-banner-fonts`;
//       let styleTag = document.getElementById(styleId);
//       if (!styleTag) {
//         styleTag = document.createElement('style');
//         styleTag.id = styleId;
//         document.head.appendChild(styleTag);
//       }
//       styleTag.innerHTML = customFonts.map(font => font.code || '').join('\n');
//     }
//   }, [customFonts]);
  
//   useEffect(() => {
//     setIsMediaReady(false);
//     if (!mediaUrl) return;

//     if (mediaType === 'image') {
//       const img = new Image();
//       img.src = mediaUrl;
//       img.onload = () => setIsMediaReady(true);
//       img.onerror = () => console.error("배너 이미지 로딩 실패:", mediaUrl);
//     } else if (mediaType === 'video') {
//         const video = videoRef.current;
//         if(video) {
//             const handleCanPlay = () => setIsMediaReady(true);
//             video.addEventListener('canplay', handleCanPlay);
//             if (video.readyState >= 3) {
//                 handleCanPlay();
//             }
//             return () => video.removeEventListener('canplay', handleCanPlay);
//         }
//     }
//   }, [mediaUrl, mediaType]);

//   useLayoutEffect(() => {
//     if (!sectionRef.current) return;
//     const ctx = gsap.context(() => {
//         const elements = [`.${styles.title}`, `.${styles.subTitle}`, `.${styles.btn}`];
//         gsap.from(elements, {
//             opacity: 0,
//             y: 40,
//             duration: 0.8,
//             ease: 'power3.out',
//             stagger: 0.2,
//         });
//     }, sectionRef);
//     return () => ctx.revert();
//   }, [title, subTitle, buttonText]);

//   return (
//     <section ref={sectionRef} className={styles.tpBanner04}>
//       {mediaType === "video" && mediaUrl ? (
//         <video
//           ref={videoRef}
//           key={mediaUrl}
//           autoPlay loop muted playsInline preload="auto"
//           className={styles.background}
//           style={{ opacity: isMediaReady ? 1 : 0 }}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : mediaType === "image" && mediaUrl ? (
//         <div
//           key={mediaUrl}
//           className={styles.background}
//           style={{
//             backgroundImage: `url(${mediaUrl})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             opacity: isMediaReady ? 1 : 0,
//           }}
//         />
//       ) : null}

//       <div className={styles.text} style={{ textAlign: align }}>
//         <h2 className={styles.title} style={{
//           color: bannerStyles.title.color,
//           fontFamily: bannerStyles.title.fontFamily,
//           '--base-font-size': `${bannerStyles.title.fontSize}px`,
//           marginBottom: `${bannerStyles.title.marginBottom}px`,
//         }}>
//           {title && title.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </h2>
//         <p className={styles.subTitle} style={{
//           color: bannerStyles.subTitle.color,
//           fontFamily: bannerStyles.subTitle.fontFamily,
//           '--base-font-size': `${bannerStyles.subTitle.fontSize}px`,
//           marginBottom: `${bannerStyles.subTitle.marginBottom}px`,
//         }}>
//           {subTitle && subTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </p>
//         {buttonText && (
//           <button className={styles.btn} style={{
//             color: bannerStyles.button.color,
//             backgroundColor: bannerStyles.button.backgroundColor,
//             fontFamily: bannerStyles.button.fontFamily,
//             '--base-font-size': `${bannerStyles.button.fontSize}px`,
//           }}>
//             {buttonText}
//           </button>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TpBanner04;
//gsap 수정본
// 성공함
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import styles from "./TpBanner04.module.scss";

// const TpBanner04 = ({
//   mediaUrl,
//   mediaType = "video",
//   title = "건강한 하루의 시작",
//   subTitle = "신선한 재료로 만들어지는 건강한 습관",
//   buttonText = "지금 문의하기",
//   align = "center",
//   styles: initialStyles = {},
// }) => {
  
//   const defaultStyles = {
//     customFonts: [],
//     title: { fontSize: 48, color: '#ffffff', marginBottom: 20, fontFamily: "'Pretendard', sans-serif" },
//     subTitle: { fontSize: 18, color: '#ffffff', marginBottom: 30, fontFamily: "'Pretendard', sans-serif" },
//     button: { fontSize: 16, color: '#ffffff', backgroundColor: '#3182f6', fontFamily: "'Pretendard', sans-serif" },
//   };

//   const bannerStyles = {
//     ...defaultStyles,
//     ...initialStyles,
//     title: { ...defaultStyles.title, ...(initialStyles.title || {}) },
//     subTitle: { ...defaultStyles.subTitle, ...(initialStyles.subTitle || {}) },
//     button: { ...defaultStyles.button, ...(initialStyles.button || {}) },
//   };
  
//   const { customFonts = [] } = bannerStyles;
  
//   const sectionRef = useRef(null);
//   const videoRef = useRef(null);
//   const [isMediaReady, setIsMediaReady] = useState(false);

//   useEffect(() => {
//     if (customFonts && customFonts.length > 0) {
//       const styleId = `custom-banner-fonts`;
//       let styleTag = document.getElementById(styleId);
//       if (!styleTag) {
//         styleTag = document.createElement('style');
//         styleTag.id = styleId;
//         document.head.appendChild(styleTag);
//       }
//       styleTag.innerHTML = customFonts.map(font => font.code || '').join('\n');
//     }
//   }, [customFonts]);
  
//   useEffect(() => {
//     setIsMediaReady(false);
//     if (!mediaUrl) return;

//     if (mediaType === 'image') {
//       const img = new Image();
//       img.src = mediaUrl;
//       img.onload = () => setIsMediaReady(true);
//       img.onerror = () => console.error("배너 이미지 로딩 실패:", mediaUrl);
//     } else if (mediaType === 'video') {
//         const video = videoRef.current;
//         if(video) {
//             const handleCanPlay = () => setIsMediaReady(true);
//             video.addEventListener('canplay', handleCanPlay);
//             if (video.readyState >= 3) {
//                 handleCanPlay();
//             }
//             return () => video.removeEventListener('canplay', handleCanPlay);
//         }
//     }
//   }, [mediaUrl, mediaType]);

//   // ✅ 화면에 보일 때만 애니메이션을 실행하도록 수정된 부분입니다.
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     // 1. 애니메이션 대상 요소들을 선택합니다.
//     const elements = [
//       section.querySelector(`.${styles.title}`),
//       section.querySelector(`.${styles.subTitle}`),
//       section.querySelector(`.${styles.btn}`),
//     ].filter(Boolean);

//     // 2. 초기 상태를 설정합니다 (투명하고, 아래에 위치).
//     gsap.set(elements, { opacity: 0, y: 30 });

//     // 3. Intersection Observer로 section이 화면에 나타나는지 감시합니다.
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           // 4. section이 화면에 20% 이상 보이면 애니메이션을 실행합니다.
//           if (entry.isIntersecting) {
//             gsap.to(elements, {
//               opacity: 1,
//               y: 0,
//               duration: 0.8,
//               ease: 'power3.out',
//               stagger: 0.2,
//             });
//             // 5. 애니메이션은 한 번만 실행되도록 감시를 중단합니다.
//             observer.unobserve(section);
//           }
//         });
//       },
//       { threshold: 0.6 } // 요소가 20% 보였을 때 콜백을 실행합니다.
//     );

//     observer.observe(section);

//     // 6. 컴포넌트가 사라질 때 observer를 정리합니다.
//     return () => {
//       if (section) {
//         observer.unobserve(section);
//       }
//     };
//   }, [title, subTitle, buttonText, align]);


//   return (
//     <section ref={sectionRef} className={styles.tpBanner04}>
//       {mediaType === "video" && mediaUrl ? (
//         <video
//           ref={videoRef}
//           key={mediaUrl}
//           autoPlay loop muted playsInline preload="auto"
//           className={styles.background}
//           style={{ opacity: isMediaReady ? 1 : 0 }}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : mediaType === "image" && mediaUrl ? (
//         <div
//           key={mediaUrl}
//           className={styles.background}
//           style={{
//             backgroundImage: `url(${mediaUrl})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             opacity: isMediaReady ? 1 : 0,
//           }}
//         />
//       ) : null}

//       <div className={styles.text} style={{ textAlign: align }}>
//         <h2 className={styles.title} style={{
//           color: bannerStyles.title.color,
//           fontFamily: bannerStyles.title.fontFamily,
//           '--base-font-size': `${bannerStyles.title.fontSize}px`,
//           marginBottom: `${bannerStyles.title.marginBottom}px`,
//         }}>
//           {title && title.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </h2>
//         <p className={styles.subTitle} style={{
//           color: bannerStyles.subTitle.color,
//           fontFamily: bannerStyles.subTitle.fontFamily,
//           '--base-font-size': `${bannerStyles.subTitle.fontSize}px`,
//           marginBottom: `${bannerStyles.subTitle.marginBottom}px`,
//         }}>
//           {subTitle && subTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </p>
//         {buttonText && (
//           <button className={styles.btn} style={{
//             color: bannerStyles.button.color,
//             backgroundColor: bannerStyles.button.backgroundColor,
//             fontFamily: bannerStyles.button.fontFamily,
//             '--base-font-size': `${bannerStyles.button.fontSize}px`,
//           }}>
//             {buttonText}
//           </button>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TpBanner04;



//성공공
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import styles from "./TpBanner04.module.scss";

// const TpBanner04 = ({
//   mediaUrl,
//   mediaType = "video",
//   title = "건강한 하루의 시작",
//   subTitle = "신선한 재료로 만들어지는 건강한 습관",
//   buttonText = "지금 문의하기",
//   align = "center",
//   styles: initialStyles = {},
// }) => {
  
//   const defaultStyles = {
//     customFonts: [],
//     title: { fontSize: 48, color: '#ffffff', marginBottom: 20, fontFamily: "'Pretendard', sans-serif" },
//     subTitle: { fontSize: 18, color: '#ffffff', marginBottom: 30, fontFamily: "'Pretendard', sans-serif" },
//     button: { fontSize: 16, color: '#ffffff', backgroundColor: '#3182f6', fontFamily: "'Pretendard', sans-serif" },
//   };

//   const bannerStyles = {
//     ...defaultStyles,
//     ...initialStyles,
//     title: { ...defaultStyles.title, ...(initialStyles.title || {}) },
//     subTitle: { ...defaultStyles.subTitle, ...(initialStyles.subTitle || {}) },
//     button: { ...defaultStyles.button, ...(initialStyles.button || {}) },
//   };
  
//   const { customFonts = [] } = bannerStyles;
  
//   const sectionRef = useRef(null);
//   const videoRef = useRef(null);
//   const [isMediaReady, setIsMediaReady] = useState(false);

//   useEffect(() => {
//     if (customFonts && customFonts.length > 0) {
//       const styleId = `custom-banner-fonts`;
//       let styleTag = document.getElementById(styleId);
//       if (!styleTag) {
//         styleTag = document.createElement('style');
//         styleTag.id = styleId;
//         document.head.appendChild(styleTag);
//       }
//       styleTag.innerHTML = customFonts.map(font => font.code || '').join('\n');
//     }
//   }, [customFonts]);
  
//   useEffect(() => {
//     setIsMediaReady(false);
//     if (!mediaUrl) return;

//     if (mediaType === 'image') {
//       const img = new Image();
//       img.src = mediaUrl;
//       img.onload = () => setIsMediaReady(true);
//       img.onerror = () => console.error("배너 이미지 로딩 실패:", mediaUrl);
//     } else if (mediaType === 'video') {
//         const video = videoRef.current;
//         if(video) {
//             const handleCanPlay = () => setIsMediaReady(true);
//             video.addEventListener('canplay', handleCanPlay);
//             if (video.readyState >= 3) {
//                 handleCanPlay();
//             }
//             return () => video.removeEventListener('canplay', handleCanPlay);
//         }
//     }
//   }, [mediaUrl, mediaType]);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const elements = [
//       section.querySelector(`.${styles.title}`),
//       section.querySelector(`.${styles.subTitle}`),
//       section.querySelector(`.${styles.btn}`),
//     ].filter(Boolean);

//     gsap.set(elements, { opacity: 0, y: 30 });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             gsap.to(elements, {
//               opacity: 1,
//               y: 0,
//               duration: 0.8,
//               ease: 'power3.out',
//               stagger: 0.2,
//             });
//             observer.unobserve(section);
//           }
//         });
//       },
//       { threshold: 0.2 } 
//     );

//     observer.observe(section);

//     return () => {
//       if (section) {
//         observer.unobserve(section);
//       }
//     };
//   }, [title, subTitle, buttonText, align]);


//   return (
//     <section ref={sectionRef} className={styles.tpBanner04}>
//       {mediaType === "video" && mediaUrl ? (
//         <video
//           ref={videoRef}
//           key={mediaUrl}
//           autoPlay loop muted playsInline preload="auto"
//           className={styles.background}
//           style={{ opacity: isMediaReady ? 1 : 0 }}
//         >
//           <source src={mediaUrl} type="video/mp4" />
//         </video>
//       ) : mediaType === "image" && mediaUrl ? (
//         <div
//           key={mediaUrl}
//           className={styles.background}
//           style={{
//             backgroundImage: `url(${mediaUrl})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             opacity: isMediaReady ? 1 : 0,
//           }}
//         />
//       ) : null}

//       <div className={styles.text} style={{ textAlign: align }}>
//         <h2 className={styles.title} style={{
//           color: bannerStyles.title.color,
//           fontFamily: bannerStyles.title.fontFamily,
//           '--base-font-size': `${bannerStyles.title.fontSize}px`,
//           marginBottom: `${bannerStyles.title.marginBottom}px`,
//         }}>
//           {title && title.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </h2>
//         <p className={styles.subTitle} style={{
//           color: bannerStyles.subTitle.color,
//           fontFamily: bannerStyles.subTitle.fontFamily,
//           '--base-font-size': `${bannerStyles.subTitle.fontSize}px`,
//           marginBottom: `${bannerStyles.subTitle.marginBottom}px`,
//         }}>
//           {subTitle && subTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
//         </p>
//         {buttonText && (
//           <button className={styles.btn} style={{
//             color: bannerStyles.button.color,
//             backgroundColor: bannerStyles.button.backgroundColor,
//             fontFamily: bannerStyles.button.fontFamily,
//             '--base-font-size': `${bannerStyles.button.fontSize}px`,
//           }}>
//             {buttonText}
//           </button>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TpBanner04;
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./TpBanner04.module.scss";

const TpBanner04 = ({
  mediaUrl,
  mediaType = "video",
  title = "건강한 하루의 시작",
  subTitle = "신선한 재료로 만들어지는 건강한 습관",
  buttonText = "지금 문의하기",
  align = "center",
  styles: initialStyles = {},
}) => {
  
  const defaultStyles = {
    customFonts: [],
    title: { fontSize: 48, color: '#ffffff', marginBottom: 20, fontFamily: "'Pretendard', sans-serif" },
    subTitle: { fontSize: 18, color: '#ffffff', marginBottom: 30, fontFamily: "'Pretendard', sans-serif" },
    button: { fontSize: 16, color: '#ffffff', backgroundColor: '#3182f6', fontFamily: "'Pretendard', sans-serif" },
  };

  const bannerStyles = {
    ...defaultStyles,
    ...initialStyles,
    title: { ...defaultStyles.title, ...(initialStyles.title || {}) },
    subTitle: { ...defaultStyles.subTitle, ...(initialStyles.subTitle || {}) },
    button: { ...defaultStyles.button, ...(initialStyles.button || {}) },
  };
  
  const { customFonts = [] } = bannerStyles;
  
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isMediaReady, setIsMediaReady] = useState(false);

  useEffect(() => {
    if (customFonts && customFonts.length > 0) {
      const styleId = `custom-banner-fonts`;
      let styleTag = document.getElementById(styleId);
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = styleId;
        document.head.appendChild(styleTag);
      }
      styleTag.innerHTML = customFonts.map(font => font.code || '').join('\n');
    }
  }, [customFonts]);
  
  useEffect(() => {
    setIsMediaReady(false);
    if (!mediaUrl) return;

    if (mediaType === 'image') {
      const img = new Image();
      img.src = mediaUrl;
      img.onload = () => setIsMediaReady(true);
      img.onerror = () => console.error("배너 이미지 로딩 실패:", mediaUrl);
    } else if (mediaType === 'video') {
        const video = videoRef.current;
        if(video) {
            const handleCanPlay = () => setIsMediaReady(true);
            video.addEventListener('canplay', handleCanPlay);
            if (video.readyState >= 3) {
                handleCanPlay();
            }
            return () => video.removeEventListener('canplay', handleCanPlay);
        }
    }
  }, [mediaUrl, mediaType]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = [
      section.querySelector(`.${styles.title}`),
      section.querySelector(`.${styles.subTitle}`),
      section.querySelector(`.${styles.btn}`),
    ].filter(Boolean);

    gsap.set(elements, { opacity: 0, y: 30 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.2,
            });
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.2 } 
    );

    observer.observe(section);

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [title, subTitle, buttonText, align]);


  return (
    <section ref={sectionRef} className={styles.tpBanner04}>
      {mediaType === "video" && mediaUrl ? (
        <video
          ref={videoRef}
          key={mediaUrl}
          autoPlay loop muted playsInline preload="auto"
          className={styles.background}
          style={{ opacity: isMediaReady ? 1 : 0 }}
        >
          <source src={mediaUrl} type="video/mp4" />
        </video>
      ) : mediaType === "image" && mediaUrl ? (
        <div
          key={mediaUrl}
          className={styles.background}
          style={{
            backgroundImage: `url(${mediaUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: isMediaReady ? 1 : 0,
          }}
        />
      ) : null}

      <div className={styles.text} style={{ textAlign: align }}>
        <h2 className={styles.title} style={{
          color: bannerStyles.title.color,
          fontFamily: bannerStyles.title.fontFamily,
          '--base-font-size': `${bannerStyles.title.fontSize}px`,
          '--base-margin-bottom': `${bannerStyles.title.marginBottom}px`,
        }}>
          {title && title.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
        </h2>
        <p className={styles.subTitle} style={{
          color: bannerStyles.subTitle.color,
          fontFamily: bannerStyles.subTitle.fontFamily,
          '--base-font-size': `${bannerStyles.subTitle.fontSize}px`,
          '--base-margin-bottom': `${bannerStyles.subTitle.marginBottom}px`,
        }}>
          {subTitle && subTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
        </p>
        {buttonText && (
          <button className={styles.btn} style={{
            color: bannerStyles.button.color,
            backgroundColor: bannerStyles.button.backgroundColor,
            fontFamily: bannerStyles.button.fontFamily,
            '--base-font-size': `${bannerStyles.button.fontSize}px`,
          }}>
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default TpBanner04;