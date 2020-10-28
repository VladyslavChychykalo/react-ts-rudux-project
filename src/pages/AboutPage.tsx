import React from "react";
import { useHistory } from "react-router-dom";

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Страница инфо</h1>
      <button className="btn" onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </div>
  );
};

export default AboutPage;
