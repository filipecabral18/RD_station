import React from "react";

export default function MenuItem({link, text}) {
  return (
    <a href={link} target='_abuot-blank'>
      <h4>{text}</h4>
    </a>
  );
}
