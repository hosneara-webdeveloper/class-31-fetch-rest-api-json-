const loadFriend = () => {
    fetch("https://randomuser.me/api/?results=50")
        .then(response => response.json())
        .then(data => displayFriends(data))

}

loadFriend()

const displayFriends = (data) => {
   // console.log(data)
   const friends = data.results;
   const friendDiv = document.getElementById('html-friends')

    for(const friend of friends ){
       
        console.log(friend);
        const p = document.createElement('p');
        p.innerText = `Name: ${friend.name.title} ${friend.name.first} ${friend.name.last} ++ Email: ${friend.email}`
        friendDiv.appendChild(p)
    }


}