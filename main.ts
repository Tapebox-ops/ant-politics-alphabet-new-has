namespace SpriteKind {
    export const TextElement = SpriteKind.create()
    export const Scenery = SpriteKind.create()
}
// Alright this is a better function for writing text. # is escape character and #n creates new line. #x tries to make a sprite with image at location x in "specCarList"
function WriteTextChaosScript (DisplayText: string, LocaX: number, LocaY: number, Color: number) {
    CurrentLetterX = 0
    TextRow = 0
    for (let index = 0; index <= DisplayText.length - 1; index++) {
        if (DisplayText.charAt(index) == "#") {
            EscapeCharUsed = true
        } else if (EscapeCharUsed) {
            if (!(DisplayText.charAt(index) == "n")) {
                if (DisplayText.charAt(index) == "_") {
                    CurrentLetterX += 22
                } else {
                    Letter = sprites.create(SpecCharList[parseFloat(DisplayText.charAt(index))], SpriteKind.TextElement)
                    CurrentLetterX += Letter.width + 5
                    Letter.image.replace(1, 0)
                    Letter.image.replace(14, Color)
                }
            } else {
                CurrentLetterX = 0
                TextRow += 1
            }
            EscapeCharUsed = false
        } else {
            ActiveLetter = DisplayText.charAt(index)
            SpaceWasntUsed = true
            if (ActiveLetter == "E") {
                Letter = sprites.create(assets.image`LetterE`, SpriteKind.TextElement)
            } else if (ActiveLetter == "T") {
                Letter = sprites.create(assets.image`LetterT`, SpriteKind.TextElement)
            } else if (ActiveLetter == "A") {
                Letter = sprites.create(assets.image`LetterAy`, SpriteKind.TextElement)
            } else if (ActiveLetter == "O") {
                Letter = sprites.create(assets.image`LetterO`, SpriteKind.TextElement)
            } else if (ActiveLetter == "I") {
                Letter = sprites.create(assets.image`LetterI`, SpriteKind.TextElement)
            } else if (ActiveLetter == "N") {
                Letter = sprites.create(assets.image`LetterN`, SpriteKind.TextElement)
            } else if (ActiveLetter == "S") {
                Letter = sprites.create(assets.image`LetterS`, SpriteKind.TextElement)
            } else if (ActiveLetter == "R") {
                Letter = sprites.create(assets.image`LetterR`, SpriteKind.TextElement)
            } else if (ActiveLetter == "H") {
                Letter = sprites.create(assets.image`LetterH`, SpriteKind.TextElement)
            } else if (ActiveLetter == "D") {
                Letter = sprites.create(assets.image`LetterD`, SpriteKind.TextElement)
            } else if (ActiveLetter == "L") {
                Letter = sprites.create(assets.image`LetterL`, SpriteKind.TextElement)
            } else if (ActiveLetter == "U") {
                Letter = sprites.create(assets.image`LetterU`, SpriteKind.TextElement)
            } else if (ActiveLetter == "C") {
                Letter = sprites.create(assets.image`LetterC`, SpriteKind.TextElement)
            } else if (ActiveLetter == "M") {
                Letter = sprites.create(assets.image`LetterM`, SpriteKind.TextElement)
            } else if (ActiveLetter == "F") {
                Letter = sprites.create(assets.image`LetterF`, SpriteKind.TextElement)
            } else if (ActiveLetter == "Y") {
                Letter = sprites.create(assets.image`LetterY`, SpriteKind.TextElement)
            } else if (ActiveLetter == "W") {
                Letter = sprites.create(assets.image`LetterW`, SpriteKind.TextElement)
            } else if (ActiveLetter == "G") {
                Letter = sprites.create(assets.image`LetterG`, SpriteKind.TextElement)
            } else if (ActiveLetter == " ") {
                CurrentLetterX += 18
                SpaceWasntUsed = false
            } else if (ActiveLetter == "P") {
                Letter = sprites.create(assets.image`LetterP`, SpriteKind.TextElement)
            } else if (ActiveLetter == "B") {
                Letter = sprites.create(assets.image`LetterBy`, SpriteKind.TextElement)
            } else if (ActiveLetter == "V") {
                Letter = sprites.create(assets.image`LetterV`, SpriteKind.TextElement)
            } else if (ActiveLetter == "K") {
                Letter = sprites.create(assets.image`LetterK`, SpriteKind.TextElement)
            } else if (ActiveLetter == "X") {
                Letter = sprites.create(assets.image`LetterX`, SpriteKind.TextElement)
            } else if (ActiveLetter == "Q") {
                Letter = sprites.create(assets.image`LetterQ`, SpriteKind.TextElement)
            } else if (ActiveLetter == "J") {
                Letter = sprites.create(assets.image`LetterJ`, SpriteKind.TextElement)
            } else if (ActiveLetter == "Z") {
                Letter = sprites.create(assets.image`LetterZ`, SpriteKind.TextElement)
            }
            if (SpaceWasntUsed && !(ActiveLetter == " ")) {
                Letter.setPosition(LocaX + CurrentLetterX, LocaY + 22 * TextRow)
                Letter.image.replace(1, 0)
                Letter.image.replace(15, Color)
                CurrentLetterX += Letter.width + 0
            }
        }
    }
}
// For dialogue text specifically if the first digits are *xx, then it sets the color to color_XX. The Dialogue text color scheme will likely have 8 colors greyscale for sprites and then an additional 7 for interesting dialogue colors.
// 
// Also, the way you end a series of dialogue is set the last value in the array to END
function DialogueTextReal (DisplayTextSeries: string[], Speaker: Sprite, SpeakerX: number, SpeakerY: number) {
    sprites.destroyAllSpritesOfKind(SpriteKind.TextElement)
    if (!(DialogueOver)) {
        scene.setBackgroundColor(1)
        scene.setBackgroundImage(assets.image`Background`)
        EvilGreyScaleColorScheme2()
        mySprite = sprites.create(NewDilogBacker, SpriteKind.TextElement)
        mySprite.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y) + 135)
        if (DisplayTextSeries[CurrentDialogueOp].charAt(0) == "*") {
            DialgueColorTag = parseFloat("" + DisplayTextSeries[CurrentDialogueOp].charAt(1) + DisplayTextSeries[CurrentDialogueOp].charAt(2))
            WriteTextNormScript(DisplayTextSeries[CurrentDialogueOp].substr(3, DisplayTextSeries[CurrentDialogueOp].length - 3), mySprite.x - 290, mySprite.y - 75, "FFFFFF")
        } else if (DisplayTextSeries[CurrentDialogueOp] == "END") {
            DialogueOver = true
            sprites.destroyAllSpritesOfKind(SpriteKind.TextElement)
        } else if (DisplayTextSeries[CurrentDialogueOp].charAt(0) == "#") {
            DialogueHexa = DisplayTextSeries[CurrentDialogueOp].substr(1, 6)
            WriteTextNormScript(DisplayTextSeries[CurrentDialogueOp].substr(3, DisplayTextSeries[CurrentDialogueOp].length - 3), mySprite.x - 290, mySprite.y - 75, DialogueHexa)
        } else {
            WriteTextChaosScript(DisplayTextSeries[CurrentDialogueOp], mySprite.x - 290, mySprite.y - 75, 8)
        }
    }
}
function Idontthinweusethisanymore (ActiveLetter: string) {
    if (ActiveLetter == "E") {
        Letter = sprites.create(assets.image`LetterE`, SpriteKind.TextElement)
    } else if (ActiveLetter == "T") {
        Letter = sprites.create(assets.image`LetterT`, SpriteKind.TextElement)
    } else if (ActiveLetter == "A") {
        Letter = sprites.create(assets.image`LetterAy`, SpriteKind.TextElement)
    } else if (ActiveLetter == "O") {
        Letter = sprites.create(assets.image`LetterO`, SpriteKind.TextElement)
    } else if (ActiveLetter == "I") {
        Letter = sprites.create(assets.image`LetterI`, SpriteKind.TextElement)
    } else if (ActiveLetter == "N") {
        Letter = sprites.create(assets.image`LetterN`, SpriteKind.TextElement)
    } else if (ActiveLetter == "S") {
        Letter = sprites.create(assets.image`LetterS`, SpriteKind.TextElement)
    } else if (ActiveLetter == "R") {
        Letter = sprites.create(assets.image`LetterR`, SpriteKind.TextElement)
    } else if (ActiveLetter == "H") {
        Letter = sprites.create(assets.image`LetterH`, SpriteKind.TextElement)
    } else if (ActiveLetter == "D") {
        Letter = sprites.create(assets.image`LetterD`, SpriteKind.TextElement)
    } else if (ActiveLetter == "L") {
        Letter = sprites.create(assets.image`LetterL`, SpriteKind.TextElement)
    } else if (ActiveLetter == "U") {
        Letter = sprites.create(assets.image`LetterU`, SpriteKind.TextElement)
    } else if (ActiveLetter == "C") {
        Letter = sprites.create(assets.image`LetterC`, SpriteKind.TextElement)
    } else if (ActiveLetter == "M") {
        Letter = sprites.create(assets.image`LetterM`, SpriteKind.TextElement)
    } else if (ActiveLetter == "F") {
        Letter = sprites.create(assets.image`LetterF`, SpriteKind.TextElement)
    } else if (ActiveLetter == "Y") {
        Letter = sprites.create(assets.image`LetterY`, SpriteKind.TextElement)
    } else if (ActiveLetter == "W") {
        Letter = sprites.create(assets.image`LetterW`, SpriteKind.TextElement)
    } else if (ActiveLetter == "G") {
        Letter = sprites.create(assets.image`LetterG`, SpriteKind.TextElement)
    } else if (ActiveLetter == "Poop") {
        Letter = sprites.create(assets.image`LetterI`, SpriteKind.TextElement)
    } else if (ActiveLetter == "P") {
        Letter = sprites.create(assets.image`LetterP`, SpriteKind.TextElement)
    } else if (ActiveLetter == "B") {
        Letter = sprites.create(assets.image`LetterBy`, SpriteKind.TextElement)
    } else if (ActiveLetter == "V") {
        Letter = sprites.create(assets.image`LetterV`, SpriteKind.TextElement)
    } else if (ActiveLetter == "K") {
        Letter = sprites.create(assets.image`LetterK`, SpriteKind.TextElement)
    } else if (ActiveLetter == "X") {
        Letter = sprites.create(assets.image`LetterX`, SpriteKind.TextElement)
    } else if (ActiveLetter == "Q") {
        Letter = sprites.create(assets.image`LetterQ`, SpriteKind.TextElement)
    } else if (ActiveLetter == "J") {
        Letter = sprites.create(assets.image`LetterJ`, SpriteKind.TextElement)
    } else if (ActiveLetter == "Z") {
        Letter = sprites.create(assets.image`LetterZ`, SpriteKind.TextElement)
    }
}
browserEvents.W.onEvent(browserEvents.KeyEvent.Released, function () {
    if (DialogueOver) {
        InputControlOverride = false
    } else if (InputControlOverride) {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.TextElement)
        DialogueTextReal(UniversalDialogeArray, mySprite, 1, 1)
        CurrentDialogueOp += 1
    } else {
    	
    }
})
// For Text:
// \n creates a new line directly below the last
// \x finds special character at location x in the special character sprite array. All letters you write must be uppercase
function WriteTextButItDoesntWork (Text: string, LocX: number, LocY: number, Color: number, Font: number, SpecialCharacters: Image[]) {
    for (let index2 = 0; index2 <= Text.length; index2++) {
        if (Text.charAt(index2) == "\\") {
            isUsingBackslash = true
        } else if (isUsingBackslash) {
            if (Text.charAt(index2) == "n") {
                TextLineCounter += 1
            } else {
                mySprite2 = sprites.create(SpecialCharacters[parseFloat(Text.charAt(index2))], SpriteKind.TextElement)
            }
            isUsingBackslash = false
        } else {
            Idontthinweusethisanymore(Text.charAt(index2))
        }
        Letter.setPosition(CurrentLetterX, LocY + 32 * TextLineCounter)
    }
}
// Alright this is a better function for writing text. # is escape character and #n creates new line. #x tries to make a sprite with image at location x in "specCarList"
function WriteTextNormScript (DisplayText: string, LocaX: number, LocaY: number, Color_Hexadecimal: string) {
    CurrentLetterX = 0
    TextRow = 0
    for (let index3 = 0; index3 <= DisplayText.length - 1; index3++) {
        if (DisplayText.charAt(index3) == "#") {
            EscapeCharUsed = true
        } else if (EscapeCharUsed) {
            if (DisplayText.charCodeAt(index3) >= 48 && DisplayText.charCodeAt(index3) <= 57) {
                Letter.image.replace(1, 0)
                color.setColor(2, parseFloat(DisplayText.substr(index3, 6)))
                Letter.image.replace(15, 2)
                index3 += 6
            } else if (DisplayText.charAt(index3) == "n") {
                CurrentLetterX = 0
                TextRow += 1
            } else {
                Letter = sprites.create(SpecCharList[parseFloat(DisplayText.charAt(index3))], SpriteKind.TextElement)
                CurrentLetterX += Letter.width + 5
            }
            EscapeCharUsed = false
        } else {
            ActiveLetter = DisplayText.charAt(index3)
            SpaceWasntUsed = true
            if (ActiveLetter == "E") {
                Letter = sprites.create(assets.image`CharE`, SpriteKind.TextElement)
            } else if (ActiveLetter == "T") {
                Letter = sprites.create(assets.image`CharT`, SpriteKind.TextElement)
            } else if (ActiveLetter == "A") {
                Letter = sprites.create(assets.image`CharA`, SpriteKind.TextElement)
            } else if (ActiveLetter == "O") {
                Letter = sprites.create(assets.image`CharO`, SpriteKind.TextElement)
            } else if (ActiveLetter == "I") {
                Letter = sprites.create(assets.image`CharI`, SpriteKind.TextElement)
            } else if (ActiveLetter == "N") {
                Letter = sprites.create(assets.image`CharN`, SpriteKind.TextElement)
            } else if (ActiveLetter == "S") {
                Letter = sprites.create(assets.image`CharS`, SpriteKind.TextElement)
            } else if (ActiveLetter == "R") {
                Letter = sprites.create(assets.image`CharR`, SpriteKind.TextElement)
            } else if (ActiveLetter == "H") {
                Letter = sprites.create(assets.image`CharH`, SpriteKind.TextElement)
            } else if (ActiveLetter == "D") {
                Letter = sprites.create(assets.image`CharD`, SpriteKind.TextElement)
            } else if (ActiveLetter == "L") {
                Letter = sprites.create(assets.image`CharL`, SpriteKind.TextElement)
            } else if (ActiveLetter == "U") {
                Letter = sprites.create(assets.image`CharU`, SpriteKind.TextElement)
            } else if (ActiveLetter == "C") {
                Letter = sprites.create(assets.image`CharC`, SpriteKind.TextElement)
            } else if (ActiveLetter == "M") {
                Letter = sprites.create(assets.image`CharM`, SpriteKind.TextElement)
            } else if (ActiveLetter == "F") {
                Letter = sprites.create(assets.image`CharF`, SpriteKind.TextElement)
            } else if (ActiveLetter == "Y") {
                Letter = sprites.create(assets.image`CharY`, SpriteKind.TextElement)
            } else if (ActiveLetter == "W") {
                Letter = sprites.create(assets.image`CharW`, SpriteKind.TextElement)
            } else if (ActiveLetter == "G") {
                Letter = sprites.create(assets.image`CharG`, SpriteKind.TextElement)
            } else if (ActiveLetter == " ") {
                CurrentLetterX += 16
                SpaceWasntUsed = false
            } else if (ActiveLetter == "P") {
                Letter = sprites.create(assets.image`CharP`, SpriteKind.TextElement)
            } else if (ActiveLetter == "B") {
                Letter = sprites.create(assets.image`CharB`, SpriteKind.TextElement)
            } else if (ActiveLetter == "V") {
                Letter = sprites.create(assets.image`CharV`, SpriteKind.TextElement)
            } else if (ActiveLetter == "K") {
                Letter = sprites.create(assets.image`CharK`, SpriteKind.TextElement)
            } else if (ActiveLetter == "X") {
                Letter = sprites.create(assets.image`CharX`, SpriteKind.TextElement)
            } else if (ActiveLetter == "Q") {
                Letter = sprites.create(assets.image`CharQ`, SpriteKind.TextElement)
            } else if (ActiveLetter == "J") {
                Letter = sprites.create(assets.image`CharJ`, SpriteKind.TextElement)
            } else if (ActiveLetter == "Z") {
                Letter = sprites.create(assets.image`CharZ`, SpriteKind.TextElement)
            }
            if (SpaceWasntUsed) {
                Letter.setPosition(LocaX + CurrentLetterX, LocaY + 30 * TextRow)
                Letter.image.replace(1, 0)
                color.setColor(2, color.parseColorString(Color_Hexadecimal))
                Letter.image.replace(15, 2)
                CurrentLetterX += Letter.width
            }
        }
    }
}
function Whatdoesthisdo (Color116: number, SpriteImage: Image) {
    SpriteImage.replace(TextColorResidue, Color116)
    if (Color116 == 1) {
        TextColorResidue = 1
    }
}
function DialogueTextInit (DisplayTextSeries: string[]) {
    InputControlOverride = true
    CurrentDialogueOp = 0
    UniversalDialogeArray = DisplayTextSeries
    DialogueOver = false
}
function EvilGreyScaleColorScheme2 () {
    for (let index222 = 0; index222 <= 12; index222++) {
        TemporaryNumHolder = index222 * 16
        color.setColor(index222 + 1, color.rgb(TemporaryNumHolder, TemporaryNumHolder, TemporaryNumHolder))
    }
    color.setColor(14, color.rgb(224, 224, 224))
    color.setColor(14, color.rgb(250, 250, 250))
}
let TemporaryNumHolder = 0
let TextColorResidue = 0
let mySprite2: Sprite = null
let TextLineCounter = 0
let isUsingBackslash = false
let InputControlOverride = false
let DialogueHexa = ""
let DialgueColorTag = 0
let CurrentDialogueOp = 0
let mySprite: Sprite = null
let DialogueOver = false
let SpaceWasntUsed = false
let ActiveLetter = ""
let Letter: Sprite = null
let EscapeCharUsed = false
let TextRow = 0
let SpecCharList: Image[] = []
let Devmode = 0
let NewDilogBacker: Image = null
let CurrentLetterX = 0
let UniversalDialogeArray: string[] = []
let song2 = null
let NewImage = assets.image`The REALalphabet`
UniversalDialogeArray = ["DIALOGUE ARRAY NOT ASSIGNED", "REMINDER #FF00000 OR *15 FOR TEXT COLOR AT THE BEGINNING OF DIALOGUE", "END"]
CurrentLetterX = 0
let TextRoot2 = assets.image`AlphabetOrigin`
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 640
    export const ARCADE_SCREEN_HEIGHT = 480
}
EvilGreyScaleColorScheme2()
let TitleCard = assets.image`TitleCardImage`
scene.setBackgroundImage(TitleCard)
let constSCREEN_WIDTH = 640
let constSCREENHEIGHT = 480
NewDilogBacker = assets.image`TextBorder2`
if (Devmode == 1) {
	
}
SpecCharList = [assets.image`CharacterExclamation`]
let MyList = 0
DialogueTextInit([
"EEE",
"#000000KRISIMGREEN #nNOW",
"*01WHAT I WISHED FOR #nIT JUST ISNT HOW I INVISIONED IT",
"#000000ABCDEFGHIJKLMNOPQRSTUV#nWXYZ",
"END"
])
