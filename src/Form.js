import React, { useState } from "react";
import styled from 'styled-components'
import axios from 'axios'
import * as yup from "yup"

const formSchema = yup.object().shape({
    name: yup.string()
    .min(2, "must include atleast 2 characters")
    .required("Name is required"),
    size: yup.string,
    topping1: yup.boolean(),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean(),
    topping5: yup.boolean(),
    other: yup.string(),
})

const Form = () => {
    const [pizza, setPizza] = useState([])

    const [formState, setFormState] = useState({
        name: "",
        size: "Small",
        topping1: "",
        topping2: "",
        topping3: "",
        topping4: "",
        topping5: "",
        other: "",
    })

    const [errorState, setErrorState] = useState({
        name: "",
        size: "Small",
        topping1: "",
        topping2: "",
        topping3: "",
        topping4: "",
        topping5: "",
        other: "",
    })

    const validate = (e) => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
        .then(valid => {
            setErrorState({
                ...errorState,
                [e.target.name]: ""
            })
        }).catch(err => {
            console.log(err.errors)
            setErrorState({
                ...errorState,
                [e.target.name]: err.errors[0]
            })
        })
    }

    const inputChange = e => {
        e.persist()
        validate(e)
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted")
        axios.post('https://reqres.in/api/users', formState)
        .then( res =>
            setPizza([...pizza, <div>`
            <h2>{res.data.name.trim()} </h2>
            <h3>ordered: {res.data.size}</h3> 
            <h3>Toppings: </h3>
            <div>{res.data.topping1}</div> 
            <div>{res.data.topping2}</div>  
            <div>{res.data.topping3}</div>  
            <div>{res.data.topping4}</div>  
            <div>{res.data.topping5}</div> 
            <h3>Other:</h3>
            <p>{res.data.other}.</p>`
            </div>]))
    }
  return (
    <FormPage>
      <h1>CREATE YOUR PIZZA!</h1>
    <form onSubmit={formSubmit}>
        <TopDiv>
            <label htmlFor="name">
                name: 
                <input
                type="text"
                name="name"
                id="name"
                value={formState.name}
                onChange={inputChange}
                />
                {errorState.name ? <p>{errorState.name}</p> : null}
            </label>
        </TopDiv>
        <DropDown>
            <label htmlFor="size">
                Size:
                <select
                value={formState.size}
                name="size"
                id="size"
                onChange={inputChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="XL">XL</option>
                </select>
            </label>
        </DropDown>
        <CheckList>
            <label htmlFor="toppings">
                 Toppings:
                 <div><input
                 type="checkbox"
                 name="topping1"
                 value="bacon"
                 onChange={inputChange}
                 /> Bacon</div>
                 <div><input
                 type="checkbox"
                 name="topping2"
                 value="sausage"
                 onChange={inputChange}
                 /> Sausage</div>
                 <div><input
                 type="checkbox"
                 name="topping3"
                 value="pineapple"
                 onChange={inputChange}
                 /> Pineapple</div>
                 <div><input
                 type="checkbox"
                 name="topping4"
                 value="mushrooms"
                 onChange={inputChange}
                 /> Mushrooms</div>
                 <div><input
                 type="checkbox"
                 name="topping5"
                 value="fruitypebbles"
                 onChange={inputChange}
                 /> Fruity Pebbles</div>
            </label>
        </CheckList>
        <TextBox>
            <label htmlFor="other">
                Other:
                <textarea
                type="text"
                name="other"
                value={formState.other}
                onChange={inputChange}
                />
            </label>
        </TextBox>
        <button>Submit</button>
    </form>
  <div>{pizza.map(item => <div>{item}</div>)}</div>
    </FormPage>
  );
};
const FormPage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-content: center;
`
const TopDiv = styled.div`

`
const DropDown = styled.div`

`
const CheckList = styled.div`

`
const TextBox = styled.div`
display:flex;
flex-direction: column;

`
export default Form;