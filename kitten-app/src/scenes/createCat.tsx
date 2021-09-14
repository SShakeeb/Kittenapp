import React from "react";

import { useForm } from "../stateHooks/useForm";

import createCatServices from "../services/createCatServices";
function CreateCat() {
    // defining the initial state for the form
    const initialState = {
        name: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit } = useForm(
        createCatServices,
        initialState
    ); 

    return (
        <form onSubmit={onSubmit}>
        <div>
            <input
                name='name'
                placeholder='name'
                onChange={onChange}
                />
            <button type='submit'>Submit</button>
        </div>
        </form>
    );
}

export default CreateCat;