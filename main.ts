makerbit.onIrButton(IrButton.Any, IrButtonAction.Released, function () {
    LiftedBUTTON = makerbit.irButton()
    LAST = -1
    ReadCOMMAND = -2
})
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    ReadCOMMAND = makerbit.irButton()
})
function doSetParameters () {
    BTN_LIFTED = -1
    LiftedBUTTON = -1
    LIGHT = false
    FWD = true
    MOMENTUM = -4
    MySPEED = 100
    FSPEED = 120
    SPDMAX = 250
    TRIM = 20
    TTRIM = 10
    LEFT = FSPEED
    RIGHT = FSPEED
    TSPEED = 100
    LastCOUNT = 0
    LAST = -1
    COMMAND = -2
    TurnCOUNT = 0
}
function Set_Button_Codes_Here () {
    ALL_STOP = 160
    SetLIGHT = 64
    FORWARD = 128
    INC_FWD_SPEED = 48
    POWER_BUTTON = 0
    INC_LEFT_TURN = 32
    INC_RIGHT_TURN = 96
    BACKWARDS = 144
    RESET_SPEED = 88
    INC_SPEED = 48
    REDUCE_SPEED = 112
    ROTATE_LEFT = 16
    ROTATE_RIGHT = 80
    MENU_BUTTON = -1
}
let MENU_BUTTON = 0
let ROTATE_RIGHT = 0
let ROTATE_LEFT = 0
let REDUCE_SPEED = 0
let INC_SPEED = 0
let RESET_SPEED = 0
let BACKWARDS = 0
let INC_RIGHT_TURN = 0
let INC_LEFT_TURN = 0
let POWER_BUTTON = 0
let INC_FWD_SPEED = 0
let FORWARD = 0
let SetLIGHT = 0
let ALL_STOP = 0
let TurnCOUNT = 0
let COMMAND = 0
let LastCOUNT = 0
let TSPEED = 0
let RIGHT = 0
let LEFT = 0
let TTRIM = 0
let TRIM = 0
let SPDMAX = 0
let FSPEED = 0
let MySPEED = 0
let MOMENTUM = 0
let LIGHT = false
let BTN_LIFTED = 0
let ReadCOMMAND = 0
let LAST = 0
let LiftedBUTTON = 0
let FWD = false
FWD = true
makerbit.connectIrReceiver(DigitalPin.P8, IrProtocol.NEC)
Set_Button_Codes_Here()
doSetParameters()
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()
led.enable(true)
basic.forever(function () {
    BTN_LIFTED = LiftedBUTTON
    LiftedBUTTON = -1
    if (BTN_LIFTED < 0) {
    	
    } else if (BTN_LIFTED == 0) {
        basic.showIcon(IconNames.Tortoise)
        basic.clearScreen()
    } else if (BTN_LIFTED == RESET_SPEED) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
    } else if (BTN_LIFTED == ALL_STOP) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
        basic.showIcon(IconNames.Chessboard)
        music.playTone(131, music.beat(BeatFraction.Half))
        basic.clearScreen()
    } else if (BTN_LIFTED == INC_LEFT_TURN) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    } else if (BTN_LIFTED == INC_RIGHT_TURN) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    } else if (BTN_LIFTED == BACKWARDS) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
    } else if (BTN_LIFTED == FORWARD) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
    } else if (BTN_LIFTED == REDUCE_SPEED) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
    } else if (BTN_LIFTED == INC_SPEED) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
    } else if (BTN_LIFTED == ROTATE_LEFT) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    } else if (BTN_LIFTED == ROTATE_RIGHT) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    } else if (BTN_LIFTED == SetLIGHT) {
    	
    } else {
        basic.showNumber(BTN_LIFTED)
    }
    BTN_LIFTED = -1
    COMMAND = ReadCOMMAND
    if (COMMAND == LAST) {
    	
    } else {
        if (COMMAND < 0) {
        	
        } else if (COMMAND == 0) {
        	
        } else if (COMMAND == RESET_SPEED) {
            doSetParameters()
        } else if (COMMAND == ALL_STOP) {
            mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        } else if (COMMAND == INC_LEFT_TURN) {
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, TSPEED)
        } else if (COMMAND == INC_RIGHT_TURN) {
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, TSPEED)
        } else if (COMMAND == BACKWARDS) {
            if (LIGHT) {
                mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
            } else {
            	
            }
            FWD = false
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, FSPEED)
        } else if (COMMAND == FORWARD) {
            if (LIGHT) {
                mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
            } else {
            	
            }
            FWD = true
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, FSPEED)
        } else if (COMMAND == REDUCE_SPEED) {
            basic.showArrow(ArrowNames.South)
            if (FSPEED > TRIM) {
                FSPEED += 0 - TRIM
            } else {
                FSPEED = 0
            }
            basic.showNumber(FSPEED)
            if (TSPEED > TTRIM) {
                TSPEED += 0 - TTRIM
            } else {
                TSPEED = 20
            }
            basic.clearScreen()
        } else if (COMMAND == INC_SPEED) {
            basic.showArrow(ArrowNames.North)
            if (FSPEED < SPDMAX) {
                FSPEED += TRIM
            } else {
                FSPEED = SPDMAX
            }
            basic.showNumber(FSPEED)
            if (TSPEED < SPDMAX) {
                TSPEED += TTRIM
            } else {
                TSPEED = SPDMAX
            }
            basic.clearScreen()
        } else if (COMMAND == ROTATE_LEFT) {
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, TSPEED)
        } else if (COMMAND == ROTATE_RIGHT) {
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, TSPEED)
        } else if (COMMAND == SetLIGHT) {
            if (LIGHT) {
                mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
                LIGHT = false
            } else {
                mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
                LIGHT = true
            }
        } else {
            basic.showNumber(COMMAND)
            basic.pause(100)
        }
        LAST = COMMAND
    }
})
