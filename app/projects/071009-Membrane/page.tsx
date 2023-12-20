import Image from 'next/image';
import mem from './img/membrane-architecture-zimarc-08.jpg'

export default function Membrane() {
  return (
    <div>
      <h1>Membrane</h1>
    
   
      <Image src={require('./svg/membrane-structure-zimarc-01.svg')} alt="Image 1" />
      <Image src= {mem} alt="Image 2" />

      <div style={{ padding: '20px' }}>
        <img src="/svg/membrane-structure-zimarc-05.svg" alt="Image 6" />
      </div>

      <img src="./img/membrane-architecture-zimarc-04.jpg" alt="Image 7" />
      <img src="./img/membrane-architecture-zimarc-05.jpg" alt="Image 8" />
      <img src="./img/membrane-architecture-zimarc-06.jpg" alt="Image 9" />
      <img src="./img/membrane-architecture-zimarc-07.jpg" alt="Image 10" />
      <img src="/images/membrane-structure-zimarc-01.svg" alt="Image 1" />
     
    </div>
  )
}