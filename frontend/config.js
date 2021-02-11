import getConfig from 'next/config';
const {env} = getConfig;


export const API = process.env.PRODUCTION ? 'https://webserv4u.in' : 'http://localhost:8000';
export const APP_NAME = process.env.APP_NAME;