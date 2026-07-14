import Axios from "axios";
import { isMobile, isTablet } from "react-device-detect";

// Fire-and-forget view ping. No-ops cleanly when the backend URL is absent,
// so local dev never spams the console with failed requests.
export async function pingView() {
  const base = import.meta.env.VITE_BACKEND_URL;
  if (!base) return;

  let viewType = "laptop";
  if (isMobile) viewType = "mobile";
  else if (isTablet) viewType = "tablet";

  try {
    await Axios.post(`${base}/state/views`, { viewType });
  } catch {
    /* analytics are best-effort — never block the UI */
  }
}
