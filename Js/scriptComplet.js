// const storyTextElement = document.getElementById('story-text');
// const choicesElement = document.getElementById('choices');

// //Maj histoire
// function updateStory(text, imageUrl, choices) {
//     storyTextElement.innerHTML = `
//         <img src="${imageUrl}" class="story-image" alt="Story Image">
//         <p>${text}</p>
//     `;
//     choicesElement.innerHTML = '';

//     choices.forEach(choice => {
//         const button = document.createElement('button');
//         button.innerText = choice.text;
//         button.addEventListener('click', choice.action);
//         choicesElement.appendChild(button);
//     });
// }

// function startGame() {
//     const introduction = `
//         <img src="../Projet_L/img/timer.gif" alt="Introduction" style="width: 100%;">
//     `;
//     storyTextElement.innerHTML = introduction;

//     setTimeout(() => {
//         updateStory(
//             "Vous vous réveillez en sursaut par des bruits étranges provenant de l'extérieur. En regardant par la fenêtre, vous voyez l'impensable : des zombies envahissent votre quartier. Vous devez agir vite pour protéger votre maison et survivre à cette apocalypse.",
//             '../Projet_L/img/Assaut_Quartier.gif',
//             [
//                 { text: "Barricader la porte d'entrée avec les meubles disponibles.", action: barricadeDoor },
//                 { text: "Courir vers la cuisine pour chercher des armes tranchantes.", action: searchWeapons }
//             ]
//         );
//     }, 4000);
// }
// function barricadeDoor() {
//     updateStory(
//         "Vous avez barricadé la porte d'entrée avec les meubles disponibles. Cela vous donne un moment de répit, mais les zombies tentent maintenant de pénétrer par les fenêtres.",
//         '../Projet_L/img/Porte_baricade.jpg',
//         [
//             { text: "Barricader les fenêtres avec des planches et des clous.", action: barricadeWindows },
//             { text: "Chercher plus des objets pour vous défendre.", action: searchBluntObjects }
//         ]
//     );
// }

// function searchWeapons() {
//     updateStory(
//         "Vous avez couru vers la cuisine à la recherche d'armes tranchantes. Vous trouvez un couteau de cuisine et une hache. Cela vous donne un avantage contre les zombies, mais vous devez rester sur vos gardes.",
//         '../Projet_L/img/Couteau_Hache_Cuisine.jpg',
//         [
//             { text: "Retourner dans le salon pour barricader la porte d'entrée.", action: barricadeDoor },
//         ]
//     );
// }

// function barricadeWindows() {
//     updateStory(
//         "Vous avez barricadé les fenêtres avec des planches et des clous. La maison est maintenant sécurisée, mais vous entendez des bruits provenant de l'étage. Votre partenaire est peut être en danger.",
//         '../Projet_L/img/Fnetre_baricade.jpg',
//         [
//             { text: "Rester en bas pour défendre la maison et votre famille .", action: defendHouse },
//             { text: "Monter à l'étage pour voir ce qui se passe.", action: savePartner }
//         ]
//     );
// }

// function searchBluntObjects() {
//     updateStory(
//         "Vous avez cherché des objets pour vous défendre. Malheureusement les zombies entrent par la fenêtre et vous mangent le taku.",
//         '../Projet_L/img/Zombies_fenetre.gif',
//         [
//             { text: "RECOMMENCER.", action: startGame }
//         ]
//     );
// }

// function exploreHouse() {
//     updateStory(
//         "Vous entendez quelqu'un crier a l'exterieur.",
//         '../Projet_L/img/blunt_objects_image.jpg',
//         [
//             { text: "Accepter de lui ouvrir la porte.", action: openDoor },
//             { text: "La laisser tomber.", action: closeDoor }
//         ]
//     );
// }


// function openDoor() {
//     updateStory(
//         "Vous ouvrez et malheureusement c'est un piege les zombies vous mangent le taku.",
//         '../Projet_L/img/blunt_objects_image.jpg',
//         [
//             { text: "RECOMMENCER.", action: startGame }
//         ]
//     );
// }

// function closeDoor() {
//     updateStory(
//         "Vous n'ouvrez pas et heureusement c'etait un piège vous vous sauvez le taku.",
//         '../Projet_L/img/DefendHouse.jpg',
//         [
//             { text: "Continuer à defendre.", action: DefendHOUSE2 }
//         ]
//     );
// }
// function DefendHOUSE2()
// {
//     updateStory(
//     "Vous commencez a avoir drolement faim et vous êtes a court d'aliment.",
//         '../Projet_L/img/affame.jpg!d',
//         [
//             { text: "Sortir chercher a manger", action: Livre2 },
//             { text: "Continuer sans manger", action: Faim }
//         ]
//     );
// }

// function Livre2(){
//     const introductionLivre2 = `
//     <img src="../Projet_L/img/timer.gif" alt="Introduction" style="width: 100%;">
//     `;
//     storyTextElement.innerHTML = introductionLivre2;
    
//     setTimeout(() => {
//     updateStory(
//         "Commencez livre 2?",
//             '../Projet_L/img/timer.gif',
//         { text: "GOOOOOO.", action: startGame }
//     );
//     }, 4000);
    
// }
// function Faim()
// {
//     updateStory(
//     "Vous êtes mort de faim vous et votre famille et vous avez donc echoué votre mission",
//         '../Projet_L/img/desespoir.jpg',
//         [
//             { text: "Recommencer", action: startGame }
//         ]
//     );
// }
// function defendHouse() {
//     updateStory(
//         "C'etait juste une raignée.Vous réussissez à repousser les zombies pour l'instant, mais la situation devient de plus en plus désespérée. Vous devez prendre une décision.",
//         '../Projet_L/img/DefendHouse.jpg',
//         [
//             { text: "Tenter de fuir par l'arrière de la maison.", action: fleeHouse },
//             { text: "Utiliser le téléphone pour appeler à l'aide.", action: Help }
            
//         ]
//     );
// }

// function savePartner() {
//     updateStory(
//         "Vous montez à l'étage pour tenter de sauver votre partenaire et vous vous rendez compte qu'elle criait a cause d'une araignée. Malheureusement pendant que vous etiez en haut le zombies penetre et vous mordent.",
//         '../Projet_L/img/fleeHouse.jpg',
//         [
//             { text: "RECOMMENCER.", action: startGame }
//         ]
//     );
// }

// function Help() {
//     updateStory(
//         "Vous utilisez le téléphone pour appeler à l'aide, mais il n'y a pas de réponse. La ligne est morte, et vous réalisez que vous êtes seul dans cette lutte contre les zombies. Vous devez trouver un moyen de survivre par vos propres moyens.",
//         '../Projet_L/img/desespoir.jpg',
//         [
//             { text: "Retourner defendre la maison", action: exploreHouse }
//         ]
//     );
// }

// function fleeHouse() {
//     updateStory(
//         "Vous tentez de fuir par l'arrière de la maison mais, malheureusement, les zombies vous attrapent et vous graillent le taku.",
//         '../Projet_L/img/fleeHouse.jpg',
//         [
//             { text: "RECOMMENCER.", action: startGame }
//         ]
//     );
// }

// function Livre2(){
//     const introductionLivre2 = `
//     <img src="../Projet_L/img/timer.gif" alt="Introduction" style="width: 100%;">
//     `;
//     storyTextElement.innerHTML = introductionLivre2;
    
//     setTimeout(() => {
//     updateStory(
//         "Commencez livre 2?",
//             '../Projet_L/img/timer.gif',
//         { text: "GOOOOOO.", action: startGame2 }
//     );
//     }, 4000);
    
// }


// startGame();
