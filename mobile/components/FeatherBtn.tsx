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
  
  const { onPress, featherName="home", antName="home", isChecked, size=20, variant="default", activeColor="#1DA1F2", color="black", disabled=false, inText, changeVariantOnPress=false } = props
  const [currentColor, setCurrentColor] = useState(color)
  const [changeVariant, setChangeVariant] = useState(variant)
  const [activeBtn, setActiveBtn] = useState(false)

  
  function handleBtn() {
    setActiveBtn(!activeBtn)
    onPress && onPress() // optional

    if(changeVariantOnPress && isChecked) {
      setChangeVariant(activeBtn ? "antDesign" : "default")
      setCurrentColor(activeColor)
    } 

    
  }

  return (
    <TouchableOpacity onPress={handleBtn} disabled={disabled} className='flex-row'>
      { isChecked ?
            <>
              {!isChecked && <Feather name={featherName} size={size} color={currentColor} />}
              {isChecked && <AntDesign name={antName} size={size} color={currentColor} />}
            </>
        : <Feather name={featherName} size={size} color={activeBtn ? activeColor : color} />}
      <Text style={{color: activeBtn ? activeColor : color}} className='text-gray-500 text-wrapt-sm ml-2' >
        { inText }
      </Text>
    </TouchableOpacity>
  )
}

export default FeatherBtn