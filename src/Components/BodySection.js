import React, { useEffect, useState } from "react";
import "../Styles/BodySection.css";
import CardSection from "./CardSection";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import convert from "xml-js";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
  },
};

function BodySection() {
  const [dataStore, setdataStore] = useState([]);
  const [filteredData, setfilteredData] = useState([]);

  useEffect(() => {
    //Initially load datainto dataStore
    axios
      .get("https://www.alfassa.online/feed/")
      .then((result) => convert.xml2js(result.data))
      .then((obj) => obj.elements[0].elements[0].elements)
      .then((data) => {
        setdataStore(
          data.filter((obj) => {
            return obj.name === "item"; //Select only items
          })
        );
      });
  }, []);

  useEffect(() => {
    //filter useful data from dataStore
    let dataItems = [];
    if (dataStore !== undefined) {
      dataStore.map((obj) => {
        dataItems.push(
          obj.elements.filter(
            // filter necessary elements from object array
            (nestedObj) => {
              return (
                nestedObj.name === "title" ||
                nestedObj.name === "link" ||
                nestedObj.name === "pubDate" ||
                nestedObj.name === "content:encoded" ||
                nestedObj.name === "description"
              );
            }
          )
        );
      });
      let filterDataArray = [];
      dataItems.map((element) => {
        // filter and extract specific data
        let dataObj = {
          title: element
            .filter((el) => {
              return el.name === "title";
            })[0]
            .hasOwnProperty("elements")
            ? element.filter((el) => {
                return el.name === "title";
              })[0].elements[0].text
            : "",
          link: element
            .filter((el) => {
              return el.name === "link";
            })[0]
            .hasOwnProperty("elements")
            ? element.filter((el) => {
                return el.name === "link";
              })[0].elements[0].text
            : "",
          pubDate: element
            .filter((el) => {
              return el.name === "pubDate";
            })[0]
            .hasOwnProperty("elements")
            ? element.filter((el) => {
                return el.name === "pubDate";
              })[0].elements[0].text
            : "",
          image: element
            .filter((el) => {
              return el.name === "content:encoded";
            })[0]
            .hasOwnProperty("elements")
            ? element.filter((el) => {
                return el.name === "content:encoded";
              })[0].elements[0].cdata
            : "",
          description: element
            .filter((el) => {
              return el.name === "description";
            })[0]
            .hasOwnProperty("elements")
            ? element.filter((el) => {
                return el.name === "description";
              })[0].elements[0].cdata
            : "",
        };
        filterDataArray.push(dataObj);
      });

      //Clean description in object
      filterDataArray.map((item) => {
        item["description"] = item.description.replace(/<[^>]*>?/gm, "");
      });

      //extract image link
      filterDataArray.map((item) => {
        var slicedString = item.image.slice(item.image.indexOf("src"));
        item.image = slicedString.substring(
          slicedString.indexOf("src") + 5,
          slicedString.indexOf("class") - 1
        );
      });

      setfilteredData(filterDataArray);
    }
  }, [dataStore]);

  return (
    <div className="BodySection">
      <div className="title"> Ultimi Articoli Alfassa Online</div>
      <div>
        <Carousel responsive={responsive}>
          {filteredData !== undefined
            ? filteredData.map((item) => {
                return (
                  <a href={item.link} target="_blank" key={item.title}>
                    <CardSection
                      image={item.image}
                      title={item.title}
                      content={item.description}
                    />
                  </a>
                );
              })
            : ""}
        </Carousel>
      </div>
    </div>
  );
}

export default BodySection;
