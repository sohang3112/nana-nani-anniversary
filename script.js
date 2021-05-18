function randIntGenerator(start, end) {
    const diff = end - start;
    return () => start + Math.floor(diff * Math.random());
}

const imageNames = [
      '1.jpg'
    , 'nani_alone.jpg'
    , 'at_home1.jpg'
    , 'at_home2.jpg'
    , 'at_home3.jpg'
    , 'besides_lake.jpg'
    , 'bridge.jpg'
    , 'gurudwara.jpg'
    , '3.jpg'
    , 'on_rocks.jpg'
    , '2.jpg'
]

const randGen = randIntGenerator(-25, 25);
const imageCard = src => `
    <div class="image-card" style="transform: rotate(${randGen()}deg)">
        <img src="${src}">
    </div>
`

const grid = document.getElementById('image-grid');
let gridHtml = '';
for (const img of imageNames) {
    gridHtml += imageCard("img/" + img);
}
grid.innerHTML = gridHtml;