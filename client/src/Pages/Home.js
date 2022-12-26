import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExpCard from "../Components/Card/ExpCard";
import HomeCard from "../Components/Card/HomeCard";
import SearchForm from "../Components/Form/SearchForm";
import Spinner from "../Components/Spinner/Spinner";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExp, setAllExp] = useState([]);
  useEffect(() => {
    fetch("expdata.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        console.log(data);
        setAllExp(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="md:flex justify-center gap-10 px-6 md:px-10 lg:px-20">
          <div>
            <SearchForm />
          </div>
          <div className="flex-1">
            <div>
              <div className="flex justify-between px-4 mt-6">
                <p className="text-xl font-bold">Home</p>
                <Link to="/coming-soon">See All</Link>
              </div>
              <div className="container pb-8 pt-2 mx-auto">
                <div className="md:flex flex-wrap">
                  {[...Array(3)].map((exp, idx) => (
                    <HomeCard key={idx} exp={exp} />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between px-4">
                <p className="text-xl font-bold">Expariances</p>
                <Link to="/coming-soon">See All</Link>
              </div>
              <div className="container pb-8 pt-2 mx-auto">
                <div className="md:flex flex-wrap">
                  {allExp.slice(0, 4).map((exp, idx) => (
                    <ExpCard key={idx} exp={exp} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
