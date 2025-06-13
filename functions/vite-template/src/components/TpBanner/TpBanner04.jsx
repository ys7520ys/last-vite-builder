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

//   // ✅ GSAP ScrollTrigger 애니메이션
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

//   // ✅ mediaUrl이 blob:이면 렌더링 방지
//   const isValidMediaUrl = typeof mediaUrl === "string" && !mediaUrl.startsWith("blob:");

//   return (
//     <section ref={sectionRef} className={styles.tpBanner04}>
//       {isValidMediaUrl && mediaType === "video" && (
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
//       )}

//       {isValidMediaUrl && mediaType === "image" && (
//         <img
//           src={mediaUrl}
//           alt="배경 이미지"
//           className={styles.tpBanner04__background}
//           loading="lazy"
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
  const [mediaLoaded, setMediaLoaded] = useState(false);

  // ✅ 반응형 클래스
  useEffect(() => {
    const updateResponsiveClass = () => {
      if (!sectionRef.current) return;
      sectionRef.current.classList.remove("is-mobile", "is-tablet", "is-pc");

      const width = window.innerWidth;
      if (width <= 768) {
        sectionRef.current.classList.add("is-mobile");
      } else if (width <= 1200) {
        sectionRef.current.classList.add("is-tablet");
      } else {
        sectionRef.current.classList.add("is-pc");
      }
    };

    updateResponsiveClass();
    window.addEventListener("resize", updateResponsiveClass);
    return () => window.removeEventListener("resize", updateResponsiveClass);
  }, []);

  // ✅ GSAP 애니메이션
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          once: true,
        },
      })
        .from(`.${styles.title}`, {
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(`.${styles.subTitle}`, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.2")
        .from(`.${styles.btn}`, {
          opacity: 0,
          y: 40,
          duration: 0.5,
          ease: "power3.out",
        }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ✅ blob: 주소는 렌더링 제외
  const isValidMediaUrl = typeof mediaUrl === "string" && !mediaUrl.startsWith("blob:");

  return (
    <section ref={sectionRef} className={styles.tpBanner04}>
      {/* ✅ 배경 영상 */}
      {isValidMediaUrl && mediaType === "video" && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={styles.tpBanner04__background}
          onLoadedData={() => setMediaLoaded(true)}
          style={{
            opacity: mediaLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={mediaUrl} type="video/mp4" />
        </video>
      )}

      {/* ✅ 배경 이미지 */}
      {isValidMediaUrl && mediaType === "image" && (
        <img
          src={mediaUrl}
          alt="배경 이미지"
          className={styles.tpBanner04__background}
          loading="eager"
          onLoad={() => setMediaLoaded(true)}
          style={{
            opacity: mediaLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      )}

      {/* ✅ 텍스트 콘텐츠 */}
      <div
        className={styles.tpBanner04__text}
        style={{
          textAlign: align,
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2 className={styles.title}>
          {title.split("\n").map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h2>
        <p className={styles.subTitle}>
          {subTitle.split("\n").map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </p>
        <button className={styles.btn}>{buttonText}</button>
      </div>
    </section>
  );
};

export default TpBanner04;
