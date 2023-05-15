// @ts-nocheck

/* class Question {
    constructor(content, theme, value = 0, id = null) {
        this.content = content; // String
        this.theme = theme; // [Number(Dichotomy), Boolean]
        this.value = value; // Number
        this.id = id; // Number
    }
} */

class Question {
    constructor(content, theme) {
        this.content = content;
        this.theme = this.#getTheme(theme);
        this.value = 50;
        this.id = null;
    }

    #getTheme(str) {
        switch (str) {
            case "E":
                return [0, true];
            case "N":
                return [1, true];
            case "T":
                return [2, true];
            case "J":
                return [3, true];
            case "EN":
                return [4, true];
            case "ET":
                return [5, true];
            case "EJ":
                return [6, true];
            case "NT":
                return [7, true];
            case "NJ":
                return [8, true];
            case "TJ":
                return [9, true];
            case "ENT":
                return [10, true];
            case "ENJ":
                return [11, true];
            case "ETJ":
                return [12, true];
            case "NTJ":
                return [13, true];
            case "ENTJ":
                return [14, true];
            case "I":
                return [0, false];
            case "S":
                return [1, false];
            case "F":
                return [2, false];
            case "P":
                return [3, false];
            case "IS":
                return [4, false];
            case "IF":
                return [5, false];
            case "IP":
                return [6, false];
            case "SF":
                return [7, false];
            case "SP":
                return [8, false];
            case "FP":
                return [9, false];
            case "ISF":
                return [10, false];
            case "ISP":
                return [11, false];
            case "IFP":
                return [12, false];
            case "SFP":
                return [13, false];
            case "ISFP":
                return [14, false];
            default:
                console.error("Questão com tema inválido.");
        }
    }
}

export const question_list = [
    // E 0
    new Question(
        "E1",
        "E"
    ),
    new Question(
        "E2",
        "E"
    ),
    new Question(
        "E3",
        "E"
    ),
    // N 1
    new Question(
        "N1",
        "N"
    ),
    new Question(
        "N2",
        "N"
    ),
    new Question(
        "N3",
        "N"
    ),
    // T 2
    new Question(
        "T1",
        "T"
    ),
    new Question(
        "T2",
        "T"
    ),
    new Question(
        "T3",
        "T"
    ),
    // J 3
    new Question(
        "J1",
        "J"
    ),
    new Question(
        "J2",
        "J"
    ),
    new Question(
        "J3",
        "J"
    ),
    // EN 4
    new Question(
        "EN1",
        "EN"
    ),
    new Question(
        "EN2",
        "EN"
    ),
    new Question(
        "EN3",
        "EN"
    ),
    // ET 5
    new Question(
        "ET1",
        "ET"
    ),
    new Question(
        "ET2",
        "ET"
    ),
    new Question(
        "ET3",
        "ET"
    ),
    // EJ 6
    new Question(
        "EJ1",
        "EJ"
    ),
    new Question(
        "EJ2",
        "EJ"
    ),
    new Question(
        "EJ3",
        "EJ"
    ),
    // NT 7
    new Question(
        "NT1",
        "NT"
    ),
    new Question(
        "NT2",
        "NT"
    ),
    new Question(
        "NT3",
        "NT"
    ),
    // NJ 8
    new Question(
        "NJ1",
        "NJ"
    ),
    new Question(
        "NJ2",
        "NJ"
    ),
    new Question(
        "NJ3",
        "NJ"
    ),
    // TJ 9
    new Question(
        "TJ1",
        "TJ"
    ),
    new Question(
        "TJ2",
        "TJ"
    ),
    new Question(
        "TJ3",
        "TJ"
    ),
    // ENT 10
    new Question(
        "ENT1",
        "ENT"
    ),
    new Question(
        "ENT2",
        "ENT"
    ),
    new Question(
        "ENT3",
        "ENT"
    ),
    // ENJ 11
    new Question(
        "ENJ1",
        "ENJ"
    ),
    new Question(
        "ENJ2",
        "ENJ"
    ),
    new Question(
        "ENJ3",
        "ENJ"
    ),
    // ETJ 12
    new Question(
        "ETJ1",
        "ETJ"
    ),
    new Question(
        "ETJ2",
        "ETJ"
    ),
    new Question(
        "ETJ3",
        "ETJ"
    ),
    // NTJ 13
    new Question(
        "NTJ1",
        "NTJ"
    ),
    new Question(
        "NTJ2",
        "NTJ"
    ),
    new Question(
        "NTJ3",
        "NTJ"
    ),
    // ENTJ 14
    new Question(
        "ENTJ1",
        "ENTJ"
    ),
    new Question(
        "ENTJ2",
        "ENTJ"
    ),
    new Question(
        "ENTJ3",
        "ENTJ"
    ),
];