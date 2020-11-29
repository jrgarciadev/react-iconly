import styled from 'styled-components'
import { hexa } from '@utils'

export const StyledCodeContainer = styled.code`
  ${({ theme }) => theme.mixins.flexCenter};
  background: ${({ theme }) => hexa(theme.colors.primary, 0.25)};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0 14px;
  height: 50px;
  span {
    font-family: ${({ theme }) => theme.fontFamily.fontMono};
    font-size: ${({ theme }) => theme.fontSize.xxs};
    color: white;
  }
  .symbol {
    color: ${({ theme }) => theme.colors.accent3};
  }
  .component {
    color: ${({ theme }) => theme.colors.codeComponent};
  }
  .attr {
    margin-left: 0.8rem;
    color: ${({ theme }) => theme.colors.codeAttr};
  }
  .attrValue {
    color: ${({ theme }) => theme.colors.codeAttrValue};
  }
  .paper {
    margin-left: 1rem;
    cursor: pointer;
  }
`
