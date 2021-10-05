import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'

import Image from 'next//image'
import styles from './styles.module.scss'
import CarImage from '../../public/assets/images/login/Reg_Vehicles_img.png'
import LoginApi from '../../network/api/login'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const submit = async (e) => {
    e.preventDefault()

    try {
      const response = await LoginApi.loginNew(username, password)
      console.log({ response })
    } catch (error) {
      console.log({ error })
    }
  }


  return (
    <>
      <div className=" min-h-screen flex items-center justify-center">
        <div className={`${styles.login_wrapper} grid gap-3 grid-cols-1 md:grid-cols-2`}>

          <div>
            <Image src={CarImage} />
          </div>

          <form onSubmit={submit} className={styles.formSection}>
            <p className={styles.loginTitle}>Middle East’s largest auction platform</p>
            <TextField
              autoComplete="on"
              fullWidth
              label="Username"
              variant="outlined"
              onChange={
                (e) => setUsername(e.target.value)
              }
            />
            <TextField
              autoComplete="on"
              type="password"
              fullWidth
              label="Password"
              variant="outlined"
              onChange={
                (e) => setPassword(e.target.value)
              }
            />

            <div>
              <Checkbox defaultChecked />
              <span>Remember My Account </span>
            </div>


            <button type="submit">Login</button>

            <p className={styles.forgetLink}>Forget your password?</p>

          </form>

        </div>

      </div>


    </>
  )
}

export default Login

