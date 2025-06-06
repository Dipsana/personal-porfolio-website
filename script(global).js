// GLOBALLY set styles to constants for colorful console
const red = "color: red;";
const green = "color: green;";
const yellowItalic = "color: #d7d700; font-style: italic; font-weight: bold;";
console.log("script(global).js running...");

// Add favicon dynamically
function setFavicon(faviconUrl) {
    let link = document.querySelector("link[rel='shortcut icon']");

    if (!link) {
        link = document.createElement("link");
        link.rel = "shortcut icon";
        link.type = "image/webp";
        document.head.appendChild(link);
    }
    link.href = faviconUrl;
}

// Add external styles dynamically
function setStylesheet(stylesheetUrl) {
    let link = document.querySelector(`link[href="${stylesheetUrl}"]`);

    if (!link) {
        link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = stylesheetUrl;
        document.head.appendChild(link);
    }
}

// Apply favicon and styles
setFavicon("favicon.webp");
setStylesheet("style(global).css");
console.log("%cfavicon.webp %cand %cstyle(global).css %capplied!", yellowItalic, green, yellowItalic, green);

// Function to fetch and inject HTML content
async function loadComponent(selector, file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const content = await response.text();
            document.querySelector(selector).innerHTML = content;
            console.log("%c" + selector + "%c loaded to %c" + file + "%c.", yellowItalic, green, yellowItalic, green);
        } else {
            console.error(`%cFailed to load %c${file}: %c${response.status}`, red, yellowItalic, red);
        }
    } catch (error) {
        console.error(`%cError loading %c${file}:`, red, yellowItalic, error);
    }
}

// Load header and footer components
loadComponent("#header", "header.html");
loadComponent("#footer", "footer.html");

// Heading Animations
window.onload = function () {
    const sections = document.querySelectorAll('main h1');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Add fade effect class
                observer.unobserve(entry.target);   // Stop observing once shown
            }
        });
    }, { threshold: 0.5 });

    sections.forEach((section) => observer.observe(section));
};
