import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components";

import { Products, Stores, Users } from "../pages";

const Routers = () => {
  const [isLoading, setIsLoading] = useState(true);

  const token = true || localStorage.getItem("token");

  useEffect(() => {
    !isLoading && setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const Loading = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading.......
      </div>
    );
  };

  return (
    <>{isLoading ? <Loading /> : token ? <AppRouter /> : <AuthRouter />}</>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Users />} />
          <Route path="/store" element={<Stores />} />
          <Route path="/product" element={<Products />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Routes>{/* <Route element={<PrivateWrapper />}></Route> */}</Routes>
    </BrowserRouter>
  );
};

export default Routers;
