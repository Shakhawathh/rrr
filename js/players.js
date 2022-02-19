function setPlayerStyle(player){
    player.style.border = '1px solid red';
    player.style.margin = '10px';
    player.style.borderRadius = '15px';
    player.style.padding = '10px';
}

const players = document.getElementsByClassName('player')
for(const player of players){
    setPlayerStyle(player)
    
   
}
function addplayer(){
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    console.log(player)
    player.innerHTML = `
    <h4 class="player-name">New player</h4>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus culpa ut blanditiis quaerat rem necessitatibus aliquid et, reprehenderit reiciendis incidunt, sunt pariatur quas. Quos unde eveniet reprehenderit ratione numquam velit.</p>
    `
    setPlayerStyle(player);
    playerContainer.appendChild(player);
     
}

document.getElementById('players').addEventListener('click' , function(event){
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'yellow';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'yellow'
    }

})