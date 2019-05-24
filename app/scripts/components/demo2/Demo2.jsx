import React from 'react'
import { BadTable } from './bad/BadTable'
import { GoodTable } from './good/GoodTable'

export const Demo2 = () => {

    return <div className="demo2">
      <div className="container">
        <div className="container-item">
          <BadTable />
        </div>
        <div className="container-item">
          <GoodTable />
        </div>
      </div>
    </div>
}

