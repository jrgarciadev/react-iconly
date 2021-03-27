import styled from 'styled-components'
import { hexa } from '@utils'

export const CheckboxContainer = styled.div`
  display: block;
  margin: 0 auto;
  position: relative;
  line-height: 2rem;
`

export const CheckboxInput = styled.input`
  /* Hide the default */
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:hover ~ label:before {
    background-color: ${(props) => props.theme.bg.default};
    border-color: ${(props) => props.theme.accents.a6};
  }
  &:focus ~ label:before {
    border-color: ${(props) => props.theme.accents.a6};
    box-shadow: 0 0 0 2px ${(props) => hexa(props.theme.colors.primary, 0.6)};
  }
  &:checked ~ label:before {
    transition: all 400ms ease;
    background-color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
  }
  &:checked:focus ~ label:before {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${(props) => hexa(props.theme.colors.primary, 0.3)};
  }
  &:checked ~ label:after {
    top: 0.4rem;
    left: 1.5rem;
    background-color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.bg.default};
  }
  &:disabled ~ label {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:disabled ~ label:before {
    background-color: ${(props) => props.theme.bg.default};
    border-color: ${(props) => props.theme.accents.a6};
  }
  &:disabled:checked ~ label:before {
    background-color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
  }
  &:hover:disabled:checked ~ label:before {
    background-color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
  }
`

export const CheckboxLabel = styled.label`
  display: inline-block;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontw.light};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.colors.accent3};
  padding: 0.2rem 0;
  margin-bottom: 0;
  margin: 0 auto;
  padding-left: 4.5rem;
  cursor: pointer;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${(props) => props.theme.fontSize.xxs};
    padding-left: 3.2rem;
  }

  .blank {
    padding-left: 3.2rem;
  }

  &:before {
    transition: all 400ms ease;
    content: '';
    display: inline-block;
    position: absolute;
    height: 2.4rem;
    width: 3.6rem;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.bg.default};
    border: 1px solid ${(props) => props.theme.accents.a6};
    border-radius: 3rem;
  }
  &:after {
    content: '';
    position: absolute;
    height: 1.6rem;
    width: 1.6rem;
    top: 0.4rem;
    left: 0.5rem;
    background-color: ${(props) => props.theme.accents.a6};
    border: 0 solid ${(props) => props.theme.accents.a6};
    border-radius: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    &:before {
      width: 3rem;
      height: 2.2rem;
    }
    &:after {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`
