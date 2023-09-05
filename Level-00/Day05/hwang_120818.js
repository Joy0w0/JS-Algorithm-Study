//옷가게 할인 받기
function solution(price) {
  if (price >= 500000) {
    return Math.trunc(price - price * 0.2);
  } else if (price >= 300000) {
    return Math.trunc(price - price * 0.1);
  } else if (price >= 100000) {
    return Math.trunc(price - price * 0.05);
  } else {
    return price;
  }
}

console.log(solution(100010));
