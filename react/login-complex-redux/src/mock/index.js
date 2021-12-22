import mock from 'mockjs'
import loginAPI from './login'

mock.mock(/\/login/, 'post', loginAPI.login)