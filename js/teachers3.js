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
            buildNameList(xml);
            buildBlurbList(xml);
            buildImageList(xml);
        });
})

function buildNameList(x) {
    let list = document.getElementById('member');
    let member = x.getElementsByTagName('name');
    for (let i = 0; i < member.length; i++) {
        let li = document.createElement('li');
        li.classList.add("libox", "box-small")
            //li.classList.add("box-small")
        let name = member[i].firstChild.nodeValue;
        li.textContent = name;
        list.appendChild(li);
    }
}

function buildBlurbList(x) {
    let list = document.getElementById('text');
    let text = x.getElementsByTagName('blurb');
    for (let i = 0; i < text.length; i++) {
        let li = document.createElement('li');
        //li.classList.add("box-large")
        li.classList.add("libox", "box-large")
        let blurb = text[i].firstChild.nodeValue;
        li.textContent = blurb;
        list.appendChild(li);
    }
}

function buildImageList(x) {
    let list = document.getElementById('pix');
    let pix = x.getElementsByTagName('image');
    for (let i = 0; i < pix.length; i++) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        li.classList.add("libox", "box-medium")
            //img.classList.add("libox", "box-medium")
        let image = pix[i].firstChild.nodeValue;
        img.src = image;
        list.appendChild(img);
    }
}