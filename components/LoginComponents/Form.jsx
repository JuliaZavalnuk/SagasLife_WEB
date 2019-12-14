import GreenLine from "./GreenLine";


const Input = props => (
<div>
  <div className = {`${props.name}`}>
      <label className= 'FormLabel'>{props.name}</label><br/>
      <input 
      type = {`type${props.name}`}
      className = 'FormInput' 
      placeholder = {`${props.placeholder}`}
      name = {`${props.name}`}
      noValidate
      //onChange = {this.handleChange}	
      />
        
  </div>
  <GreenLine />
</div>
);



const Ref = props => (
  <div className = {`div${props.name}`}>
    <a className = {`ref${props.name}`} href = '#'>{props.text}</a>
  </div>
);

const Button = props => (
  <div className = {`div${props.name}`}>
    <button className = {`but${props.name}`} type = {`type${props.name}`}>{props.name}</button>
  </div>
);


export default function Form() {
  

    return (
      <form>
        <Input name = 'Email' placeholder = 'user@mail.com'/>
        <Input name = 'Password' placeholder = '••••••••'/>
        <Ref name = 'ForgotPassword' text = 'Forgot Password'/>
        <Button name = 'Submit'/>
      </form>
    );
  }