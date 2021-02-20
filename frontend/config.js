import getConfig from 'next/config';
const {env} = getConfig;


export const API = process.env.PRODUCTION ? process.env.API_PRODUCTION : process.env.API_DEVELOPMENT;
export const APP_NAME = process.env.APP_NAME;

export const DOMAIN = process.env.PRODUCTION ? process.env.DOMAIN_PRODUCTION : process.env.DOMAIN_DEVELOPMENT;

export const FB_APP_ID = process.env.FB_APP_ID;
export const DISQUS_SHORTNAME = process.env.DISQUS_SHORTNAME;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;