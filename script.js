
document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generate");
    const removeBtn = document.getElementById("remove");
    const container = document.getElementById("container");
    const memoryUsageDisplay = document.getElementById("memory-usage");
    const MEMORY_LIMIT = 50 * 1024 * 1024; // 50 MB

    function generateElements() {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 10000; i++) {
            const div = document.createElement("div");
            div.className = "generated-item";
            div.textContent = `Element ${i + 1}`;
            fragment.appendChild(div);
        }
        container.appendChild(fragment);
        checkMemoryUsage();
    }

    function removeElements() {
        container.innerHTML = "";
        checkMemoryUsage();
    }

    function checkMemoryUsage() {
        if (performance && performance.memory) {
            const usedJSHeap = performance.memory.usedJSHeapSize;
            memoryUsageDisplay.textContent = `Memory Usage: ${(usedJSHeap / (1024 * 1024)).toFixed(2)} MB`;

            if (usedJSHeap > MEMORY_LIMIT) {
                alert("Memory usage has exceeded 50 MB. Please optimize your actions to reduce memory consumption.");
            }
        }
    }

    generateBtn.addEventListener("click", generateElements);
    removeBtn.addEventListener("click", removeElements);
});
