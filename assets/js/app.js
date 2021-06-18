window.addEventListener("load", function () {
  new Glider(document.querySelector("#glider"), {
    slidesToShow: 3,
    draggable: true,
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 0,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1.3,
          slidesToScroll: "auto",
          itemWidth: 190,
          duration: 0.25,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: "auto",
          draggable: true,
        },
      },
    ],
  });

  new Glider(document.querySelector(".roadmap"), {
    slidesToShow: 3.5,
    slidesToScroll: 1,
    draggable: true,
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 0,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1,
          slidesToScroll: "auto",
          draggable: true,
          itemWidth: 190,
          duration: 0.25,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          draggable: true,
        },
      },
    ],
  });
});

const sidebarFunction = () => {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const closeSidebar = document.querySelector("#close-sidebar");

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  closeSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
};

const sidebarNavigation = () => {
  const aboutUs = document.querySelector("#about-us");
  const features = document.querySelector("#features-nav");
  const roadmap = document.querySelector("#roadmap-nav");
  const sidebar = document.querySelector(".sidebar");

  aboutUs.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
  features.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
  roadmap.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
};

const scrollFunction = () => {
  $("#section-one .header .navbar .nav-menu li a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
  });

  $("#section-one .header .sidebar .top .links a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
  });
};

sidebarFunction();
sidebarNavigation();
scrollFunction();
