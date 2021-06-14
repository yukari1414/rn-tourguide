import * as React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { TourGuideZone, TourGuideZoneProps } from './TourGuideZone'

export interface TourGuideZoneByPositionProps extends TourGuideZoneProps {
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
  width?: number | string
  height?: number | string
  containerStyle?: StyleProp<ViewStyle>
}

export const TourGuideZoneByPosition = ({
  isTourGuide,
  zone,
  shape,
  image,
  title,
  subtitle,
  text,
  style,
  maskOffset,
  borderRadius,
  keepTooltipPosition,
  tooltipBottomOffset,
  borderRadiusObject,

  width,
  height,
  top,
  left,
  right,
  bottom,
  containerStyle,
}: TourGuideZoneByPositionProps) => {
  if (!isTourGuide) {
    return null
  }

  const zoneStyle = {};
  Object.assign(zoneStyle, style)

  return (
    <View
      pointerEvents='none'
      style={[StyleSheet.absoluteFillObject, containerStyle]}
    >
      <TourGuideZone
        isTourGuide
        {...{
          zone,
          shape,
          maskOffset,
          borderRadius,
          keepTooltipPosition,
          tooltipBottomOffset,
          borderRadiusObject,
          image,
          title,
          subtitle,
          text,
        }}
        style={{
          ...zoneStyle,
          position: 'absolute',
          height,
          width,
          top,
          right,
          bottom,
          left,
        }}
      />
    </View>
  )
}
