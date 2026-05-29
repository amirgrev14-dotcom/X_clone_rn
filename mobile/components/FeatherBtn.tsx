import { Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'

interface SelectedPops {
  featherName: React.ComponentProps<typeof Feather>['name'];
  antName?: React.ComponentProps<typeof AntDesign>['name'];
  size: number;
  color: string;
  activeColor?: string;
  variant?: "default" | "antDesign";
  isChecked?: boolean;
  disabled?: boolean;
  inText?: any;
  changeColor?: string;
  changeVariantOnPress?: boolean;
  onPress?: () => void;
}


const FeatherBtn = (props: SelectedPops) => {
  
  const { onPress, featherName="home", size=18, activeColor, color="#6b7280", disabled=false, inText } = props
  const [currentColor, setCurrentColor] = useState(color)
  
  function handleBtn() {
    if(activeColor) {
      setCurrentColor(activeColor.toString().toLowerCase())
    }

    onPress && onPress() // optional

  }

  return (
    <TouchableOpacity onPress={handleBtn} disabled={disabled} className='flex-row'>
      <Feather name={featherName} size={size} color={currentColor} />

      <Text style={{color: currentColor}} className='text-wrapt-sm ml-2' >
        { inText }
      </Text>
    </TouchableOpacity>
  )
}

export default FeatherBtn