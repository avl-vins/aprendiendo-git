import React from 'react'


const ListaUsuarios = ( {users})=>{

        return <ul>
            {
                 users.map( (item)=> <li key={ item.id } > <span>Nombre:{ item.nombre }</span> <span>Edad:{item.edad}</span>   </li> )
            }
        </ul>
    }


export const Lista = () => {

    const usuarios = [ {id:"US1",nombre:"Juan",edad: 12},
                       {id:"US2",nombre:"Carlos",edad:13},
                       {id:"US3",nombre:"Hector",edad:35},
                       {id:"US4",nombre:"Ricardo",edad:45},
                       {id:"US5",nombre:"Roberto",edad:34},
                       {id:"US6",nombre:"Carmen",edad:78}]

    const mayores18 = usuarios.filter((user)=> user.edad>18)
    
    

   

  return (
    <section>

        <ListaUsuarios users={mayores18} />
        
    </section>
  )
}
 