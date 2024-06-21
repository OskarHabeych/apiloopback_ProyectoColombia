import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const Ponencias = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
  
    const onSubmit = async ( userInfo ) => {
      console.log(userInfo)
      // navigate('/')
    }
    /*return (<>
        <main className='sign-up-wrapper'>
          <img className='sign-up-wrapper__image' src={travel} alt='luggage, books and glasses picture in a orange backgrpund' />
          <form 
            className='sign-up'
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className='sign-up__title'>Login</h2>
            <div className='input-wrapper'>
              <label
                className='sign-up__label'
                htmlFor='input-email'

                Descripción General Problemática :
              </label>
              <input
                className='sign-up__input'
                type='email'
                placeholder='Enter your email'
                id='input-email'
                name='email'
                { ...register('email') }
            />
          </div>
          <div className='input-wrapper'>
            <label
              className='sign-up__label'
              htmlFor='input-password'
            >
              Password
            </label>
            <input
              className='sign-up__input'
              type='password'
              placeholder='Enter your password'
              id='input-password'
              name='password'
              { ...register('password') }
            />
          </div>
          <button className='sign-up__form-button'>Login</button>
        </form>
      </main>*/
      /*<main  className='sign-up-wrapper sign-desktop'>
        <img 
          className='sign-up-wrapper__image-desktop' 
          src={travel} 
          alt='luggage, books and glasses picture in a orange backgrpund' 
        />
        <form 
          className='sign-up-desktop'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className='sign-up__title'>Login</h2>
          <div className='input-wrapper'>
            <label
              className='sign-up__label'
              htmlFor='input-email-desk'
            >
              Descripción General Problemática :
            </label>
            <input
              className='sign-up__input'
              type='resena'
              placeholder=''
              id='input-email-desk'
              name='resena'
              { ...register('resena') }
            />
          </div>
          <div className='input-wrapper'>
            <label
              className='sign-up__label'
              htmlFor='input-password-desk'
            >
              Ampliación de la Problemática:
            </label>
            <input
              className='sign-up__input'
              type='password'
              placeholder='Enter your password'
              id='input-password-desk'
              name='password'
              { ...register('ponencia') }
            />
          </div>
          <button className='sign-up__form-button'>Suministrar Información</button>
        </form>
      </main>
    </>)
  }

    {Descripción General Problemática :}
    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
    
    {Ampliación de la Problemática :}
    <input type="text" placeholder="Type here" className="input input-bordered input-md
    
    {Fecha actual :}
    <input type="text" placeholder="Type here" className="input input-bordered input-xs w-full max-w-xs" />
  
  
  export default SignIn*/