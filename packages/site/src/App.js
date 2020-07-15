import React from 'react'
import Component from '@megazord/components'
import {colors, theme, typograph} from "@megazord/styleguide"

const App = () => {
    const  {blue, red, orange, purple} = colors
    const  {palette: { primary }} = theme
    const { fontFamily } = typograph

    return (
        <div style={{backgroundColor: primary.main, color: primary.contrastText, fontFamily: fontFamily}}>
            {Component}
            {
                red.light.reverse().map(re => (
                    <div key={re} style={{backgroundColor: re, color: 'black'}}>{re}</div>
                ))
            }
            {
                <div key={red.main} style={{backgroundColor: red.main, color: 'black'}}>{red.main}</div>
            }
            {
                red.dark.map(re => (
                    <div key={re} style={{backgroundColor: re, color: 'white'}}>{re}</div>
                ))
            }
            {
                blue.light.reverse().map(re => (
                    <div key={re} style={{backgroundColor: re, color: 'black'}}>{re}</div>
                ))
            }
            {
                <div key={blue.main} style={{backgroundColor: blue.main, color: 'black'}}>{blue.main}</div>
            }
            {
                blue.dark.map(re => (
                    <div key={re} style={{backgroundColor: re, color: 'white'}}>{re}</div>
                ))
            }
            {
                orange.light.reverse().map(re => (
                    <div key={re} style={{backgroundColor: re, color: 'black'}}>{re}</div>
                ))
            }
            {
                <div key={orange.main} style={{backgroundColor: orange.main, color: 'black'}}>{orange.main}</div>
            }
            {
                orange.dark.map(re => (
                    <div key={re} style={{backgroundColor: re, color: 'white'}}>{re}</div>
                ))
            }
            {
                purple.light.reverse().map(re => (
                    <div key={re} style={{backgroundColor: re, color: 'black'}}>{re}</div>
                ))
            }
            {
                <div key={purple.main} style={{backgroundColor: purple.main, color: 'black'}}>{purple.main}</div>
            }
            {
                purple.dark.map(re => (
                    <div key={re} style={{backgroundColor: re, color: 'white'}}>{re}</div>
                ))
            }
            
        </div>
    )
}

export default App