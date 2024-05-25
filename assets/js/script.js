
        var tabLinks = document.getElementsByClassName("tab-links");
        var tabContents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for (var tablink of tabLinks) {
                tablink.classList.remove("active-link");
            }
            for (var tabcontent of tabContents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
