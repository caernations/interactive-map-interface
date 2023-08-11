const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const searchInput = document.querySelector("#search-input");
const searchFilter = document.querySelectorAll(".button-value");
var activeFilter = "";

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");
});

let rooms = {
    labtekv : [
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
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 2",
            description: "Sarana berpindah lantai",
            image: "images/9305.jpg",
        },
        {
            roomName: "Ruang Penelitian",
            category: "Ruang Penelitian",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9305.jpg",
        },
        {
            roomName: "Ruang Seminar",
            category: "Ruang Kelas",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9305.jpg",
        },
        {
            roomName: "Lab Programming Basis Data",
            category: "Lab",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9305.jpg",
        },
        {
            roomName: "Ruang Akademik STEI",
            category: "Ruang Umum",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9305.jpg",
        },
        {
            roomName: "Lab RPL",
            category: "Lab",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9305.jpg",
        },
        {
            roomName: "Lab Komputer",
            category: "Lab",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9305.jpg",
        },
        {
            roomName: "Ruang Pertemuan",
            category: "Ruang Umum",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9305.jpg",
        },
        {
            roomName: "Ruang Rapat Dekan (Kantor Ketua Prodi)",
            category: "Ruang Umum",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9305.jpg",
        },
        {
            roomName: "Ruang Arsip",
            category: "Ruang Alat",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9305.jpg",
        },
        {
            roomName: "Gudang",
            category: "Ruang Alat",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9305.jpg",
        },
        {
            roomName: "Tata Usaha (TU)",
            category: "Ruang Umum",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9305.jpg",
        },
        {
            roomName: "Lab Basis Data",
            category: "Lab",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9305.jpg",
        },
        {
            roomName: "Ruang 7602",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Perpustakaan",
            category: "Perpustakaan",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang 7603",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang 7604",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang 7605",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Rapat",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Server",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang OSSC",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Dosen",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang SDM",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Penelitian Flu Burung",
            category: "Ruang Penelitian",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Bengkel",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Gudang",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang 7606",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Gudang",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lab MIC",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lab Dasar",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Dosen",
            category: "Ruang Dosen",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lab Sistem Informatika",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Diskusi",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang 7607",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang 7608",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang 7609",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang 7610",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Pengembangan Kompetensi Mahasiswa",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lab Sister",
            category: "Lab",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Server",
            category: "Ruang Alat",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lab IRK",
            category: "Lab",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Dapur",
            category: "Ruang Umum",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lab LPL",
            category: "Lab",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Diskusi",
            category: "Ruang Umum",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lab Dasar",
            category: "Lab",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "HMS",
            category: "Ruang umum",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Gudang",
            category: "Ruang Alat",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Rapat",
            category: "Ruang Umum",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Tata Usaha (TU)",
            category: "Ruang Umum",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Multimedia",
            category: "Ruang Alat",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lab GAIB",
            category: "Lab",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Residensi S3",
            category: "Ruang Umum",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },

    ],

    koica : [
        {
            roomName: "Multipurpose Hall",
            category: "Ruang Umum",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Kantor Staff",
            category: "Office",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Toilet",
            category: "Toilet",
            location: "Lantai 1",
            description: "Laki-laki, wanita, disabilitas",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Internet Plaza / Digital Library",
            category: "Ruang Umum",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Kantin",
            category: "Kantin",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Mushola",
            category: "Mushola",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Toilet",
            category: "Toilet",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Seminar",
            category: "Ruang Kelas",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lecture Room",
            category: "Ruang Kelas",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Dosen #1",
            category: "Office",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Dosen #2",
            category: "Office",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Manajemen STEI",
            category: "Office",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Executive Director's Room",
            category: "Office",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lab Blockchain",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Toilet",
            category: "Toilet",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Residensi S2 & TA S1",
            category: "Ruang Mahasiswa",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Residensi S3",
            category: "Ruang Mahasiswa",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Mitra Kerjasama",
            category: "Office",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lab Malware",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lab Forensik Digital",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lab Penetration Test",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang Server",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
    ]
};

function populateSearch(i) {
    let cardcontainer = document.createElement("article");

    let card = document.createElement("section");
    card.classList.add("card");
    cardcontainer.appendChild(card);

    let container = document.createElement("div");
    container.classList.add("text-content");

    let name = document.createElement("h3");
    name.innerText = i.roomName;
    container.appendChild(name);

    let description = document.createElement("p");
    description.innerText = `Kategori: ${i.category}\nLokasi: ${i.location}\n\n${i.description}`;
    container.appendChild(description);
    card.appendChild(container);

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("visual");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    document.getElementById("rooms").appendChild(cardcontainer);
}

function searchRoom(queryName, categoryName="") {
    document.getElementById("rooms").innerHTML = "";
    for(let i of rooms[building]) {
        if (i.roomName.toLowerCase().indexOf(queryName.toLowerCase()) > -1 && (categoryName == "" ? true : i.category == categoryName)) {
            populateSearch(i);
        }
    }
}

searchInput.addEventListener("input", function(){
    searchRoom(searchInput.value, activeFilter);
});

searchFilter.forEach(filterbtn => {
    filterbtn.addEventListener("click", function(){
        var filterCategory = filterbtn.dataset.filter;
        if ([...filterbtn.classList].indexOf("active") > -1) {
            searchFilter.forEach(activefilter => {
                if ([...activefilter.classList].indexOf("active") > -1) {
                    activefilter.classList.remove("active");
                }
            });
            activeFilter = "";
            searchRoom(searchInput.value, activeFilter)
        } else {
            document.getElementById("rooms").innerHTML = "";
            searchFilter.forEach(activefilter => {
                if ([...activefilter.classList].indexOf("active") > -1) {
                    activefilter.classList.remove("active");
                }
            });
            filterbtn.classList.add("active");
            activeFilter = filterbtn.dataset.filter;
            for(let i of rooms[building]) {
                if (i.category == filterbtn.dataset.filter) {
                    populateSearch(i);
                }
            }
        }
    });
});

window.addEventListener("load", function(){
    searchRoom(searchInput.value);
});