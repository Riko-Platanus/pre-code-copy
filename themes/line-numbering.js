document.addEventListener("DOMContentLoaded", function() {
    var pres = document.querySelectorAll("pre");
    pres.forEach(function(pre) {
        var code = pre.querySelector("code");
        var lines = code.innerHTML.split("\n");
        var lineNumbers = "";
        var codeHTML = "";
        for (var i = 0; i < lines.length; i++) {
            lineNumbers += i + 1 + "\n";
            codeHTML += '<span class="line-number">' + (i + 1) + '</span>' + lines[i] + '\n';
        }
        pre.setAttribute("data-line-numbers", lineNumbers);
        code.innerHTML = codeHTML;
    });
});
