import React from "react";
import { useCurrentUser } from "../lib/hooks";
import Home from "../components/Home";

const IndexPage = () => {
  const [user] = useCurrentUser();

  return <Home />;
};

export default IndexPage;
