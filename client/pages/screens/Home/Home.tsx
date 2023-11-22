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
      <button
        onClick={navigateToCategory}
        className="w-48 block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
      >
        Category Page
      </button>
    </div>
  );
}

export default Home;
