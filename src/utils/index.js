
export const mapIndex = addIndex(map);
export const ifThen = (x, y) => console.log(x,y) || [equals(x), flip(y)];
export const match = curry((...a) => cond([ ...a, [T, identity] ]))


export const formatToRead = reduce((arr, { title, answer }) => merge(arr, { [title]: answer }), {})
