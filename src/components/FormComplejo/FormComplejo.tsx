import { Button, Stack } from "@mui/material"
import CustomInput from "../CustomInput/CustomInput"
import { useFormContext } from "react-hook-form"
import { useEffect } from "react"

const FormComplejo = () => {
    const { control, watch, handleSubmit, setFocus, reset } = useFormContext()
    const fields = watch(['name', 'last_name'])

    useEffect(() => {
        console.log('fields cambio', fields)
    }, [fields, setFocus])

    return <form onSubmit={handleSubmit((data) => {
        console.log(data)
        reset({ ...data, name: '' })
        setFocus('last_name')
    })}>
        <Stack gap={2} direction={'column'} paddingTop={10}>
            <CustomInput name='name' control={control} />
            <CustomInput name='last_name' control={control} />
            <Button onClick={() => reset()}>
                Borrar
            </Button>
            <input type="submit" />
        </Stack>
    </form>
}

export default FormComplejo