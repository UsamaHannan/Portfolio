import "./styles/Work.css";
import { useEffect } from "react";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    const workContainer = document.querySelector(
      ".work-container"
    ) as HTMLElement | null;
    const workFlex = document.querySelector(".work-flex") as HTMLElement | null;
    if (!workContainer || !workFlex) return;

    const calculateWidth = () => {
      const styles = window.getComputedStyle(workFlex);
      const marginLeft = parseInt(styles.marginLeft) || 0;
      const paddingRight = parseInt(styles.paddingRight) || 0;
      return Math.max(
        0,
        workFlex.scrollWidth - workContainer.clientWidth +
          Math.abs(marginLeft) +
          paddingRight
      );
    };

    let translateX = calculateWidth();
    const refreshWidths = () => {
      translateX = calculateWidth();
    };

    const animation = gsap.to(workFlex, {
      x: () => -translateX,
      ease: "none",
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX + workContainer.offsetHeight}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        id: "work",
        onRefresh: () => {
          refreshWidths();
        },
      },
    });

    const handleResize = () => {
      refreshWidths();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      animation.kill();
      ScrollTrigger.getById("work")?.kill();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  const projects = [
    {
      name: "Focal Tonics",
      category: "Web & Brand Design",
      tools: "Figma, Illustrator, UI Design",
      image: "/images/focal_tonics.png"
    },
    {
      name: "Everie",
      category: "Mobile UI/UX Design",
      tools: "Figma, Prototyping, Mobile App",
      image: "/images/everie.png"
    },
    {
      name: "Genie",
      category: "SaaS Dashboard Design",
      tools: "Figma, Web Design, UI Components",
      image: "/images/genie.png"
    },
    {
      name: "VFairs",
      category: "Virtual Event Platform",
      tools: "Figma, User Flows, Web App",
      image: "/images/vfairs.png"
    },
    {
      name: "Frank",
      category: "Corporate Branding",
      tools: "Brand Strategy, Visual Identity",
      image: "/images/frank.png"
    },
    {
      name: "Flowstate",
      category: "Creative Music Web App",
      tools: "UI/UX Design, Framer, Motion",
      image: "/images/flowstate.png"
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
