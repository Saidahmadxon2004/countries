import Filter from "../hooks/Filter";

import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Home() {
  /*const allCategories = ['all', ...new Set(items.map((item) => {return item.category}))] */
  const {
    data,
    IsPending,
    error,
    filterCategory,
    allCategories,
    filterCountry,
  } = useFetch("https://restcountries.com/v3.1/all");

  return (
    <div>
      <Filter
        allCategories={data && allCategories}
        filterCategory={filterCategory}
        filterCountry={filterCountry}
      ></Filter>
      (
      <div className="container home-container ">
        <div className="cards-container ">
          {data &&
            data.map((counter) => {
              return (
                <Link
                  className="card"
                  to={`/about/${counter.name.common}`}
                  key={counter.name.common}
                >
                  <img src={counter.flags.svg} className="card-img" />
                  <div className="card-body">
                    <h5 className="card-title">{counter.name.common}</h5>
                    <p>
                      <b>Population: </b>
                      {counter.population}
                    </p>
                    <p>
                      <b>Region: </b> {counter.region}
                    </p>
                    <p>
                      <b>Capital: </b> {counter.capital ? counter.capital : ""}
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      )
    </div>
  );
}

export default Home;
