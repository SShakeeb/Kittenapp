import { useState } from "react";
import createCatServices from "../services/createCatServices";

// useForm functional component
export const useForm = (callback: any, UnsavedCatname: { name: string; }) => {
    const [values, setValues] = useState(UnsavedCatname);

    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    // onSubmit
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createCatServices(values);
        await callback(); // triggering the callback
    };

    // return values
    return {
        onChange,
        onSubmit,
        values,
    };
}
