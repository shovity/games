let url = 'https://shoss.herokuapp.com/api/v1'
if (process.env.NODE_ENV === 'development') url = 'http://192.168.1.77:3030/api/v1'
export const API_BASE_URL = url