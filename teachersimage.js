document.addEventListener('DOMContentLoaded', () => {
    //fetch the data as soon as the page has loaded
    let url = "teachers.xml";
    fetch(url)
        .then(response => response.blob())
        .then(data => {
            console.log(data); //string
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
            //document.getElementById('output').textContent = data;
            //console.log(xml);
            buildImageList(xml);
        });
})
function buildImageList(x) {
    let list = document.getElementById('pics');
    let pics = x.getElementsByTagName('image');
    for (let i = 0; i < pics.length; i++) {
        let li = document.createElement('li');
        let image = pics[i].lastChild.nodeValue;
        li.textContent = image;
        list.appendChild(li);
    }
}