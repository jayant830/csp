document.addEventListener('DOMContentLoaded', () => {
    //fetch the data as soon as the page has loaded
    let url = "teachers.xml";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log(data); //string
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
            //document.getElementById('output').textContent = data;
            //console.log(xml);
            buildNameList(xml);
            //buildImageList(xml);
            //  buildBlurbList(xml);
        });
})

function buildNameList(x) {
    let list = document.getElementById('member');
    let member = x.getElementsByTagName('name');
    for (let i = 0; i < member.length; i++) {
        let span = document.createElement('span');
        let name = member[i].firstChild.nodeValue;
        let blurb = member[i].lastChild.nodeValue;
        span.textContent = name;
        span.textContent = blurb;
        list.appendChild(span);
    }
}

function buildBlurbList(x) {
    let list = document.getElementById('member');
    let member = x.getElementsByTagName('blurb');
    for (let i = 0; i < member.length; i++) {
        let li = document.createElement('li');
        let blurb = member[i].lastChild.nodeValue;
        //let person = swords[i].getAttribute('owner');
        li.textContent = blurb;
        list.appendChild(li);
    }
}