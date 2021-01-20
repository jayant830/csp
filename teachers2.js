document.addEventListener('DOMContentLoaded', () => {
    //fetch the data as soon as the page has loaded
    let url = "teachers.xml";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            //console.log(data); //string
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
            //document.getElementById('output').textContent = data;
            //console.log(xml);
            buildNameTable(xml);
            //buildImageList(xml);
            buildBlurbTable(xml);
        });
})

function buildNameTable(x) {
    let table = document.getElementById('member');
    let member = x.getElementsByTagName('name');
    for (let i = 0; i < member.length; i++) {
        let td = document.createElement('td');
        let name = member[i].firstChild.nodeValue;
        td.textContent = name;
        table.appendChild(td);
    }
}

function buildBlurbTable(x) {
    let table = document.getElementById('text');
    let text = x.getElementsByTagName('blurb');
    for (let i = 0; i < text.length; i++) {
        let td = document.createElement('td');
        let blurb = text[i].firstChild.nodeValue;
        td.textContent = blurb;
        table.appendChild(td);
    }
}