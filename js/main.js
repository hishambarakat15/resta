    //Handel NavBar When Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            $("nav").addClass('bg-dark')
        } else {
            // $(".navbar").css({
            //     width: '90%',
            //     left: '5%'
            // });
            $("nav").removeClass('bg-dark')

        }
    });

    $(document).ready(function() {


        $("#owl-demo").owlCarousel({

            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            autoPlay: 3000,
            items: 2,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsMobile: false

        });

    });