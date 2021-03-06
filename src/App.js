import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
              isVegan: false,
              isKosher: false,
              isLactoseFree: false,
              dietaryRestrictions: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        if(type === "checkbox"){  
        this.setState(
            {
              [name]: checked
        })
        if(checked){
            this.setState(prevState => ({
                dietaryRestrictions: [...prevState.dietaryRestrictions, value]
            }))
          }
        if(!checked){
        this.setState({
            dietaryRestrictions: this.state.dietaryRestrictions.filter(restriction => restriction !== value)
        })
        }  
        console.log(this.state.dietaryRestrictions)
      }else{ 
        this.setState({
          [name]: value
        })
      }  
    }
    
    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name" name="firstName" onChange={this.handleChange}/><br />
                    <input placeholder="Last Name" name="lastName" onChange={this.handleChange}/><br />
                    <input placeholder="Age" name="age" onChange={this.handleChange}/><br />
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"} 
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"} 
                            onChange={this.handleChange}
                        />  Female
                    </label>
                    <br />
                    
                    <br />
                    <select 
                        onChange={this.handleChange}
                        name="destination"
                    >
                        <option value="" hidden>Choose here</option>
                        <option value="Curitiba">Curitiba</option>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="New York">New York</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="San Francisco">San Francisco</option>
                    </select>
                    <br />
                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="isVegan"
                            value="Vegan"
                            checked={this.state.isVegan}
                            onChange={this.handleChange}
                        /> Vegan
                    </label>
                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="isKosher"
                            value="Kosher"
                            checked={this.state.isKosher}
                            onChange={this.handleChange}
                        /> Kosher
                    </label>
                    <br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="isLactoseFree"
                            value="Lactose Free"
                            checked={this.state.isLactoseFree}
                            onChange={this.handleChange}
                        /> Lactose Free
                    </label>
                    <br />
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.dietaryRestrictions.join(', ')}
                </p>
            </main>
        )
    }
}

export default App
