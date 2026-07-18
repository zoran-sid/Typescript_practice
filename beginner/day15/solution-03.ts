type Box<Value> = {
  label: string;
  value: Value;
};

function makeBox<Value>(value: Value, label: string): Box<Value> {
  return {
    label,
    value,
  };
}

const scoreBox = makeBox(95, "分数");
const topicBox = makeBox("泛型", "主题");

console.log(scoreBox.label + "：" + scoreBox.value);
console.log(topicBox.label + "：" + topicBox.value);
