import { Link } from 'react-router-dom'

import userImg from '../../assets/user.png'
import messageImg from '../../assets/message.png'

import * as S from './styles'


export function Login() {
  return (
    <S.Container>
      <S.Header>
        <div className="circle-header">
          <img src={userImg} alt="Logo de usuário" />
        </div>
      </S.Header>

      <S.Form action="">
        <input type="text" name="name" id="name" placeholder="Usuário" />
        <input type="password" name="password" id="password" placeholder="Senha" />
        <button type="submit">entrar</button>
      </S.Form>

      <S.Footer>
        <Link to="/timeline">
          <div className="circle-footer">
            <img src={messageImg} alt="Icone de mensagem" />
          </div>
        </Link>
      </S.Footer>






    </S.Container>
  )
}