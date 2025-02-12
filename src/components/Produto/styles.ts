import styled from 'styled-components'
import { cores } from '../../styles'

// Verifica se cores está definido para evitar erro
const corPrincipal = cores?.corPrincipal || '#000'
const corSecundaria = cores?.corSecundaria || '#444'

export const Produto = styled.div`
  padding: 16px;
  background-color: #222;
  border-radius: 8px;
  text-align: center;
`

export const Titulo = styled.h3`
  font-size: 18px;
  color: #fff;
  margin-bottom: 8px;
`

export const Capa = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    border-radius: 4px;
  }
`

export const Prices = styled.div`
  margin: 16px 0;
  color: #fff;

  small {
    font-size: 16px;
    text-decoration: line-through;
    margin-right: 8px;
    opacity: 0.7;
  }

  strong {
    font-size: 18px;
    font-weight: bold;
  }
`

export const Tag = styled.span`
  background-color: ${corPrincipal};
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 4px;
`

export const Plataformas = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;

  li {
    background-color: ${corPrincipal};
    padding: 8px;
    font-size: 12px;
    white-space: nowrap;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
  }
`

export const BtnComprar = styled.button`
  display: block;
  width: 100%;
  background-image: linear-gradient(45deg, ${corPrincipal}, ${corSecundaria});
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-image: linear-gradient(
      -45deg,
      ${corPrincipal},
      ${corSecundaria}
    );
    transform: scale(1.05);
  }
`
