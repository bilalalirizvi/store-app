import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from "../components";

const Routers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = "wefgi87654esdu76tr" || localStorage.getItem("token");

  useEffect(() => {
    !isLoading && setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const Loading = () => {
    return <div>Loading</div>;
  };

  return (
    <>{isLoading ? <Loading /> : token ? <AppRouter /> : <AuthRouter />}</>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route path='*' element={<ComingSoon />} /> */}
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
