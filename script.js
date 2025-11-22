// script.js for PCEA Center Youth Portal v1.1

document.addEventListener("DOMContentLoaded", () => {

    // ====== Event List ======
    const eventList = document.getElementById("event-list");

    // Example: dynamically adding an event (later you can fetch from DB)
    const upcomingEvents = [
        { title: "Youth Fellowship Meeting", date: "2025-12-20" },
        { title: "Bible Study Workshop", date: "2025-12-27" }
    ];

    // Clear placeholder and populate events
    if(upcomingEvents.length > 0){
        eventList.innerHTML = "";
        upcomingEvents.forEach(event => {
            const li = document.createElement("li");
            li.textContent = `${event.title} - ${event.date}`;
            eventList.appendChild(li);
        });
    }

    // ====== Prayer Form ======
    const prayerForm = document.getElementById("prayer-form");
    prayerForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload
        const name = prayerForm.name.value.trim();
        const prayer = prayerForm.prayer.value.trim();

        if(name && prayer){
            alert(`Thank you ${name}, your prayer request has been submitted! 🙏`);
            prayerForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });

    // ====== Donate Button ======
    const donateBtn = document.getElementById("donate-btn");
    donateBtn.addEventListener("click", () => {
        alert("Redirecting to MPESA donation portal...");
        // Example: you can replace with actual MPESA payment URL
        window.location.href = "https://www.safaricom.co.ke/personal/m-pesa";
    });

    // ====== Smooth Scroll for Navbar Links ======
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

});
