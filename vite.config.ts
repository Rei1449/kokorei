import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import env from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), env({ prefix: "VITE", mountedPath: "process.env" })],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		host: true,
	},
});
