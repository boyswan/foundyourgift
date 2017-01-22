import axios from 'axios';

export const mapIndex = addIndex(map);
export const ifThen = (x, y) => console.log(x,y) || [equals(x), flip(y)];


export const formatToRead = reduce((arr, { title, answer }) => merge(arr, { [title]: answer }), {})

export const fetch = url => axios.get(url).then(identity).catch(console.log)


export const toSnakeCaseUpper = pipe(
  replace(/([A-Z])/g, str => `_${toLower(str)}`),
  toUpper
);
