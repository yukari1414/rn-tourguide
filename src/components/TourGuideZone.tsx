import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { SharedProps } from '../types'
import { Step } from './Step'
import { Wrapper } from './Wrapper'

export interface TourGuideZoneProps extends Partial<SharedProps> {
  zone: number
  name?: string
  isTourGuide?: boolean
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

export const TourGuideZone = ({
  isTourGuide = true,
  zone,
  name,
  children,
  shape,
  image,
  title,
  subtitle,
  text,
  labels,
  maskOffset,
  borderRadius,
  style,
  keepTooltipPosition,
  tooltipTopOffset,
  tooltipBottomOffset,
  borderRadiusObject,
}: TourGuideZoneProps) => {
  if (!isTourGuide) {
    return <>{children}</>
  }

  return (
    <Step
      text={text ?? `Zone ${zone}`}
      order={zone}
      name={`${name || zone}`}
      {...{
        image,
        title,
        subtitle,
        labels,
        shape,
        maskOffset,
        borderRadius,
        keepTooltipPosition,
        tooltipTopOffset,
        tooltipBottomOffset,
        borderRadiusObject,
      }}
    >
      <Wrapper {...{ style }}>{children}</Wrapper>
    </Step>
  )
}
