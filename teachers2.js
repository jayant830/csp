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
        let tr = document.createElement('tr');
        let name = member[i].firstChild.nodeValue;
        let blurb = member[i].lastChild.nodeValue;
        tr.textContent = name;
        table.appendChild(tr);
    }
}

function buildBlurbList(x) {
    let table = document.getElementById('text');
    let text = x.getElementsByTagName('blurb');
    for (let i = 0; i < text.length; i++) {
        let tr = document.createElement('tr');
        let blurb = text[i].lastChild.nodeValue;
        tr.textContent = blurb;
        table.appendChild(tr);
    }
}