import * as React from 'react'
import { SharedProps } from '../types'
import { ConnectedStep } from './ConnectedStep'
import { TourGuideContext } from './TourGuideContext'

export interface StepProps extends SharedProps {
  name: string
  order: number
  active?: boolean
}

interface Props extends StepProps, SharedProps {
  children: React.ReactNode
}

export const Step = (props: Props) => {
  const context = React.useContext(TourGuideContext)
  return <ConnectedStep {...{ ...props, context }} />
}
