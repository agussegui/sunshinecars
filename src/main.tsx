import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

const contrailLink = document.createElement("link")
contrailLink.href =
  "https://fonts.googleapis.com/css2?family=Contrail+One&family=Raleway:wght@300;400;500;600;700&display=swap"
contrailLink.rel = "stylesheet"
document.head.appendChild(contrailLink)

const gillSansLink = document.createElement("link")
gillSansLink.href = "https://fonts.googleapis.com/css2?family=Gill+Sans+Nova:wght@700&display=swap"
gillSansLink.rel = "stylesheet"
document.head.appendChild(gillSansLink)


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
