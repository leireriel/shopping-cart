import React, { memo } from 'react';
import Shop from 'components/Shop';
import Order from 'components/Order';
import { useSelector } from 'react-redux';
import Modal from 'components/Modals';

  // Arreglar uso excesivo de h1, pero sin que se rompa el css (no sé si puedo hacer cambios en el css)
  // Al final, pasar la app por aquí https://validator.w3.org/
  // Descuentos y modales
  // Carpeta utils y constants
  // Para el final: valorar opción de enviar los copies en un objeto a cada componente (textsEN={}). Con destructuring los extraigo directamente
  // Para el final: redux
  // También usar el *destructuring* en la función para poder pasar objetos sin necesidad de que las props estén ordenadas, y para asignar valores por defecto cómodamente. 
  // Y sacar las carpetas `img` y `css` de public, para ponerlas en src

const App = memo(() => {
  const modalState = useSelector(state => state.modal.open);

  return (
    <>
    {modalState ? (
      <Modal />
    ) : (
      <main className="App">
        <Shop />
        <Order />
      </main>
    )}
  </>
  )
});

export default App;
