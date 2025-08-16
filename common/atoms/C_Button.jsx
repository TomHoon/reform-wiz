'use client'

import styles from '@/styles/C_Button.module.scss'

/**
 * [공통컴포넌트 - button]
 * * text: 버튼 안에 표시될 텍스트
 * * width: 버튼의 가로 길이 타입(small, medium, large)
 * * height: 버튼의 세로 길이 타입(small, medium, large)
 * * fontColor: 텍스트 색상 타입(white, black, gray, purple)
 * * borderColor: 테두리 색상 타입(none, purple, lightpurple)
 * * fontSize: 폰트 크기 타입(small, medium, large)
 * * backgroundColor: 배경 색상 타입(white, purple, lightpurple, yellow, gray)
 * * shadow: 그림자 스타일 타입(none, light, strong)
 * * icon: 버튼 왼쪽에 삽입할 아이콘 요소
 * * iconType: 아이콘 크기 타입(small, large)
 * * clickCallback: 버튼 클릭 시 실행할 함수
 */

const widthMap = {
  small: styles.widthSmall,
  medium: styles.widthMedium,
  large: styles.widthLarge,
}
const heightMap = {
  small: styles.heightSmall,
  medium: styles.heightMedium,
  large: styles.heightLarge,
}
const fontColorMap = {
  white: styles.fontColorWhite,
  black: styles.fontColorBlack,
  gray: styles.fontColorGray,
  purple: styles.fontColorPurple,
}
const borderColorMap = {
  none: styles.borderColorNone,
  purple: styles.fontColorPurple,
  lightpurple: styles.fontColorLightPurple,
}
const fontSizeMap = {
  small: styles.fontSizeSmall,
  medium: styles.fontSizeMedium,
  large: styles.fontSizeLarge,
}
const bgColorMap = {
  white: styles.bgColorWhite,
  purple: styles.bgColorPurple,
  lightpurple: styles.bgColorLightpurple,
  yellow: styles.bgColorYellow,
  gray: styles.bgColorGray,
}
const shadowMap = {
  none: styles.shadowNone,
  light: styles.shadowLight,
  strong: styles.shadowStrong,
}
const iconMap = {
  small: styles.iconSmall,
  large: styles.iconLarge,
}

const func = () => {}

export default function C_Button({
    text = '',
    width = 'medium',
    height = 'medium',
    fontColor = 'white',
    borderColor = 'none',
    fontSize = 'medium',
    backgroundColor = 'purple',
    shadow = 'none',
    icon = '',
    iconType = '',
    clickCallback = func,
}) {
    
return (
    <button
    className={`${styles.button} 
    ${widthMap[width]} 
    ${heightMap[height]} 
    ${fontColorMap[fontColor]} 
    ${borderColorMap[borderColor]} 
    ${fontSizeMap[fontSize]} 
    ${bgColorMap[backgroundColor]} 
    ${shadowMap[shadow]}`}
    onClick={() => clickCallback()}
    >
        
    {icon && <span className={`${styles.icon} ${iconMap[iconType]}`}>{icon}</span>}
    {text}
        
    </button>
 )
}
