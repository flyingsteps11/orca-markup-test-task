import styled from 'styled-components'
import { defaultTheme } from '../../../styles/theme'
import { Wrapper } from '../Button/Button.styles'
import { Link, SourceLinkWrapper } from '../SourceLink/SourceLink.styles'
import { Container } from '../CopyIp/Copyip.styles'
import { media } from '../mixins/media'

export const CardBlock = styled.div`
  background: ${defaultTheme.colors.white};
  border-radius: ${defaultTheme.sizes.borderRadius};
  border: 1px solid ${defaultTheme.colors.grey};
  padding: 16px;

  ${media.lg} {
    padding: 20px 30px 24px;
  }

  ${Wrapper} {
    width: ${defaultTheme.sizes.full};
    margin-left: auto;
    margin-top: 24px;

    ${media.md} {
      max-width: 198px;
    }
  }

  ${SourceLinkWrapper} {
    display: inline-block;

    ${media.md} {
      max-width: 193px;
    }

    ${Link} {
      word-break: break-all;
      margin: 0 4px;
    }
  }

  ${Container} {
    padding: 3px 8px;
  }
`
export const Label = styled.span`
  color: ${defaultTheme.colors.darkGrey};
`
export const Text = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 84px;
`
export const TextGrey = styled.span`
  color: ${defaultTheme.colors.grey};
`
export const CardContainer = styled.div`
  display: grid;
  grid-column-gap: 32px;
  grid-row-gap: 16px;

  ${media.lg} {
    grid-template-columns: 200px 1fr;
  }
`
export const CardBlockItem = styled.div`
  display: grid;
  grid-template-columns: 66px 1fr;
  align-items: center;
  grid-column-gap: 8px;
  height: max-content;

  &:last-child {
    align-items: flex-start;
  }
`
export const CardTextWrapper = styled.div`
  display: flex;
  align-items: center;

  ${TextGrey} {
    margin-left: 4px;
  }
`
export const CardBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:first-child {
    padding-top: 4px;
  }

  &:last-child {
    ${CardBlockItem} {
      grid-template-columns: 1fr;
      grid-row-gap: 8px;

      ${media.md} {
        grid-template-columns: 94px 1fr;
      }
    }
  }
`
