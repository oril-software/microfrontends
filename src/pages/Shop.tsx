import { CSSProperties } from 'react';
import * as singleSpa from 'single-spa';


const Shop = () => {

  const navigateToCard = () => {
    singleSpa.unregisterApplication('@oril/shopping-app');
    return singleSpa.navigateToUrl('/card');
  }

  const imageBoxStyle: CSSProperties = {cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '200px', height: "300px", flexDirection: 'column'};

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div onClick={navigateToCard} style={imageBoxStyle}>
        <img width={150} height={200} src="https://picsum.photos/150/200"/> 
        <p>500$</p>
      </div>
      <div onClick={navigateToCard} style={imageBoxStyle}>
        <img width={150} height={200} src="https://picsum.photos/150/200"/> 
        <p>200$</p>
      </div>
      <div onClick={navigateToCard} style={imageBoxStyle}>
        <img width={150} height={200} src="https://picsum.photos/150/200"/> 
        <p>750$</p>
      </div>
    </div>
  )
}

export default Shop;
