import axios from 'axios';
import authHeader from './auth.header';

export default axios.create({
   baseURL: 'http://localhost:5000',
   headers: authHeader()
});