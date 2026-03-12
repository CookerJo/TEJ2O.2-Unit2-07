
/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Josiah
 * Created on: March 2026
 * This program will do cookie clicker
*/

// variable
let cookies: number = 0

// start
basic.clearScreen()
basic.showIcon(IconNames.Happy)
input.onButtonPressed(Button.A, function () {

    cookies = cookies + 1 //  add cookies +1 when A is pressed  
    basic.showNumber(cookies) 
}) 


// rest cookies to 0
input.onButtonPressed(Button.B, function () { 
    cookies = 0 
    basic.showNumber(cookies)
})
