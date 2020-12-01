import { time, timeEnd } from 'console';
import { writeFileSync } from 'fs';
import Parse from '../parse';
import css from './css';

time();
const res = new Parse(css).parse();
timeEnd();
export default res;
writeFileSync('./test.json', JSON.stringify(res));
