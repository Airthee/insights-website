import React from "react";

import { Project } from './Project';
import data from '../../../data/stats.json'
import "./TopProjects.css";

const TopProjects = () => {
  return (
    <article className="topProjects">
      <div className="topProjects__title">
        <h2>Top projects</h2>
      </div>
      {data.topRepositories.map(repository => (
        <Project
          title={repository.name}
          url={repository.url}
          description={repository.description}
          stars={repository.count}
        />
      ))}
    </article>
  );
};

export default TopProjects;
