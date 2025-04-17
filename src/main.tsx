import { createRoot } from "react-dom/client"
import { App } from "./app"
import "@/assets/css/main.css"
import "@/lib/firebase"

createRoot(document.getElementById("root")!).render(<App />)
