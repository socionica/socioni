// @ts-nocheck

export const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

import { question_list } from '$lib/sociotype_test/questions.js'

export const chooseQuestions = (quantity) => {

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

    const selected_questions = [];
    switch (quantity) {
        case 12:
            selected_questions.push(...dichotomies.E.slice(0, 3), ...dichotomies.N.slice(0, 3), ...dichotomies.T.slice(0, 3), ...dichotomies.J.slice(0, 3));
            return iterateQuestions(selected_questions);
        case 24:
            break
        case 36:
            break
        case 45:
            return iterateQuestions(question_list);
        default:
            console.error("Invalid quantity of requested questions");
            break;
    }

    function iterateQuestions(questions) {
        shuffle(questions);
        for (let i = 0; i < quantity; i++) {
            questions[i].id = i;
        }
        return questions;
    }
}
