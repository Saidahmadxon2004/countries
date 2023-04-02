import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
function About() {
  const name = useParams();
  const url = `https://restcountries.com/v3.1/name/${name.name}`;
  const { data, isPending, error } = useFetch(url);
  console.log(data);

  return (
    <div className="container">
      <Link className="btn" to="/">
        ← Back
      </Link>
      {data && (
        <div className="about-context">
          <img src={data[0].flags.svg} alt="" className="country-img" />
          <div className="intro-content">
            <h2 className="intro-title">{data[0].name.common}</h2>
            <div className="text-wrapper">
              <div className="text-wrapper-left">
                <p>
                  <b>Native Name: </b>{" "}
                  <span className="native-name">{data[0].name.official}</span>
                </p>
                <p>
                  <b>Population: </b>{" "}
                  <span className="population">{data[0].population}</span>
                </p>
                <p>
                  <b>Region: </b>{" "}
                  <span className="region">{data[0].region}</span>
                </p>
                <p>
                  <b>Sub Region: </b>{" "}
                  <span className="sub-region">{data[0].subregion}</span>
                </p>
                <p>
                  <b>Capital: </b>{" "}
                  <span className="capital">
                    {data[0].capital ? data[0].capital : ""}
                  </span>
                </p>
              </div>
              <div className="text-wrapper-right">
                <p>
                  <b>Top Level Domain: </b>{" "}
                  <span className="domain">{data[0].tld}</span>
                </p>
                <p>
                  <b>Currencies: </b> <span className="currency">Eur</span>
                </p>
                <p>
                  <b>Languages: </b> <span className="language">fra</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
