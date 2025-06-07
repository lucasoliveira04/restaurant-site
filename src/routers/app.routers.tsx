import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "../pages/user.page";

export const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};
