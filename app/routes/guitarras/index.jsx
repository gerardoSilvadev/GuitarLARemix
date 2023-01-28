import {useLoaderData } from '@remix-run/react'
import ListadoGuitarra from '~/components/listado-guitarras'
import { getGuitarras} from '~/models/guitarras.server'

export function meta() { 
  return {
    title:'GuitarLa - Tienda de Guitarras',
    description: 'GuitarLa - Nuestra coleccion de guitarra'
  }
}

export async function loader(){  
  const guitarras = await getGuitarras()
  return guitarras.data
}

const Tienda = () => {
    const guitarras = useLoaderData();
    return (
  <ListadoGuitarra
        guitarras={guitarras}
      />
      )
}

export default Tienda