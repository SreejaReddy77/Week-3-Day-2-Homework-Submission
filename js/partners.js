const partners = [
  {
    image: "images/partners-bustour.png",
    alt: "Bus Tour",
  },
  {
    image: "images/partners-cabinrental.png",
    alt: "Cabin Rental",
  },
  {
    image: "images/partners-campingadv.png",
    alt: "Camping Adventure",
  },
  {
    image: "images/partners-collegetours.png",
    alt: "College Tours",
  },
  {
    image: "images/partners-bikerental.png",
    alt: "Bike Rental",
  },
  {
    image: "images/partners-tourgroup.png",
    alt: "Tour Group",
  },
];

const partnerList = document.getElementById("partners");

partners.forEach(function (partner) {
  const listItem = document.createElement("li");
  listItem.className = "partner";

  const image = document.createElement("img");
  image.src = partner.image;
  image.alt = partner.alt;

  listItem.appendChild(image);
  partnerList.appendChild(listItem);
});
