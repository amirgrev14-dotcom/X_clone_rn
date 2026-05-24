import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

interface SelectedPops {
  name: React.ComponentProps<typeof Feather>['name'];
  size: number;
  color: string;
  disabled?: boolean;
  onPress?: () => void;
}

const FeatherBtn = (props: SelectedPops) => {
  const { onPress, name="home", size=20, color="black", disabled=false } = props
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Feather name={name} size={size} color={color} />
    </TouchableOpacity>
  )
}

export default FeatherBtn