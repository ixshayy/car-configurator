import React, { lazy, Suspense } from "react";
// import Canvas from "./Canvas";

const Canvas = lazy(() => import("./Canvas"));

const Home: React.FC = () => {
  return (
    <div className="h-screen w-full bg-gradient">
      <Suspense fallback={<></>}>
        <Canvas />
      </Suspense>
    </div>
  );
};

export default Home;
