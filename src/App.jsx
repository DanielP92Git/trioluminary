import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Events from "./pages/Events";
import MediaPage from "./pages/MediaPage";
import Photos from "./components/Photos";
import Videos from "./components/Videos";
import { useEffect, useState } from "react";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial device type check
    updateDeviceType();

    // setInitialBackground();

    // Listen for window resize events
    window.addEventListener("resize", updateDeviceType);
    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage isMobile={isMobile} />} />
        <Route path="events" element={<Events isMobile={isMobile} />} />
        <Route path="/media" element={<MediaPage />}>
          <Route index path="photos" element={<Photos />} />
          <Route path="videos" element={<Videos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
