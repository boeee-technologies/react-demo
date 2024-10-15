// Define the configuration structure
interface Config {
    pages: string[];
    settings: string[];
    companyName: string;
    companyShortName: string;
    environment: string;
    version: string;
  }
  
  

  // Create the config object
  const config: Config = {
    pages: ['Products','Services', 'Pricing', 'Blog', 'AboutMe'],
    settings: ['Profile', 'Account', 'Dashboard', 'Logout'],
    companyName: 'Vikas YADAV',
    companyShortName: 'Vikas',
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0',
  };
  
  export default config;
  