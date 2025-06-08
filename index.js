const inputEl = document.querySelector("#cc-input");
const formEl = document.querySelector(".cc-form");
const outEl = document.querySelector(".out");

function escapeHTML(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

formEl.addEventListener("submit", function(e) {
    e.preventDefault();

    let inputValue = inputEl.value;

    inputValue = inputValue.replace(/<head[\s\S]*?<\/head>/i, '');

    const cleanedValue = inputValue
        .replace(/data-secondsdelay=""/g, "")
        .replace(/onclick=""/g, "")
        .replace(/title=""/g, "")
        .replace(/id="[^"]*"/g, "")
        .replace(/align="[^"]*"/g, "")
        .replace(/width="[^"]*"/g, "")
        .replace(/height="[^"]*"/g, "")
        .replace(/target="[^"]*"/g, "")
        .replace(/wrapper-classes="[^"]*"/g, "")
        .replace(/delay="[^"]*"/g, "")
        .replace(/animate="[^"]*"/g, "")
        .replace(/variantvalue="[^"]*"/g, "")
        .replace(/data-minutesdelay="[^"]*"/g, "")
        .replace(/billnow="[^"]*"/g, "")
        .replace(/offer="[^"]*"/g, "")
        .replace(/upsell="[^"]*"/g, "")
        .replace(/price="[^"]*"/g, "")
        .replace(/quantity="[^"]*"/g, "")
        .replace(/speed="[^"]*"/g, "")
        .replace("<head>", "")
        .replace("</head>", "")
        .replace("<body>", "")
        .replace("</body>", "")
        .replace("<html>", "")
        .replace("</html>", "")
        .replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, '')
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');

    outEl.innerHTML = `<code>${escapeHTML(cleanedValue)}</code>`;
    console.log("out:", cleanedValue);
});
