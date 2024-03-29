interface Env {
    [name: string]: string;
    TYPE: string;
    PORT: string;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    REDIRECT_URL: string;
    REFRESH_TOKEN_GMAIL: string;
    REFRESH_TOKEN_DRIVE: string;
    USER_EMAIL: string;
  }

  const ENV = process.env as Env;
  
  export default ENV;