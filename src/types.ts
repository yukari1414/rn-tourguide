export type Shape =
  | 'circle'
  | 'rectangle'
  | 'circle_and_keep'
  | 'rectangle_and_keep'

export interface BorderRadiusObject {
  topLeft?: number
  topRight?: number
  bottomRight?: number
  bottomLeft?: number
}

export interface Offset {
  top?: number
  bottom?: number
  left?: number
  right?: number
};

export interface MaskConfig {
  shape?: Shape
  maskOffset?: number | Offset
}

export interface TooltipConfig {
  borderRadius?: number
  borderRadiusObject?: BorderRadiusObject
  keepTooltipPosition?: boolean
  tooltipTopOffset?: number
  tooltipBottomOffset?: number
}

export interface Labels {
  skip?: string
  previous?: string
  next?: string
  finish?: string
}

export interface TooltipContent {
  image?: React.ReactNode
  title?: string | React.ReactElement
  subtitle?: string | React.ReactElement
  text: string | React.ReactElement
  labels?: Labels
}

export type SharedProps = MaskConfig & TooltipContent & TooltipConfig;

export interface IStep extends SharedProps {
  name: string
  order: number
  visible?: boolean
  target: any
  wrapper: any
}
export interface StepObject {
  [key: string]: IStep
}
export type Steps = StepObject | IStep[]

export interface ValueXY {
  x: number
  y: number
}

export type SvgPath = string

// with flubber
export interface AnimJSValue {
  _value: number
}
export interface SVGMaskPathMorphParam {
  animation: AnimJSValue
  previousPath: SvgPath
  to: {
    position: ValueXY
    size: ValueXY
    shape?: Shape
    maskOffset?: number | Offset
    borderRadius?: number
    borderRadiusObject?: BorderRadiusObject
  }
}
export type SVGMaskPathMorph = (
  param: SVGMaskPathMorphParam,
) => string | string[]

export interface Progress {
  current: number | undefined;
  total: number | undefined;
}

export interface IProgress {
  relative: Progress;
  absolute: Progress;
}
