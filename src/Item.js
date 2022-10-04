import React from "react";
import './Item.scss';


function Item ({db}) {

  const array = db.map(e => {
    return <div className="item">{db.indexOf(e) + 1}</div>;
  })


  return (
    <>
      {array}
    </>
  )
}

export default Item;