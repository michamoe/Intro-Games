import React from 'react'


function start({marvel}) {
  return (
    <>
    <h1>Test</h1>
    {marvel.map((item, index) => {
      return (
        <div key={index} className="marvel">
          <img src={item.heroImage.file.url} />
          <h3>{item.name}</h3>
        </div>
      );
    })}
</>
  )
}

export default start