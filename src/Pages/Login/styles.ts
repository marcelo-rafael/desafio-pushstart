import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;
      
`

export const Header = styled.header`
  background: #7245A9;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  .circle-header {
    background: white;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    img {
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export const Form = styled.form``

export const Footer = styled.footer`
  position: relative;
  height: 5rem;
  background: #659399;

  .circle-footer {
    position: absolute;
    right: 1rem;
    top: 1rem;
    background: #5EB891;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    img { 
      width: 30px;
      position: absolute;
      top: 0.6rem;
      right: 0.6rem;
    }
  }

`