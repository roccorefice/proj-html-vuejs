// istanza Vue
let app = new Vue({
  el: "#app",
  data: {
    header: {
      logoNavbar: "./assets/img/avada-movers-logo.png",
      menuNavbar: ["Home", "Rates", "Testimonials", "FAQ", "Contact"],
      getNow: "GET A FREE QUOTE ONLINE NOW!",
      descriptionOne: "moving without the hassle",
      descriptionTwo:
        "professional service with quality and customer satisfaction",
      slogan: "we make it simple",
    },

    footer: {
      about: {
        h3: "ABOUT",
        p:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate officiis quam eius eum rerum veniam dolore similique placeat repellat ipsum.",
        logo: "./assets/img/avada-movers-logo.png",
      },

      avadaMovers: {
        h3: "AVADA MOVERS",
        list: ["Home", "Rates", "Testimonials", "Blog", "Free Quote"],
      },

      recentPosts: {
        h3: "RECENT POSTS",
        list: [
          "Heading Out To Collage?",
          "Moving You Busieness",
          "Outstanding Quality",
          "Cast of Moving",
          "Best Moving Tips",
        ],
      },

      footerBottom: {
        copyright: " Copyright 2012 - 2020 |",
        theme: " Avada Theme by ThemeFusion |",
        rights: " All right reserved |",
        poweredBy: " powered by Wordpress",
        socials: [
          "fab fa-facebook-f",
          "fab fa-twitter",
          "fab fa-instagram",
          "fab fa-youtube",
        ],
      },
    },
  },

  methods: {
    scrollOnTop: function () {
      window.scrollTo(0, 0);
    },
  },
});
