import React from "react";

export default function Editor(props) {
  const style = {
    margin: "50px 0px 0px 210px"
  };
  return (
    <div>
      <textarea
        id="editor"
        style={style}
        rows="16"
        cols="120"
        value={props.text}
        type="text"
        onClick={props.onClick}
        onChange={props.onChange}
      />
    </div>
  );
}
