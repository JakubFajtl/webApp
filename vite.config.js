import { defineConfig } from 'vite';
import os from 'os';
import react from '@vitejs/plugin-react'

function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    for (const config of iface) {
      if (config.family === 'IPv4' && !config.internal) {
        return config.address; // Return first found local IPv4
      }
    }
  }
  return 'localhost';
}

export default defineConfig({
  server: {
    host: getLocalIp(), // Set the server to bind to local IP
  },
  define: {
    __MY_LOCAL_IP__: JSON.stringify(getLocalIp()), // Pass as global variable
  },
  plugins: [react()],
});
