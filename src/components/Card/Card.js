import React, { useState } from 'react'
import {
  ButtonWrapper,
  CardBlock,
  CardBlockItem,
  CardBlockWrapper,
  CardContainer,
  CardTextWrapper,
  Label,
  Text,
  TextGrey,
} from './Card.styles'
import { BorderGrey } from '../ui-kit/IconWrapper/IconWrapper.style'
import { IconWarningOrange, IconWarningRed, IconWarningYellow } from '../../assets/icons'
import CopyIp from '../ui-kit/CopyIp/Copyip'
import Button from '../ui-kit/Button/Button'
import SourceLink from '../ui-kit/SourceLink/SourceLink'
import Modal from '../Modal/Modal'

const Card = ({ item }) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const openModal = () => {
    setModalVisible(true)
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflowY = 'hidden'
    }
  }
  const closeModal = () => {
    setModalVisible(false)
    document.body.style.overflowY = 'auto'
  }

  return (
    <>
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
              <CopyIp children={item.ipV4} />
            </CardBlockItem>
            <CardBlockItem>
              <Label>IP Address v6:</Label>
              <CopyIp children={item.ipV6} />
            </CardBlockItem>
            <CardBlockItem>
              <Label>Scan source:</Label>
              <SourceLink children={item.scanSource} />
            </CardBlockItem>
          </CardBlockWrapper>
        </CardContainer>
        <ButtonWrapper>
          <Button primary onClick={openModal}>
            Show additional info
          </Button>
        </ButtonWrapper>
      </CardBlock>
      {isModalVisible && <Modal item={item} onClose={closeModal} isOpen={isModalVisible}></Modal>}
    </>
  )
}

export default Card
