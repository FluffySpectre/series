import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.bosse.bsclient',
  appName: 'bs-client-app',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
