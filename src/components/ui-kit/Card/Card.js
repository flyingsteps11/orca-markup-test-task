import React from 'react'
import {
  CardBlock,
  CardBlockItem,
  CardBlockWrapper,
  CardContainer,
  CardTextWrapper,
  Label,
  Text,
  TextGrey,
} from './Card.styles'
import { BorderGrey } from '../IconWrapper/IconWrapper.style'
import { IconWarningOrange, IconWarningRed, IconWarningYellow } from '../../../assets/icons'
import Copyip from '../CopyIp/Copyip'
import Button from '../Button/Button'
import SourceLink from '../SourceLink/SourceLink'

const Card = ({ item }) => (
  <CardBlock>
    <CardContainer>
      <CardBlockWrapper>
        <CardBlockItem>
          <Label>Risk level:</Label>
          {item.icon === 0 && (
            <CardTextWrapper>
              <BorderGrey>
                <IconWarningRed />
              </BorderGrey>
              <Text>High</Text>
            </CardTextWrapper>
          )}

          {item.icon === 1 && (
            <CardTextWrapper>
              <BorderGrey>
                <IconWarningOrange />
              </BorderGrey>
              <Text>Medium</Text>
            </CardTextWrapper>
          )}
          {item.icon === 2 && (
            <CardTextWrapper>
              <BorderGrey>
                <IconWarningYellow />
              </BorderGrey>
              <Text>Low</Text>
            </CardTextWrapper>
          )}
        </CardBlockItem>
        <CardBlockItem>
          <Label>Name:</Label>
          <Text>{item.name}</Text>
        </CardBlockItem>
        <CardBlockItem>
          <Label>File name:</Label>
          <CardTextWrapper>
            <Text>{item.fileName}</Text>
            <TextGrey>({item.fileSize})</TextGrey>
          </CardTextWrapper>
        </CardBlockItem>
      </CardBlockWrapper>
      <CardBlockWrapper>
        <CardBlockItem>
          <Label>IP Address v4:</Label>
          <Copyip children={item.ipV4} />
        </CardBlockItem>
        <CardBlockItem>
          <Label>IP Address v6:</Label>
          <Copyip children={item.ipV6} />
        </CardBlockItem>
        <CardBlockItem>
          <Label>Scan source:</Label>
          <SourceLink children={item.scanSource} />
        </CardBlockItem>
        <></>
      </CardBlockWrapper>
    </CardContainer>
    <Button primary>Show additional info</Button>
  </CardBlock>
)

export default Card
