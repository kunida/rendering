import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpne = () => setOpen(!open);

  //レンダリングでアロー関数は毎回生成されてるような感じ memoがきかない
  //useCallback 第二引数のものを監視、変化があれば再生成
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpne}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
