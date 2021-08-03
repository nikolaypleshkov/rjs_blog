import styled from 'styled-components'

export const Button = styled.a`
border-radius: 10px;
background: #304ffe;
white-space: nowrap;
padding: 14px 48px;

color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none !important;
&:hover{
  transition: all 0.2s ease-in-out;
  background: #4b65fd;
  color: #fff;
}

`

export const ButtonLogin = styled.a`
border-radius: 10px;
background: #00c3ff;
white-space: nowrap;
padding: 14px 48px;
width: 3px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration: none !important;
&:hover{
  transition: all 0.2s ease-in-out;
  background: #67d9fc;
  color: #fff;
}

`