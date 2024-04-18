import React from "react";
import { Routes, Route } from "react-router-dom";
import ChapterOne from "../modules/chapter-1/ChapterOne";
import { ChapterTwo } from "../modules/chapter-2";
import Auth from "../modules/chapter-2/widgets/authentications";

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterTwo/>} />
        <Route path="home" element={<Home />} />
        <Route path="/" element={<ChapterTwo />} />
        <Route path="SignIn" element={<Auth />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </React.Suspense>
  );
}

// const Home = () => {
//   return <h3>Woiii Ini Home loo...</h3>;
// };

const Home = () => {
    return (
        <div style={{ backgroundColor: '#daeaf6', padding: '10px', borderRadius: '10px', color: 'black', maxWidth: '1810px', margin: '0 auto' }}>
            <h3>Woiii Ini Home loo...</h3>
        </div>
    );
};

const Error = () => {
  return <h1>Error: 404 NOT FOUND!</h1>;
};