import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  Header,
  Footer,
  Banner,
  Blog,
  MeetOurTeam,
  Gallery,
  Join,
} from "../newComponent";
import jsCookies from "js-cookie";
import styles from "../styles/Home.module.css";
import BlogStyle from "../styles/blog.module.css";
import BlogCardJson from "../json/BlogCard.json";
import { Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TeamStyle from "../styles/meetOurTeam.module.css";
import TeamJson from "../json/Team.json";

export default function Home() {
  const [color, setColor] = useState(false);
  const colorThem = () => {
    setColor(!color);
    console.log("hello");
  };
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header changeColor={() => colorThem()} color={color} />
      <Banner color={color} />
      <div
        className={BlogStyle.blogMainDiv}
        style={{ backgroundColor: color ? "black" : "  #FFFFFF" }}
      >
        <h1
          className={BlogStyle.title}
          style={{ color: color ? "white" : " rgba(34, 52, 61, 0.8)" }}
        >
          From OUR{" "}
          <span
            className={BlogStyle.titleSpan}
            style={{ color: color ? "white" : "#80C4D3" }}
          >
            Blog
          </span>
        </h1>
        <Row>
          {BlogCardJson.map((item, index) => {
            if (index < 3) {
              return (
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={6}
                  sx={12}
                  className={BlogStyle.col}
                  key={index + "BlogCard"}
                >
                  <Blog color={color} item={item} index={index} />
                </Col>
              );
            }
          })}
          <div className={BlogStyle.btnDiv}>
            <button className={BlogStyle.btn}>
              <span className={BlogStyle.btnSpan}>More Articles &rarr;</span>
            </button>
          </div>
        </Row>
      </div>
      <div
        className={TeamStyle.paddingDiv}
        style={{
          backgroundColor: color ? "black" : "#EDEDED",
        }}
      >
        <h1
          className={TeamStyle.heading}
          style={{ color: color ? "white" : " rgba(34, 52, 61, 0.7)" }}
        >
          Meet Our
          <span
            className={TeamStyle.headingSpan}
            style={{ color: color ? "white" : " #80C4D3" }}
          >
            Staff
          </span>
        </h1>
        <Row>
          <Slider {...settings}>
            {TeamJson.map((item, index) => {
              return (
                <Col
                  xl={3}
                  lg={3}
                  md={6}
                  sm={6}
                  xs={12}
                  key={index + "team"}
                  className={TeamStyle.col}
                >
                  <MeetOurTeam item={item} color={color} />
                </Col>
              );
            })}
          </Slider>
        </Row>
      </div>
      <Gallery color={color} />
      <Join color={color} />
      <Footer color={color} />
    </div>
  );
}