import React, { useEffect, useState } from 'react'
import LoadingItem from './components/Loading'



export const App = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div className="body">
      {loading && <LoadingItem />}
    </div>
  )
}
