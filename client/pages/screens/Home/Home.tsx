import React from "react";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const navigateToCategory = () => {
    router.push("/screens/CategoryView/CategoryPage");
  };

  return (
    <div className="flex-col">
      This the home page fr
    </div>
  );
}

export default Home;