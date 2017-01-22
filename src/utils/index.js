import axios from 'axios';
import { reduce, assoc, addIndex, map, pipe, replace, toLower, toUpper, identity } from 'ramda';

export const mapIndex = addIndex(map);
export const fetch = url => axios.get(url).then(identity).catch(console.log)

export const toSnakeCaseUpper = pipe(
  replace(/([A-Z])/g, str => `_${toLower(str)}`),
  toUpper
);


export const interestToQuery = reduce((acc, val) => val.active
  ? assoc(val.type, true, acc)
  : acc, {})
