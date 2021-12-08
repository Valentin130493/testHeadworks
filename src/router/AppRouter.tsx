import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import Favourites from "../pages/Favourites/Favourites";
import Layout from "../components/_common/Layout/Layout";
import Receipt from "../pages/Receipt/Receipt";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/testHeadworks/"} element={<Layout />}>
          <Route path={ROUTES.RECEIPT} element={<Receipt />} />
          <Route path={ROUTES.FAVOURITE} element={<Favourites />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
