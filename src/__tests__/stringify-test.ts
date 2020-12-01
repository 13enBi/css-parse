import res from './parse-test';
import { writeFileSync } from 'fs';
import s from '../stringify'

writeFileSync('./string.css',new s().stringify(res));
