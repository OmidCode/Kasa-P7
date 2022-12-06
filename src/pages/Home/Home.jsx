// Import du style associé
import "./Home.scss";

// Import des composants nécessaire
import Banner from "../../components/Banner/Banner";
import ApartmentCard from "../../components/ApartmentCard/ApartmentCard";

// Import des données nécessaire
import data from "../../assets/data/data.json";
import bannerImg from "../../assets/img/bannerImg.jpeg";

// Import de l'élément link pour pouvoir permettre la navigation des liens
import { Link } from "react-router-dom";

// Composant "Home". Parent des composants genérés dans le return
function Home() {
  const bannerTitle = "Chez vous, partout et ailleurs";
  return (
    <div>
      {/* Utilisation des props title et picture */}
      <Banner title={bannerTitle} picture={bannerImg} />
      <main className="main">
        {data.map((apartment) => {
          return (
            <Link
              className="main__link"
              // Redirection vers le chemin ci-dessous avec la variable en paramètre
              to={`/apartment/${apartment.id}`}
              // Pour identifier les elements d'une liste de manière unique
              key={apartment.id}
              title={apartment.title}
            >
              <ApartmentCard {...apartment} />
            </Link>
          );
        })}
      </main>
    </div>
  );
}

export default Home;
