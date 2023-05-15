<script context="module" lang="ts">
    export interface TestQuestion {
        content: string,
        theme: [number, boolean]
        value: number;
        id: number;
    }
    export interface TestState {
        questions: TestQuestion[],
        active_id: number,
    }

    export class TestState {
        constructor(questions: TestQuestion[], active_question: number = 0) {
            this.questions = questions;
            this.active_id = active_question;
        }
    }

    export class TestQuestion {
        constructor(content: string, theme: string) {
            this.content = content;
            this.theme = this.#getTheme(theme) as [number, boolean];
            this.value = 50;
            this.id = 0;
        }

        #getTheme(str: string) {
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
                    console.error('Tema inválido de questao');
                    break;
            }
        }
    }

    const question_list = [
        // E 0
        new TestQuestion(
            "E1",
            "E"
        ),
        new TestQuestion(
            "E2",
            "E"
        ),
        new TestQuestion(
            "E3",
            "E"
        ),
        // N 1
        new TestQuestion(
            "N1",
            "N"
        ),
        new TestQuestion(
            "N2",
            "N"
        ),
        new TestQuestion(
            "N3",
            "N"
        ),
        // T 2
        new TestQuestion(
            "T1",
            "T"
        ),
        new TestQuestion(
            "T2",
            "T"
        ),
        new TestQuestion(
            "T3",
            "T"
        ),
        // J 3
        new TestQuestion(
            "J1",
            "J"
        ),
        new TestQuestion(
            "J2",
            "J"
        ),
        new TestQuestion(
            "J3",
            "J"
        ),
        // EN 4
        new TestQuestion(
            "EN1",
            "EN"
        ),
        new TestQuestion(
            "EN2",
            "EN"
        ),
        new TestQuestion(
            "EN3",
            "EN"
        ),
        // ET 5
        new TestQuestion(
            "ET1",
            "ET"
        ),
        new TestQuestion(
            "ET2",
            "ET"
        ),
        new TestQuestion(
            "ET3",
            "ET"
        ),
        // EJ 6
        new TestQuestion(
            "EJ1",
            "EJ"
        ),
        new TestQuestion(
            "EJ2",
            "EJ"
        ),
        new TestQuestion(
            "EJ3",
            "EJ"
        ),
        // NT 7
        new TestQuestion(
            "NT1",
            "NT"
        ),
        new TestQuestion(
            "NT2",
            "NT"
        ),
        new TestQuestion(
            "NT3",
            "NT"
        ),
        // NJ 8
        new TestQuestion(
            "NJ1",
            "NJ"
        ),
        new TestQuestion(
            "NJ2",
            "NJ"
        ),
        new TestQuestion(
            "NJ3",
            "NJ"
        ),
        // TJ 9
        new TestQuestion(
            "TJ1",
            "TJ"
        ),
        new TestQuestion(
            "TJ2",
            "TJ"
        ),
        new TestQuestion(
            "TJ3",
            "TJ"
        ),
        // ENT 10
        new TestQuestion(
            "ENT1",
            "ENT"
        ),
        new TestQuestion(
            "ENT2",
            "ENT"
        ),
        new TestQuestion(
            "ENT3",
            "ENT"
        ),
        // ENJ 11
        new TestQuestion(
            "ENJ1",
            "ENJ"
        ),
        new TestQuestion(
            "ENJ2",
            "ENJ"
        ),
        new TestQuestion(
            "ENJ3",
            "ENJ"
        ),
        // ETJ 12
        new TestQuestion(
            "ETJ1",
            "ETJ"
        ),
        new TestQuestion(
            "ETJ2",
            "ETJ"
        ),
        new TestQuestion(
            "ETJ3",
            "ETJ"
        ),
        // NTJ 13
        new TestQuestion(
            "NTJ1",
            "NTJ"
        ),
        new TestQuestion(
            "NTJ2",
            "NTJ"
        ),
        new TestQuestion(
            "NTJ3",
            "NTJ"
        ),
        // ENTJ 14
        new TestQuestion(
            "ENTJ1",
            "ENTJ"
        ),
        new TestQuestion(
            "ENTJ2",
            "ENTJ"
        ),
        new TestQuestion(
            "ENTJ3",
            "ENTJ"
        ),
    ];

    export const getQuestions = (quantity: number) => {
        const dichotomies = {
            E: question_list.filter(q => q.theme[0] == 0),
            N: question_list.filter(q => q.theme[0] == 1),
            T: question_list.filter(q => q.theme[0] == 2),
            J: question_list.filter(q => q.theme[0] == 3),
            EN: question_list.filter(q => q.theme[0] == 4),
            ET: question_list.filter(q => q.theme[0] == 5),
            EJ: question_list.filter(q => q.theme[0] == 6),
            NT: question_list.filter(q => q.theme[0] == 7),
            NJ: question_list.filter(q => q.theme[0] == 8),
            TJ: question_list.filter(q => q.theme[0] == 9),
            ENT: question_list.filter(q => q.theme[0] == 10),
            ENJ: question_list.filter(q => q.theme[0] == 11),
            ETJ: question_list.filter(q => q.theme[0] == 12),
            NTJ: question_list.filter(q => q.theme[0] == 13),
            ENTJ: question_list.filter(q => q.theme[0] == 14),
        }

        const selected_questions: TestQuestion[] = [];

        switch (quantity) {
            case 12:
                selected_questions.push(...dichotomies.E.slice(0, 3), ...dichotomies.N.slice(0, 3), ...dichotomies.T.slice(0, 3), ...dichotomies.J.slice(0, 3));
                return iterateQuestions(selected_questions);
            case 24:
                break;
            case 36:
                break;
            case 45:
                return iterateQuestions(question_list);
            default: 
                console.error('Número inválido de questões');
                return iterateQuestions(question_list);
        }

        function iterateQuestions(questions: TestQuestion[]) {
            shuffle(questions);
            for (let i = 0; i < quantity; i++) {
                questions[i].id = i;
            }
            return questions;
        }
    }

    function shuffle<T>(arr: T[]): T[] {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
</script>