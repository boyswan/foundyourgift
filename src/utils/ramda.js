import R from 'ramda';
R.mapObjIndexed((val, key) => window[key] = val)(R);
