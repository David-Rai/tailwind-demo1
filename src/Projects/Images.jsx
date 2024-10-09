import React, { useEffect, useState } from "react";
import "./Images.css";
import Loading from "./Loading";

const Images = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      try {
        const response = await fetch(
          `https://official-joke-api.appspot.com/random_joke`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    get();
  }, []);

  return (
    <>
      <main>
        {loading ? (
          <Loading />
        ) : data ? (
          <>
            <h1>{data.setup}</h1>
            <p>{data.punchline}</p>
          </>
        ) : (
          <P>no jokes</P>
        )}
      </main>
    </>
  );
};

export default Images;
