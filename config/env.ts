import dotenv from 'dotenv'
dotenv.config();

export const env={
    baseUrl: process.env.ORANGEHRM_BASE_URL|| '' ,
    username : process.env.ORANGEHRM_USERNAME || '' ,
    password: process.env.ORANGEHRM_PASSWORD || '',
    dashboardUrl: process.env.ORANGEHRM_DASHBOARD_URL  || ''
};
