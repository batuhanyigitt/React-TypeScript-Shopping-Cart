import * as React from 'react';
import { useForm  } from "react-hook-form";


let renderCount = 0;

export default function App(){
    const { register } = useForm();
    renderCount++;

    return (
        <div>

        <form>
            <input name="firstname" placeholder="First name" />
            <input name="lastname" placeholder="Last name" />
            <input type="submit" />
        </form>

        </div>

    );
}