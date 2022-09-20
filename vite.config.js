import { defineConfig } from "vite"

export default defineConfig({
    build: {
        chunkSizeWarningLimit: 600
    },
    assetsInclude: ['**/*.gltf']
})
