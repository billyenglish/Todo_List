export const navSection = () => {
    const navItems = document.querySelectorAll("ul li");
    const taskSection = document.querySelectorAll("section");

    navItems.forEach((navItem) => {
        navItem.addEventListener("click", () => {

            taskSection.forEach((taskSections) => {

                if (navItem.id === "inbox" && taskSections.id === "inbox-section") {
                    taskSections.style.display = "block";
                } else if (navItem.id === "today" && taskSections.id === "today-section") {
                    taskSections.style.display = "block";
                } else if (navItem.id === "upcoming" && taskSections.id === "upcoming-section") {
                    taskSections.style.display = "block";
                } else if (navItem.id === "anytime" && taskSections.id === "anytime-section") {
                    taskSections.style.display = "block";
                } else if (navItem.id === "someday" && taskSections.id === "someday-section") {
                    taskSections.style.display = "block";
                } else {
                    taskSections.style.display = "none";
                }
            });
        });
    });
}