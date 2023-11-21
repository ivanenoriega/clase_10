import { TextField } from "@mui/material"
import { useController } from "react-hook-form";

const CustomInput = ({ control, name }: any) => {
    const { field } = useController({
        name,
        control,
    });

    return <TextField
        onChange={field.onChange} // send value to hook form 
        onBlur={field.onBlur} // notify when input is touched/blur
        value={field.value} // input value
        name={field.name} // send down the input name
        inputRef={field.ref} // send input ref, so we can focus on input when error appear
    />
}

export default CustomInput