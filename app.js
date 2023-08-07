const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");
});

let rooms = {
    data:[
        {
            roomName: "FTI",
            category: "Ruang Umum",
            location: "Lantai 1",
            description: "Kantor FTI",
            image: "images/fti.png",

        },
        {
            roomName: "FTMD - 4108",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Ruang kuliah FTMD",
            image: "images/ftmd4108.png",
        },
        {
            roomName: "Ruang 9306",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9306.png",
        },
        {
            roomName: "Mushola",
            category: "Mushola",
            location: "Lantai 1",
            description: "Tempat beribadah bagi umat muslim",
            image: "images/mushola.png",
        },
        {
            roomName: "Sekretariat HMIF",
            category: "Himpunan",
            location: "Lantai 1",
            description: "Ruang untuk mahasiswa HMIF berkumpul",
            image: "images/sekrehmif.png",
        },
        {
            roomName: "Ruang 9315",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9315.png",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 1",
            description: "Sarana berpindah lantai",
            image: "images/lift.jpg",
        },
        {
            roomName: "Ruang 7601",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/7601.png",
        },
        {
            roomName: "Toilet",
            category: "Toilet",
            location: "Lantai 1",
            description: "Tempat buang air, mencuci tangan, dan mencuci muka",
            image: "images/toiletw.jpg",
        },
        {
            roomName: "Ruang 9301",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9301.jpg",
        },
        {
            roomName: "Kantin Labtek 5",
            category: "Kantin",
            location: "Lantai 1",
            description: "Tempat beristirahat, membeli makanan dan minuman",
            image: "images/kantinlabtek5.jpg",
        },
        {
            roomName: "Ruang 9303",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9303.jpg",
        },
        {
            roomName: "Ruang 9304",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang 9305",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9305.jpg",
        },
        {
            roomName: "Ruang Petugas Kelas",
            category: "Ruang Umum",
            location: "Lantai 1",
            description: "-",
            image: "images/ruangpetugaskelas.jpg",
        },

    ]
};

for(let i of rooms.data) {

    let card = document.createElement("div");
    card.classList.add("card", "i.category");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5")
    name.classList.add("room-name");
    name.innerText = i.roomName.toUpperCase();
    imgContainer.appendChild(name)

    card.appendChild(container)
    document.getElementById("rooms").appendChild(card);
}