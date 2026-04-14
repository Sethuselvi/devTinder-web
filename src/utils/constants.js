//Use url based on development or production environment
export const BASE_URL = location.hostname === "localhost" ? 'http://localhost:3000':'/api'

