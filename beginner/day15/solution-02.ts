function makeEntry<Key, Value>(key: Key, value: Value): [Key, Value] {
  return [key, value];
}

const [key, value] = makeEntry("level", 3);
console.log(key + "=" + value);

const [enabled, feature] = makeEntry(true, "search");
console.log(enabled + "=" + feature);
