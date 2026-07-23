import React, { useState } from 'react'

const MiButon = ( { title, onClick} )=>{
  
 return <button type="button" onClick={onClick} > {title} </button>

}

export const Contador = () => {

     const [ contador, setContador ] = useState( 0 )

  return (
    <section >
        
        <h1>Contador</h1>

        <div>
        
            <p> {contador} </p>            
        
        </div>

        <div className = "botones" >

            <MiButon onClick={()=>setContador((cont)=>cont-1) }   title={"-"} />
            <MiButon onClick={()=>setContador(0) }   title={"Reset"} />
            <MiButon onClick={()=>setContador((cont)=>cont+1) }   title={"+"} />
        
        </div>
        

      </section>
  ) 
}
