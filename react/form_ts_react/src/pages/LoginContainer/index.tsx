import React, { useEffect } from 'react'
import { isValidLogin } from '../../api/login'
import { LoginEntity } from '../../model/login'
import { useHistory } from 'react-router-dom'
// @material react-native android
// apple system 苹果  material-ui 安卓
import { Card, CardContent, CardHeader } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
import { LoginComponent } from '../LoginComponent'

const useFormStyle = makeStyles((theme) => createStyles({
    card:{
      maxWidth: 400,
      margin: "0 auto"
    }
  })
)

export const LoginContainer = () => {
  const history = useHistory()
  const classes = useFormStyle()
  // useEffect(() => {
  //   // isValidLogin();
  //   handleLogin({
  //     login: 'admin',
  //     password: 'test'
  //   })
  // }, [])
  const loginSucceeded = (isValid: boolean) => {
    if (isValid) {
      history.push('/pageB')
    } else {
      console.log('出错了');
    }
  }
  const handleLogin = (login: LoginEntity) => {
    // loginSucceeded(await isValidLogin(login))
    isValidLogin(login).then(loginSucceeded)
  }

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader title="Login" />
        <CardContent>
          <LoginComponent onLogin={handleLogin} />
        </CardContent>
      </Card>
    </div>
  )
}