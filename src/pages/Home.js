import React from "react";
import Profile from "../components/profile";
import Repository from "../components/repository";

function Home() {
  return (
    <main className="container app-wrapper">
      <Profile />
      <Repository />
    </main>
  );
}

export default Home;
