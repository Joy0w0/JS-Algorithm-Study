/**
 * 전력망을 둘로 나누기
 * n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있습니다. 당신은 이 전선들 중 하나를 끊어서 현재의 전력망 네트워크를 2개로 분할하려고 합니다. 이때, 두 전력망이 갖게 되는 송전탑의 개수를 최대한 비슷하게 맞추고자 합니다.
 * 송전탑의 개수 n, 그리고 전선 정보 wires가 매개변수로 주어집니다.
 * 전선들 중 하나를 끊어서 송전탑 개수가 가능한 비슷하도록 두 전력망으로 나누었을 때, 두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(n, wires) {
  let obj = {}; // 연결된 노드 저장할 객체
  wires.forEach((v) => {
    let [a, b] = v;
    if (!obj[a]) obj[a] = [];
    if (!obj[b]) obj[b] = [];
    obj[a].push(b);
    obj[b].push(a);
  });
  let answer = 100; // 나올 수 있는 최댓값=100
  wires.forEach((v) => {
    let [a, b] = v;
    answer = Math.min(Math.abs(search(a, b) - search(b, a)), answer);
  });

  function search(root, excepetion) {
    let count = 0;
    let queue = [root];
    let visit = []; // 방문 여부 체크 배열
    while (queue.length) {
      let cur = queue.shift();
      visit[cur] = true;
      count++;
      obj[cur].forEach((child) => {
        if (!visit[child] && child !== excepetion) {
          queue.push(child);
        }
      });
    }
    return count;
  }
  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
); // 3
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
); // 0
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
); // 1

// https://jiwoo84.tistory.com/110
