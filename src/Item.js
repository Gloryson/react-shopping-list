import React from "react";
import './Item.scss';


function Item ({arr}) {

  let array = arr.map(e => {
    return <div className="item">{arr.indexOf(e) + 1}</div>;
  })


  return (
    <>
      {array}
    </>
  )
}

export default Item;