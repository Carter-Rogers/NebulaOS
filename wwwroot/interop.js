window.monitorInjectedContent = (dotNetRef, baseUrl) => {
    let contentDiv = document.getElementById("webContent");
    let currentUrl = baseUrl;

    if (!contentDiv) return;


    // Handle link clicks
    contentDiv.addEventListener("click", function (event) {
        let target = event.target.closest("a");
        if (target && target.href) {
            event.preventDefault(); // Prevent the default navigation


            // Resolve relative URLs to absolute URLs
            let resolvedUrl = target.href.toString().replace("https://localhost:7138/url?", currentUrl + "/");
            
            dotNetRef.invokeMethodAsync("OnLinkClick", resolvedUrl);
        }
    });

    // Handle form submissions
    contentDiv.addEventListener("submit", function (event) {
        let form = event.target;
        if (form && form.action) {
            event.preventDefault(); // Prevent the default form submission

            // Prepare form data for submission
            let formData = new FormData(form);
            const params = new URLSearchParams(formData);


            let resolvedUrl = params.toString();

            window.alert(resolvedUrl);




            dotNetRef.invokeMethodAsync("OnFormSubmit", resolvedUrl);
        }
    });
};