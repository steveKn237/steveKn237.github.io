export function updateStory(text, imageUrl, choices) {
    const storyTextElement = document.getElementById('story-text');
    const choicesElement = document.getElementById('choices');

    storyTextElement.innerHTML = `
        <img src="${imageUrl}" class="story-image" alt="Story Image">
        <p>${text}</p>
    `;
    choicesElement.innerHTML = '';

    choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.addEventListener('click', choice.action);
        choicesElement.appendChild(button);
    });
}
