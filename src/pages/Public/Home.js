import React, { useState, useEffect, useRef } from "react";
import { cocktailService } from "@/_services";
import Card from "@/components/public/Card";
// import image from "@/assets/casque.jpg";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const flag = useRef(false);

  useEffect(() => {
    if (flag.current === false) {
      cocktailService
        .getAllCocktails()
        .then((res) => {
          setCocktails(res.data.data);
        })
        .catch((err) => console.log(err));
    }

    return () => (flag.current = true);
  }, []);

  return (
    <div className="home">
      <div className="titre">
        <div>-</div>
        <div>Listes des produits</div>
      </div>

      <div className="home-produits">
        {cocktails.map((ckt, id) => (
          <Card key={id} Fatao={ckt} />
        ))}
      </div>
    </div>
  );
};

export default Home;
