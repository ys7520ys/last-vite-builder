// import React from "react";
// import styles from "./TpSection04.module.scss";

// const TpSection04 = ({
//   titleText = "기본 타이틀",
//   subTitleText = "기본 서브타이틀",
//   boxes = [],
//   align = "center",
//   isPreview = false
// }) => {
//   return (
//     <section className={styles.tpSection04}>
//       <div className={styles.tpSection04__titleArea} style={{ textAlign: align }}>
//         <h2 className="titleText">{titleText}</h2>
//         <p className="subTitleText">{subTitleText}</p>
//       </div>
//       <div className={styles.tpSection04__container}>
//         {boxes.map((box, idx) => (
//           <div className={styles.box} key={idx}>
//             <div
//               className={styles.box__img}
//               style={{ backgroundImage: `url(${box.imageClass})` }}
//             />
//             <div className={styles.box__title}>{box.title}</div>
//             <div className={styles.box__subTitle}>{box.subtitle}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TpSection04;



"use client";

import React, { useEffect, useRef } from "react";
// import styles from "./TpSection04.module.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TpSection04 = ({
  titleText = "기본 타이틀",
  subTitleText = "기본 서브타이틀",
  boxes = [],
  align = "center",
}) => {
  const sectionRef = useRef(null);

  // ✅ 반응형 클래스 설정
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

  // ✅ 스크롤 애니메이션 (줄 단위로 등장)
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 타이틀 애니메이션
      gsap.from(`.${styles.tpSection04__titleArea}`, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      const container = sectionRef.current.querySelector(`.${styles.tpSection04__container}`);
      const items = Array.from(container.querySelectorAll(`.${styles.box}`));

      let itemsPerRow = 3;
      const width = window.innerWidth;
      if (width <= 600) {
        itemsPerRow = 1;
      } else if (width <= 1024) {
        itemsPerRow = 2;
      }

      for (let i = 0; i < items.length; i += itemsPerRow) {
        const group = items.slice(i, i + itemsPerRow);
        gsap.from(group, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: group[0],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [boxes]); // ✅ boxes 바뀌면 다시 적용
  

  return (
    <section ref={sectionRef} className={styles.tpSection04}>
      <div className={styles.tpSection04__titleArea} style={{ textAlign: align }}>
        <h2 className={styles.titleText}>
          {titleText.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        <p className={styles.subTitleText}>
          {subTitleText.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>

      <div className={styles.tpSection04__container}>
        {boxes.map((box, idx) => (
          <div className={styles.box} key={idx}>
            <div
              className={styles.box__img}
              style={{ backgroundImage: `url(${box.imageClass})` }}
            />
            <div className={styles.box__title}>{box.title}</div>
            <div className={styles.box__subTitle}>{box.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TpSection04;
