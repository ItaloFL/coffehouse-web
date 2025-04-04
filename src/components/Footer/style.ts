import styled from 'styled-components'
import { Container } from '../../styles/layout/Container'

export const FooterWrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-top: 1px solid ${props => props.theme.colors.headerBorderBottomColor};
  padding: 30px 0;
`

export const FooterContent = styled(Container)`
  display: flex;
  gap: 7.5rem;

  @media(max-width: 800px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 3rem;
  }
`

export const CoffeLogo = styled.div``

export const ListTitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.footerListTitleColor};
  margin-bottom: 10px;
  font-weight: bold;
`

export const ListItem = styled.li`

  margin-bottom: 15px;
  
  a {
    font-size: 1rem;
    color: ${props => props.theme.colors.footerListColor};
    cursor: pointer;
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${props => props.theme.colors.linkFooterHover};
    }
  }
`

export const LogoText = styled.p`
  color: ${props => props.theme.colors.secondaryTextColor};
  font-size: 0.875rem;
  margin-top: 10px;
`
