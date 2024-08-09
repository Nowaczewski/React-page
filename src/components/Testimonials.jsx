import React from "react";

import Slider from "react-slick";

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    // add testimonials of people from LinkedIn

    {
      name: "Josie Franklin",
      position: "Worked in a project together",
      src: "images/testimonial/client-sm-3.jpg",
      desc: "Jack is a tenacious and enthusiastic developer that I have thoroughly enjoyed working with. During our time as colleagues, he took every opportunity to join my coding sessions and displayed unparalleled determination while finding solutions for whatever issues we faced. Jack served as an inspiration when I found myself facing a difficult problem, and was incredible support when we worked on our project, SiteSeers, together. I would jump at any opportunity to work with him again, and would certainly recommend him for any team..",
      rating: 5,
    },
    {
      name: "Chip Hill",
      position: "Former Partner in SiteSeers",
      src: "images/testimonial/client-sm-1.jpg",
      desc: "I worked with Jack on a class project, building a MERN stack application for locating and renting campsites. Even while Jack was working full-time, he provided critical front-end code to bring the project to completion. To take on the rigors of an intense Coding Boot Camp program while working a full-time job, and to provide the commitment to our team to deliver on the SiteSeers project, which was an ambitious undertaking, speaks to Jack's dedication to his team, and to discipline of character. I would welcome any opportunity to work with Jack again, and I know he is an asset to any team.",
      rating: 5,
    },
    {
      name: "Hannah Nicks",
      position: "Worked in the same group",
      src: "images/testimonial/client-sm-2.jpg",
      desc: "Jack is an exceptional developer. I had the pleasure of viewing some of his projects and not only are they pleasing to the eye, they are efficient and coded well. Jack is hardworking, a team player, and would be a great addition to any team!",
      rating: 5,
    },
    {
      name: "Jorge Monteagudo",
      position: "Former Partner in Furbaby Finder and SiteSeers",
      src: "images/testimonial/client-sm-4.jpg",
      desc: "I am delighted to recommend Jack for any software development position. I had the pleasure of working with him on several coding projects during the UNC Coding Bootcamp, and I can attest to his programming skills and work ethic. Jack is an exceptional team player who is always willing to lend a helping hand when needed. He has a good eye for detail and takes pride in delivering clean, concise, and efficient code. He is a team player who meets deadlines with ease. What sets Jack apart is his empathetic approach to software development. He understands that code is not just about solving technical problems, but also about creating solutions that meet the needs of end-users. He has a strong desire to build software that is not only functional but also user-friendly and enjoyable to use.",
      rating: 5,
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Testimonial
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Peer Speak
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      className="img-fluid rounded-circle border d-inline-block w-auto"
                      src={value.src}
                      alt=""
                    />
                    <p className="ms-3 mb-0">
                      <strong
                        className={
                          "d-block fw-600 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        {value.name}
                      </strong>
                      <span className="text-muted fw-500">
                        {" "}
                        {value.position}{" "}
                      </span>
                    </p>
                  </div>
                  <p
                    className={
                      " fw-500 mb-4 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.desc}”
                  </p>
                  <span className="text-2">
                    {[...Array(value.rating)].map((value, i) => (
                      <i className="fas fa-star text-warning" key={i} />
                    ))}
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
