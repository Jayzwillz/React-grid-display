export const range = (start, end, step = 1) => {
  let output = [];

  if (end === undefined) {
    end = start - 1;
    start = 0;
  }

  for (let i = start; i <= end; i += step) {
    output.push(i);
  }

  return output;
};