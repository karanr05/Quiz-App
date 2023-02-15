import React from "react";
import { HomeCard } from "./Ui/HomeCard";
import illus1 from "../images/pp1.jpg";
import illus2 from "../images/p2.jpg";
import illus3 from "../images/p3.jpg";

// this is our homepage which will route us to the necessary pages //

export const Home = () => {
  return (
    <div className="home-container">
      <HomeCard
        color="blue"
        heading="Create New Quiz"
        path="create-new"
        delay={0.10}
        image={illus1}
        size={"600px"}
      />
      <HomeCard
        color="blue"
        heading="My Quizzes"
        path="my-quizzes"
        delay={0.15}
        image={illus2}
        size={"400px"}
      />
      <HomeCard
        color="blue"
        heading="Play Quiz"
        path="play-quiz"
        delay={0.20}
        image={illus3}
        size={"600px"}
      />
    </div>
  );
};
