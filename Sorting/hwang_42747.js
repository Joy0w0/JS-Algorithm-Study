// h-index
function solution(citations) {
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) {
      return i;
    }
  }

  return citations.length;
}

console.log(solution([3, 0, 6, 1, 5]));
