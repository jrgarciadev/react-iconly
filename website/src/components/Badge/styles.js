import styled from 'styled-components'
import { hexa } from '@utils'
import { prop } from 'styled-tools'

export const Span = styled.span`
  display: inline-block;
  align-items: center;
  color: ${(props) => props.theme.colors.accent2};
  background-color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  padding: 3px 4px;
  margin: 0 2px;
  font-size: ${(props) => props.theme.fontSize.xxs};
  font-weight: 800;
  border-radius: ${(props) => props.theme.radius.sm};
  letter-spacing: 0.6px;
  line-height: 1;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);
  align-items: center;
  align-self: center;
`

export const StyledBadge = styled(Span)`
  color: ${prop('theme.colors.primary')};
  background-color: ${(props) => hexa(props.theme.colors.primary, 0.1)};
`
