import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Events from "./pages/Events";
import MediaPage from "./pages/MediaPage";
import Photos from "./components/Photos";
import Videos from "./components/Videos";
// import { useEffect, useState } from "react";
import { AppProvider } from "./contexts/AppContext";
// import cookies from "js-cookie";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="events" element={<Events />} />
          <Route path="/media" element={<MediaPage />}>
            <Route index path="photos" element={<Photos />} />
            <Route path="videos" element={<Videos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
