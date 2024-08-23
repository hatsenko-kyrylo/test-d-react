import { ACCESS_TOKEN } from '../config.js';
import { Dropbox } from 'dropbox';

const dbx = new Dropbox({ accessToken: ACCESS_TOKEN });

export default dbx;
