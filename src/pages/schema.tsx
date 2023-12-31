import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import CustomInput from '@/components/CustomInput/CustomInput'

const inter = Inter({ subsets: ['latin'] })

const schema = yup
  .object({
    name: yup.string().required().max(10),
    last_name: yup.string().required().max(20),
    age: yup.number().positive().integer().required(),
  })
  .required()

export default function Schema() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: any) => console.log(data)

  return (
    <>
      <Head>
        <title>Clase 13</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Stack spacing={2} direction={'row'}>
          <Link href="/controller">
            <Button variant="outlined" size="small" >
              Controller
            </Button>
          </Link>
          <Link href="/use-controller">
            <Button variant="outlined" size="small" >
              useController
            </Button>
          </Link>
          <Link href="/schema">
            <Button variant="contained" size="small" >
              Schema
            </Button>
          </Link>
        </Stack>
        <Typography variant="h1" component="h1" sx={{ fontSize: 36 }} className={inter.className}>
          Clase 13: React Hook Form + Material UI (Schema validation)
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <CustomInput name='name' control={control} /> */}
          <label>
            Nombre:
            <input {...register("name")} />
          </label>
          <p>{errors.name?.message}</p>

          <label>
            Apellido:
            <input {...register("last_name")} />
          </label>
          <p>{errors.last_name?.message}</p>

          <label>
            Edad:
            <input {...register("age")} />
          </label>
          <p>{errors.age?.message}</p>


          <input type="submit" />
        </form>
      </main>
    </>
  )
}
