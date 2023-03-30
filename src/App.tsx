import { useState, ReactDOM } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function App() {
  const { t } = useTranslation();

  function onChange(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <div className="home">
        <div className="homeD">
          <div className="Head">
            <img
              className="imgL"
              src="https://xsoft.mn/images/logo.png"
              alt=""
            />
            <button className="btnH">Home</button>
            <button className="btnS">Service</button>
            <button className="btnA">About</button>
            <button className="btnB">Protuct</button>

            <button className="Cbtn">Contact</button>
            <select name="" id="">
              <option value=""><button className="" onClick={() => onChange("mn")}>
              Mongolia
            </button></option>
            <option value=""><button className="" onClick={() => onChange("en")}>
              English
            </button></option>
            </select>
            
            
          </div>
          <p>{t("text")}</p>
          <p className="XLLC">XSoft LLC</p>

          <p className="Xp"> {t("main")}</p>

          <p className="Xp"> {t("mtext")}</p>
          <div className="homeE">
            <img
              className="imgS"
              src="https://xsoft.mn/images/funplus.webp"
              alt=""
            />
            <img
              className="imgS"
              src="https://xsoft.mn/images/healttohealt.webp"
              alt=""
            />
            <img
              className="imgS"
              src="https://xsoft.mn/images/network.webp"
              alt=""
            />
            <img
              className="imgS"
              src="https://xsoft.mn/images/dashvaanjil.webp"
              alt=""
            />
            <img
              className="imgS"
              src="https://xsoft.mn/images/hospital.webp"
              alt=""
            />
            <img
              className="imgS"
              src="https://xsoft.mn/images/boostmarket.webp"
              alt=""
            />
            <img
              className="imgS"
              src="https://xsoft.mn/images/bulteek.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="service">
        <p className="ser">____________Service____________</p>

        <div className="UIM">
          <div className="UI1">
            <p className="UI">UI/UX</p>
            <img
              className="UIi"
              src="https://xsoft.mn/images/uiux.jpg"
              alt=""
            />
            <p className="UIt">
              Are you a client looking for a high-quality web and mobile app
              design company? Then we will design and serve you, depending on
              what services you want, such as online store website, web
              development, full CMS website, Wordpress website, Android or IOS
              application development. You, the client, turn your ideas into
              reality.
            </p>
          </div>
          <div className="UI1">
            <p className="UI">Web UI/UX</p>
            <img
              className="UIi"
              src="https://xsoft.mn/images/webuiux.jpg"
              alt=""
            />
            <p className="UIt">
              An experienced team will serve you. We will create an orderly
              solution for UI/UX design according to your business. API
              development, JS development, Nextjs development, NodeJS
              development, WordPress development
            </p>
          </div>
          <div className="UI1">
            <p className="UI">Mobile UI/UX</p>
            <img
              className="UIi"
              src="https://xsoft.mn/images/mobileuiux.jpg"
              alt=""
            />
            <p className="UIt">
              We like to think and build interfaces according to customer
              requests. Delivers reliable UI/UX design to clients. React Native
              development, Flutter development, PWA development, MicroApp
              development
            </p>
          </div>
        </div>
        <p className="conser">We use </p>
        <p className="conserT">____________Technology____________</p>
        <div className="UIC">
          <div className="React">
            <div className="RB">
              <img
                className="RI"
                src="https://xsoft.mn/images/react.png"
                alt=""
              />
              <div className="R">
                <p className="RP">React Developer</p>
                <p className="RT">
                  React developer designs and creates JavaScript-based
                  applications for web or mobile environments. They typically
                  specialize in front-end development.
                </p>
              </div>
            </div>
          </div>
          <div className="React">
            <div className="NB">
              <img
                className="RI"
                src="https://xsoft.mn/images/nest.png"
                alt=""
              />
              <div className="R">
                <p className="NP">Nest Developer</p>
                <p className="NT">
                  Nest.JS is a framework that helps build Node.JS server-side
                  applications. The Nest framework is built using TypeScript
                  which allows developers to build highly scalable and testable
                  applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="UIC">
          <div className="React">
            <div className="NNB">
              <img
                className="RI"
                src="https://xsoft.mn/images/next.png"
                alt=""
              />
              <div className="R">
                <p className="NNP">Next Developer</p>
                <p className="NNT">
                  Next.js is a cross-platform framework that lets you build
                  full-stack React applications via server code. Instead of
                  using the traditional client-side API model, you can use API
                  routes and execute each of them as a separate serverless
                  function. This flexibility is key to the success of your
                  NextJS applications.
                </p>
              </div>
            </div>
          </div>
          <div className="React">
            <div className="JB">
              <img
                className="RI"
                src="https://xsoft.mn/images/nodejs.png"
                alt=""
              />
              <div className="R">
                <p className="JP">Node js</p>
                <p className="JT">
                  Node. js developer is a software expert who works with Node,
                  an open-source developer tool that runs on the website's
                  server-side functionality. They are responsible for building
                  and maintaining network applications. Additionally, it's their
                  job to manage the data exchanged between servers and users.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="UIC">
          <div className="React">
            <div className="FB">
              <img
                className="RI"
                src="https://xsoft.mn/images/figma.png"
                alt=""
              />
              <div className="R">
                <p className="FP">Figma</p>
                <p className="FT">
                  Figma later treated again and again. Unlike many other
                  designs, SaaS didn't take long to exit the market. Soon after
                  its launch in 2016, the software quickly gained popularity
                  among digital developers. Because at that time, the culture of
                  developing mobile apps and websites was forming. It has since
                  improved its product faster than any other imaging software.
                  Whether it's on a dashboard or canvas, you'll get a hybrid
                  feel. While Sketch's design system was once highly praised,
                  now Figma is receiving even more praise. The simplest user
                  interface and user experience can be created. basic you have
                  got the basic concept of Figma. Good luck.
                </p>
              </div>
            </div>
          </div>
          <div className="React">
            <div className="PB">
              <img
                className="RI"
                src="https://xsoft.mn/images/flutter.png"
                alt=""
              />
              <div className="R">
                <p className="PP">Flutter</p>
                <p className="PT">
                  Flutter is a new application development technology that is
                  currently gaining popularity in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="About">
          <p className="conser">____________About us____________</p>
          <p className="conser">The team</p>
          <div className="als">
            <div className="Text">
              <p className="als-T">Алсын хараа</p>
              <p className="als-TT">
                Үйлчлүүлэгчдын шаардлагыг биелүүлж, бүрэн дүүрэн сэтгэл ханамжыг
                хангахын зэрэгцээ, үйлчлүүлэгчын бизнест таарсан программ
                хангамжын шийдлыг олж өгөхөд оршино. Бид төслийн үйл явцыг үр
                дүнтэй ил тод, энгийн байдлаар бүтээдэг бөгөөд үйлчлүүлэгчдийн
                талархлыг хүлээдэг. Бид өвөрмөц байдалд итгэдэг тул дижитал
                бүтээгдэхүүн хөгжүүлэлтийн хувьд өнөөгийн зах зээлийн дагуу
                үйлчлүүлэгч бүрийн бизнест үнэ цэнэ, амжилтыг хамт бүтээлцдэг
                гэдэгт итгэдэг.
              </p>
            </div>
            <img
              className="als-img"
              src="https://jumppeak.net/uploads/industries/2022/02/15/202202151158091182798118_industries.png"
              alt=""
            />
          </div>
        </div>
        <div className="project">
          <p className="conser">____________Completed projects____________</p>
          <div className="dashwaanjil">
            <div className="dash">
              <div className="dashw">
                <img
                  className="dash-logo"
                  src="https://admin.fununity.mn/uploads/dashvaanjil_d237035829_24a042135c.webp"
                  alt=""
                />
                <div className="TT">
                  <p className="dashT">Дашваанжил ХХК</p>
                  <p className="dashTi">Дашваанжил ХХК Вебсайт</p>
                </div>
              </div>
            </div>
            <div className="dashg">
              <div className="dashw">
                <img
                  className="dash-logo"
                  src="https://admin.fununity.mn/uploads/hospital_177ba2be03_16be9b7d6f.png"
                  alt=""
                />
                <div className="TT">
                  <p className="dashT">Арьсны дасгалжуулагч</p>
                  <p className="dashTi">Арьсны дасгалжуулагч</p>
                </div>
              </div>
            </div>
            <div className="dashf">
              <div className="dashw">
                <img
                  className="dash-logo"
                  src="https://admin.fununity.mn/uploads/funplus_0f34820795_68d2f77521.webp"
                  alt=""
                />
                <div className="TT">
                  <p className="dashT">FunPlus</p>
                  <p className="dashTi">
                    "FunPlus" цахим цаг захиалгын аппликейшн
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact">
          <p className="conser">____________Contact____________</p>
          <div className="con-m">
            <form action="" className="from">
              <input type="text" name="" id="" placeholder="Name" />
              <input type="text" name="" id="" placeholder="Phone number" />
              <textarea name="" id=""></textarea>
              <button>Send</button>
            </form>
            <div className="info">
              <div className="unfou">
                <p>Утас: </p>
                <p className="n">+976 7600 2001</p>
              </div>
              <div className="infoc">
                <p> И-Мэйл: </p>
                <p className="con">contact@xsoft.mn</p>
              </div>
              <div className="infoh">
                <p>Хаяг: </p>
                <p className="ulan">
                  Ulaanbaatar, Chd, 6-khoroo, 6- district, 47-201t
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
