<script lang="ts">
    import type { TestQuestion, TestState } from '$lib/sociotype_test/main.svelte'
    export let question: TestQuestion;
    export let test_state: TestState;
</script>

<div id={question.id.toString()} class="question" class:active={question.id === test_state.active_id}>
    <p class="question-content">{question.content}</p>
    <input type="range" 
    bind:value={question.value} 
    on:input={() => {
        test_state.active_id = question.id;
    }} 
    on:change={() => {
        if (question.id < test_state.questions.length - 2) {
            test_state.active_id = question.id + 1;
            document.getElementById(`${test_state.active_id}`)?.scrollIntoView({ behavior: "smooth", block: "center" })
            localStorage.setItem('test_state', JSON.stringify(test_state));
        }
    }}>
</div>

{#if false}
    <div class="question active"></div>
{/if}

<style>
    .question {
        margin: 1rem;
        padding: 1rem;
        border: 1px solid var(--text-color);
        border-radius: 5px;
    }

    .question.active {
        background-color: #2c2727;
    }
</style>