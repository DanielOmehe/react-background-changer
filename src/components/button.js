import '../stylesheets/button.css';

const Button =({background, children, onclick})=>{
    return(
        <button className='button' onClick={onclick} >{children}</button>
    )
}

export default Button