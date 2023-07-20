import { defineConfig } from 'vite'
import express from './express-plugin'

export default defineConfig({
    plugins: [express('./server.js')]
})