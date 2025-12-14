 const IMAGE_FOLDER = "ksep2025";

// daftar nama harus sesuai urutan HTML
const members = [
    "karim",
    "jose",
    "mora",
    "danesh",
    "arthur",
    "gie",
    "fakhri",
    "arga",
    "darren",
    "obert",
    "fawaz",
    "agas",
    "orkhan",
    "raz",
    "kemal",
    "rakha"
];

// maksimal kemungkinan foto per orang
const MAX_PHOTO = 5;

const imgElements = document.querySelectorAll(".foto img");

members.forEach((name, index) => {
    const possibleImages = [];

    for (let i = 1; i <= MAX_PHOTO; i++) {
        const img = new Image();
        const path = `${IMAGE_FOLDER}/${name}-${i}.png`;

        img.onload = () => {
            possibleImages.push(path);

            // kalau ini image terakhir yang dicek
            if (i === MAX_PHOTO) {
                setRandomImage();
            }
        };

        img.onerror = () => {
            if (i === MAX_PHOTO) {
                setRandomImage();
            }
        };

        img.src = path;
    }

    function setRandomImage() {
        if (possibleImages.length > 0) {
            const random =
                possibleImages[Math.floor(Math.random() * possibleImages.length)];
            imgElements[index].src = random;
        }
    }
});