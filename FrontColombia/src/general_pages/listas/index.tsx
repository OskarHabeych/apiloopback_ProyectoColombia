import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


/*const getPonencia = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
  
    const onSubmit = async ( userInfo ) => {
      console.log(userInfo)
    }
    return (<>
        <div class="container">
            <br>
            <a routerLink="/encomienda/create" class="btn">Registrar Problemática</a>
        
            <table class="table responsive">
              <thead>
                  <tr>
                      <th>alias</th> //otra modelo "persona"
                      <th>RESEÑA</th>
                      <th>PONENCIA</th>
                      <th>FECHA</th>
                  </tr>
              </thead>
        
              <tbody>
                <tr *ngFor="let p of listado">
                  <td>{{p.alias}}</td>
                  <td>{{p.resena}}</td>
                  <td>{{p.ponencia}}</td>
                  <td>{{p.fecha}}</td>
                  <td>
                    <a routerLink="/encomienda/edit/{{p.id}}" class="btn">Editar</a>
                    <button class="btn red" (click)="delete(p.id)">Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    </>
    )
}*/