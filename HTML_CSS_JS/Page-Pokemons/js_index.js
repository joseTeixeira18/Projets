let pokemons = ['bellossom', 'bulbasaur', 'butterfree','calyrex', 'charizad', 'glastrier', 'mareep', 'marill', 'regidrago', 'regieleki','squirtle', 'sudowoodo', 'xatu','zarude'];
let stories = ['You ran into this weird little creature ... it\'s intrigued by you, maybe she likes you, Oh wait she is about to bite you !!!!! Ruuuuun ... oh No you died :)','Once upon a time, an adventurer was on his way to a long lost village, but in their way they stumbled upon what will be one of their best friends, and adorable lowkey creepy creature.'];

let usernameChoice = window.prompt("Choose your Username : ","Username")
let username = document.getElementsByClassName("username");

for(let i=0; i<username.length;i++){
    username[i].innerHTML = usernameChoice;
}

function randomNumber(a){
    return Math.floor(Math.random()*a);
}

let randomPokemon = randomNumber(pokemons.length);
let randomStory = randomNumber(stories.length);

let pokemon = pokemons[randomPokemon];
let story = stories[randomStory];

console.log(pokemon);
console.log(story);

let imagePokemon = document.getElementById("image-spot");
let storyPokemon = document.getElementById("story");

imagePokemon.innerHTML = "<img src="+"'./images_pokemons/"+pokemon+".png"+"'"+"></img>";
storyPokemon.innerHTML = story;

let pokemonSpans = document.getElementsByClassName("pokemon-name");

for(let n=0;n<pokemonSpans.length;n++){
    pokemonSpans[n].innerHTML = pokemon;
    pokemonSpans[n].style.textTransform = "capitalize";
}



