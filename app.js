let friends = {};
let voteCount = {};

function addFriend() {
    const friendName = document.getElementById('friendName').value.trim();
    if (friendName) {
        if (!friends[friendName]) {
            friends[friendName] = 0;
            voteCount[friendName] = 0;
            const select = document.getElementById('voteSelect');
            const option = document.createElement('option');
            option.value = friendName;
            option.textContent = friendName;
            select.appendChild(option);
            updateResults();
        } else {
            alert('Friend already added.');
        }
        document.getElementById('friendName').value = '';
    } else {
        alert('Please enter a friend\'s name.');
    }
}

function castVote() {
    const select = document.getElementById('voteSelect');
    const friendName = select.value;
    if (friendName) {
        friends[friendName]++;
        voteCount[friendName]++;
        updateResults();
    } else {
        alert('Please select a friend to vote for.');
    }
}

function updateResults() {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    for (let friend in friends) {
        const li = document.createElement('li');
        li.textContent = `${friend}: ${friends[friend]} votes`;
        resultsList.appendChild(li);
    }
}
