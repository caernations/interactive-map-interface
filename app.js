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
        },
        {
            roomName: "FTMD - 4108",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Ruang kuliah FTMD",
        },
        {
            roomName: "Ruang 9306",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
        },
        {
            roomName: "Mushola",
            category: "Mushola",
            location: "Lantai 1",
            description: "Tempat beribadah bagi umat muslim",
        },
        {
            roomName: "Sekretariat HMIF",
            category: "Himpunan",
            location: "Lantai 1",
            description: "Ruang untuk mahasiswa HMIF berkumpul",
        },
        {
            roomName: "Ruang 9315",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 1",
            description: "Sarana berpindah lantai",
        },
        {
            roomName: "Ruang 7601",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
        },
        {
            roomName: "Toilet",
            category: "Toilet",
            location: "Lantai 1",
            description: "Tempat buang air, mencuci tangan, dan mencuci muka",
        },
        {
            roomName: "Ruang 9301",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
        },
        {
            roomName: "Kantin Labtek 5",
            category: "Kantin",
            location: "Lantai 1",
            description: "Tempat beristirahat, membeli makanan dan minuman",
        },
        {
            roomName: "Ruang 9303",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
        },
        {
            roomName: "Ruang 9304",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
        },
        {
            roomName: "Ruang 9305",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
        },
        {
            roomName: "Ruang Petugas Kelas",
            category: "Ruang Umum",
            location: "Lantai 1",
            description: "-",
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

    document.getElementById("rooms").appendChild(card);

}