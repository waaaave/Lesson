// 函数式组件
import React from 'react';
import { LoginEntity } from '../../model/login';

interface PropsForm {
  onLogin: (login:LoginEntity) => void
}

// T
export const LoginComponent: React.FC<PropsForm> = () => {
  return(
    <div>
      
    </div>
  )
}