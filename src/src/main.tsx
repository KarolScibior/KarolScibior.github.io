import React from "react"
import ReactDOM from "react-dom/client"
import { Page } from "./Page"
import "./index.css"

const root = document.getElementById("root")

if (root) {
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<Page />
		</React.StrictMode>
	)
}
