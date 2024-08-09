import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details for personal profile
  const services = [
    {
      name: "Graphic Design",
      desc: "With a keen eye for detail and a passion for visual storytelling, I specialize in creating compelling designs that captivate audiences and communicate clear messages. My expertise spans a variety of design disciplines, including branding, digital media, and print design. Whether crafting logos, designing websites, or developing marketing collateral, I bring creativity and strategic thinking to every project, ensuring that each design is not only visually stunning but also purpose-driven and aligned with brand goals.",
      icon: "fas fa-palette",
    },
    {
      name: "Web Design",
      desc: "As a web designer, I combine creativity with technical expertise to build visually appealing, user-friendly, and responsive websites. I focus on delivering seamless user experiences through intuitive navigation, clean layouts, and engaging visuals. My skill set includes HTML, CSS, JavaScript, and various web design tools, enabling me to create custom designs that meet the unique needs of each client. Whether it's a personal blog, a corporate website, or an e-commerce platform, I strive to create web solutions that are both aesthetically pleasing and functionally robust.",
      icon: "fas fa-desktop",
    },
    {
      name: "UI/UX Design",
      desc: "I am passionate about crafting intuitive and engaging user experiences that connect with users on a deeper level. With a strong foundation in both UI and UX design principles, I focus on creating interfaces that are not only visually appealing but also user-centered and functional. I conduct thorough user research, develop wireframes, and build interactive prototypes to ensure that each design is tailored to the needs and behaviors of the target audience. My goal is to bridge the gap between aesthetics and usability, delivering digital products that are easy to use and delightful to interact with.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Business Analysis",
      desc: "As a Business Analyst, I help businesses understand their needs and find the right solutions to meet their goals. I gather and analyze data, identify key requirements, and work closely with stakeholders to ensure that projects stay on track. My focus is on improving processes and helping teams make informed decisions that drive success. With a practical approach and a clear understanding of business operations, I aim to deliver solutions that are effective and easy to implement.",
      icon: "fas fa-chart-area",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
