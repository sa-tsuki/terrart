import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    font-family: inherit;
    font-size: 17px;
    font-weight: bold;
    letter-spacing: .2em;
    color: white;
    text-aline: center;
    background: #36BCAC;
    display: block;
    border: 0;
    border-radius: 9999px;
    min-width: 300px;
    max-height: 50px;
    padding: 15px 0;

`

export const MainButton = (props: {text: string}) => {
    const { text } = props
    return (
        <Button>{text}</Button>
    )
}