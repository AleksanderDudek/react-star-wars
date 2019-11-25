module.exports = {
    "transform": { 
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.js$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx|tsx)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "setupFiles": [
        "<rootDir>/__tests__/jest.setup.ts"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__tests__/fileMock.ts",
        "\\.(css|pcss)$": "<rootDir>/__tests__/styleMock.ts"
    },
    "globals": {
        "ts-jest": {
            "diagnostics": {
            "warnOnly": true
            }
        }
    }
    
}