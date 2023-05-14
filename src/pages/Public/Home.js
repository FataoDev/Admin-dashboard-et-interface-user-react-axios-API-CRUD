import React, { useState, useEffect, useRef } from "react";
import { cocktailService } from "@/_services";
import Card from "@/components/public/Card";
import image from "@/assets/drapeau.jpg";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const flag = useRef(false);

  useEffect(() => {
    if (flag.current === false) {
      cocktailService
        .getAllCocktails()
        .then((res) => setCocktails(res.data.data))
        .catch((err) => console.log(err));
    }

    return () => (flag.current = true);
  }, []);

  return (
    <div className="home">
      {cocktails.map((ckt, id) => (
        <Card key={id} Fatao={ckt} image={image} />
      ))}
    </div>
  );
};

export default Home;
