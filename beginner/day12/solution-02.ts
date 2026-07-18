const scores = [55, 80, 100];

const labels = scores.map((score) => {
  if (score >= 60) {
    return "通过";
  } else {
    return "继续复习";
  }
});

labels.forEach((label, index) => {
  console.log(scores[index] + "：" + label);
});
