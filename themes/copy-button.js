document.addEventListener("DOMContentLoaded", function() {
    var copyButtons = document.querySelectorAll(".copy-button");
    copyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var codeArea = this.parentNode.querySelector("code");
            var codeText = codeArea.textContent || codeArea.innerText;
            var lines = codeText.split("\n");
            var modifiedCodeText = lines.map(function(line) {
                return line.substring(1); // 2文字目以降を取得
            }).join("\n");
            navigator.clipboard.writeText(modifiedCodeText)
                .then(function() {
                    var message = document.createElement("div");
                    message.textContent = "コードがコピーされました！";
                    message.style.position = "fixed";
                    message.style.top = "50%";
                    message.style.left = "50%";
                    message.style.transform = "translate(-50%, -50%)";
                    message.style.backgroundColor = "lightblue";
                    message.style.padding = "10px";
                    message.style.borderRadius = "5px";
                    message.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
                    document.body.appendChild(message);
                    setTimeout(function() {
                        message.style.transition = "opacity 1s";
                        message.style.opacity = "0";
                        setTimeout(function() {
                            document.body.removeChild(message);
                        }, 1000);
                    }, 1000);
                })
                .catch(function(error) {
                    console.error("コードのコピー中にエラーが発生しました:", error);
                });
        });
    });
});
