import React, { useEffect } from 'react'

import Navigation from './navigation/Navigation'
import { getClients } from './utils/actions'

export default function App() {
  useEffect(() => {
    (async() => {
      const result = await getClients("clientes")
    })()
  }, [])


  return (
    <Navigation>
      
    </Navigation>
  );
}

