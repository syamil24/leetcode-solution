let merge = function (intervals) {
  if ((intervals.length = 1)) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let curr = intervals[0];
  const result = [curr];

  for (let i = 1; i < intervals.length; i++) {
    let currentRight = curr[1];
    let [nextLeft, nextRight] = intervals[i];
    if (currentRight >= nextLeft)
      current[1] = Math.max(currentRight, nextRight);
    else {
      result.push(intervals[i]);
      curr = intervals[i];
    }
  }
  return result;
};

merge();
