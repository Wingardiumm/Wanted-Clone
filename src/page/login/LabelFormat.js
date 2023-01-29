import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
        color: var(--theme-palette-colors-gray-600);
    font-weight: var(--text-weight-subhead-bold);
    text-align: left;
    letter-spacing: var(--text-spacing-subhead);
    font-size: var(--text-size-subhead);
    line-height: var(--text-height-subhead);
`
function LabelFormat({content}) {
  return (
    <Label>{content}</Label>
  )
}

export default LabelFormat