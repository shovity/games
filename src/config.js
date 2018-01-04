let url = 'https://shoss.herokuapp.com/api/v1'
if (process.env.NODE_ENV === 'development') url = '/api/v1'
export const API_BASE_URL = url
