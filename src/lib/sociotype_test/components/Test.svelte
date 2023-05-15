<script lang="ts">
    import { onMount, tick } from 'svelte';
    import { getQuestions } from '$lib/sociotype_test/main.svelte';
    import { TestState, type TestQuestion } from '$lib/sociotype_test/main.svelte'

    let test_state: TestState;

    onMount(async () => {
        if (localStorage.getItem('test_state')) {
            test_state = JSON.parse(localStorage.getItem('test_state')!);
        }

        await tick();
        document.getElementById(test_state.active_id.toString())?.scrollIntoView({ behavior: "smooth", block: "center" })
    });

    let options = {
        slide_on_change: false,
    }

    const generateState = (quantity: number) => {
        const questions = getQuestions(quantity)!;
        test_state = new TestState(questions); 
        localStorage.setItem('test_state', JSON.stringify(test_state));
    };
</script>

<div class="sociotype-test">
    {#if test_state}
        {#each test_state.questions as question}
            <div id={question.id.toString()} class="question" class:active={question.id === test_state.active_id}>
                <p class="question-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, inventore eum at autem ad eligendi velit.</p>
                <input class="question-slider" type="range" 
                bind:value={question.value} 
                on:input={() => {
                    test_state.active_id = question.id;
                }} 
                on:change={() => {
                    if (options.slide_on_change) {
                        if (question.id < test_state.questions.length - 2) {
                            test_state.active_id = question.id + 1;
                            document.getElementById(`${test_state.active_id}`)?.scrollIntoView({ behavior: "smooth", block: "center" })
                        }
                    }
                    localStorage.setItem('test_state', JSON.stringify(test_state));
                }}>
                <div class="question-nav">
                    <div class="previous-container">
                        <button class="previous previous-all" 
                        class:active={test_state.active_id == question.id && question.id > 1}
                        on:click={() => {
                            test_state.active_id = 0;
                            document.getElementById(`${test_state.active_id}`)?.scrollIntoView({ behavior: "smooth", block: "center" })
                        }}>«</button>
                        <button class="previous previous-one" 
                        class:active={test_state.active_id == question.id && question.id > 0}
                        on:click={() => {
                            if (question.id > 0) {
                                test_state.active_id = question.id - 1;
                                document.getElementById(`${test_state.active_id}`)?.scrollIntoView({ behavior: "smooth", block: "center" })
                            }
                        }}>‹</button>
                    </div>
                    <button class="next" 
                    class:active={test_state.active_id != question.id || question.value != 50}
                    on:click={() => {
                        if (question.id < test_state.questions.length - 1) {
                            test_state.active_id = question.id + 1;
                            document.getElementById(`${test_state.active_id}`)?.scrollIntoView({ behavior: "smooth", block: "center" })
                        }
                    }}>Próxima</button>
                </div>
            </div>
        {/each}
    {:else}
        <h2>Escolha um módulo:</h2>
        <button on:click={() => generateState(12)}>12 questões</button>
        <button on:click={() => generateState(24)}>24 questões</button>
        <button on:click={() => generateState(45)}>45 questões</button>
    {/if}
</div>

<style>
    .question {
        background: var(--background-sec);
        border-radius: 5px;
        margin: 1rem;
        padding: 1rem;
        opacity: .5;

        text-align: center;
    }

    .question.active {
        opacity: 1;
        transform: scale(102%);
        transition: opacity, transform 0.2s ease-out;
    }

    .question-content {
        font-size: 1.25rem;    
    }

    .question-slider {
        -webkit-appearance: none;
        appearance: none;
        background: var(--background-ter);
        border-radius: 16px;
        margin: 1rem 0.5rem;

        height: 16px;
        width: calc(100% - 1rem);
    }

    .question-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 24px;
        border-radius: 4px;
        background: var(--svg-color);
        cursor: pointer;
    }

    .question-slider::-moz-range-thumb {
        width: 16px;
        height: 24px;
        border-radius: 4px;
        background: var(--svg-color);
        cursor: pointer;
    }

    .question-nav {
        display: flex;
        place-content: space-between;
    }

/*     .next {
        color: var(--text-color);
        background-color: var(--background-ter);

        border: none;
        border-radius: 3px;
        padding: .5rem;
        height: 2rem;

        opacity: .5;
        transition: opacity, background-color 0.2s ease-in;
    } */

    button {
        color: var(--text-color);
        background-color: var(--background-ter);

        border: none;
        border-radius: 3px;
        padding: .5rem;
        height: 2rem;
        min-width: 2rem;

        opacity: .5;
        transition: opacity 0.2s ease-out;
    }

    button.active {
        opacity: 1;
        background-color: var(--background-qua);
    }
    </style>