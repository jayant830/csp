document.addEventListener('DOMContentLoaded', () => {
    //fetch the data as soon as the page has loaded
    let url = "teachers.xml";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            //console.log(data);  //string
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
            document.getElementById('output').textContent = data;
            //console.log(xml);
            buildNameList(xml);
            buildImageList(xml);
            buildBlurbList(xml);
        });
})

function buildNameList(x) {
    let list = document.getElementById('member');
    let member = x.getElementsByTagName('name');
    for (let i = 0; i < member.length; i++) {
        let li = document.createElement('li');
        let name = member[i].firstChild.nodeValue;
        li.textContent = name;
        list.appendChild(li);
    }
}

function buildSwordList(x) {
    let list = document.getElementById('swords');
    let swords = x.getElementsByTagName('sword');
    for (let i = 0; i < swords.length; i++) {
        let li = document.createElement('li');
        let swordName = swords[i].firstChild.nodeValue;
        let person = swords[i].getAttribute('owner');
        li.textContent = `${swordName} - ${person}`;
        list.appendChild(li);
    }
}