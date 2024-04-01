
import Tooltip from "./Tooltip";

import { useState } from "react"
import styles from "./tooltip.module.css"

function App() {

  const [hover, setHover] = useState(false)


  return (

    <div class={styles.container}>
      <div className={styles.textElement} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} >Hover over me!</div>
      {hover ? <Tooltip /> : null}
    </div>
  );
}

export default App;
