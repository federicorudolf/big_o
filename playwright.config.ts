import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: { command: 'npm run build && npm run preview', port: 5173, env: { BROWSER: "webkit" }},
	testDir: 'e2e',
});
