import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./layout";
import { Landing } from "./pages/landing/landing";
import { Form } from "./pages/form/form";
import { NotFound } from "./pages/not-found";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path="/drop" element={<Form />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
