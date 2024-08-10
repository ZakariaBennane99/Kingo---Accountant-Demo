// Add spinner HTML and CSS to the document
function addSpinner() {
    const spinnerHTML = `
        <div id="spinner" style="display: none;">
            <div class="loader"></div>
        </div>
    `;

    const spinnerCSS = `
        <style>
            #spinner {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
            }
            .loader {
                border: 16px solid #f3f3f3;
                border-radius: 50%;
                border-top: 16px solid #1c58f6;
                width: 120px;
                height: 120px;
                animation: spin 2s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;

    document.body.insertAdjacentHTML('beforeend', spinnerHTML);
    document.head.insertAdjacentHTML('beforeend', spinnerCSS);
}

// Show the spinner and navigate to the new page
function addLinkListeners() {
    const links = document.querySelectorAll("a[href]");
    const spinner = document.getElementById("spinner");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            const href = event.target.getAttribute("href");

            if (!event.target.target && ![
                '#', '#0', '#1', '#2', '#3', 
                '#4', '#5', '#6', '#7', '#8', '#9', '#10'
            ].includes(href)
                && !href.match(/\.(jpg|jpeg|png|gif|bmp|webp)$/i)) {
                event.preventDefault();
                spinner.style.display = "flex";
                setTimeout(() => {
                    window.location.href = href;
                }, 150); // Small delay to show spinner
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    addSpinner();
    addLinkListeners();
});
