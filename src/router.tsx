import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./layout";
import { Landing } from "./pages/landing/landing";
import AirdropForm from "./pages/forms/airdrop";
import PresaleForm from "./pages/forms/presale";
import { NotFound } from "./pages/not-found";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Landing />} />

      <Route path="/airdrop" element={<AirdropForm />} />
      <Route path="/presale" element={<PresaleForm />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
