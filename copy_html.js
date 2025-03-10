let input_var = document.getElementById('inptxt');
let btnE_var = document.getElementById('btnE');
let btnC_var = document.getElementById('btnC');
let txt_span_var = document.getElementById('txt_span');
let error_var = document.getElementById('error_msg'); // Error div

btnE_var.addEventListener('click', function () {
    let name = input_var.value.trim(); // Get input value

    if (!name) {
        error_var.innerText = "Please enter a valid name!";
        error_var.style.display = "block"; // Show error
        return;
    }

    error_var.style.display = "none"; // Hide error if valid

    let formattedHTML = `
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;${name}&lt;/title&gt;
    &lt;link rel="stylesheet" href="${name}.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Code here --&gt;
&lt;/body&gt;
&lt;script src="${name}.js" type='module' &gt;&lt;/script&gt;
&lt;/html&gt;
`;

    txt_span_var.innerHTML = `<pre>${formattedHTML}</pre>`; // Preserve formatting
});

btnC_var.addEventListener('click', function () {
    let textToCopy = txt_span_var.innerText.trim();
    
    if (!textToCopy) {
        error_var.innerText = "Nothing to copy!";
        error_var.style.display = "block";
        return;
    }

    error_var.style.display = "none"; // Hide error if valid

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            error_var.innerText = "Copied to clipboard!";
            error_var.style.display = "block";
            error_var.style.color = "green"; // Change color for success
        })
        .catch(() => {
            error_var.innerText = "Copy failed!";
            error_var.style.display = "block";
            error_var.style.color = "red";
        });
});
