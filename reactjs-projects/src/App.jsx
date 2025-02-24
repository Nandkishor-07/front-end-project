// import { useState } from 'react'
import "./App.css";
import { lazy, Suspense } from "react";

const Counter = lazy(() => import("./component/Counter"));

function App() {
  return (
    <div>
    <Suspense fallback={<p> This page having some issue</p>}>
      <>
        <Counter />
      </>
    </Suspense>
    </div>
  );
}

export default App;
