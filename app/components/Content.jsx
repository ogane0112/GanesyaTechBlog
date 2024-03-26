import React from 'react'

function Content(Ids) {
  return (
    <div className="bg-white rounded-lg shadow-md p-10 menu  lg:block">
        <h2>目次</h2>
        <ul>
        {Ids.map((id,idIndex) =>{

            <li><a href = {`${id}`}>{id}</a></li>

        })}
        </ul>

    </div>
  )
}

export default Content