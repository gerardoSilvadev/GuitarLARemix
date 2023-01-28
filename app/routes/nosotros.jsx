import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() { 
  return { 
    title:'GuitarLA - Sobre Nosotros', 
    description:'Venta de guitarras,blog de musica'
  }
}
export function links() {
  return[ 
    { 
      rel:'stylesheet', 
      href:styles
    }, 
    {
      rel:'preload', 
      href: imagen,
      as:'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
          <img src={imagen} alt="imagen sobre nosotros" />

          <div>
            <p>¡Ven y descubre nuestra increíble selección de guitarras! Tenemos una amplia variedad de modelos y marcas para elegir, desde guitarras clásicas hasta guitarras eléctricas de vanguardia. Nuestras guitarras están construidas con materiales de alta calidad y tienen un sonido excepcional. Además, nuestros expertos en guitarras estarán encantados de ayudarte a encontrar la guitarra perfecta para ti. ¡Ven a verlas hoy mismo y comienza a tocar como un profesional!</p>

            <p>
            ¡Es hora de dar un paso adelante en tu carrera musical con una guitarra de alta calidad! Nuestras guitarras son ideales tanto para principiantes como para músicos experimentados. Ofrecemos una amplia gama de modelos y marcas, desde guitarras acústicas tradicionales hasta guitarras eléctricas de última generación. Cada una de nuestras guitarras ha sido cuidadosamente seleccionada y está construida con materiales de primera calidad para garantizar un sonido increíble. ¡Ven a verlas hoy mismo y consigue la guitarra que necesitas para tocar como un profesional!
            </p>
          </div>
      </div>
    </main>
  )
}

export default Nosotros