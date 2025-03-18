document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("todo-input");
    const addButton = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");
    const clearDoneButton = document.getElementById("clear-done");
    const clearAllButton = document.getElementById("clear-all");

    // ฟังก์ชันเพิ่มรายการ
    function addTodo() {
        let task = input.value.trim();
        if (task === "") return;

        let li = document.createElement("li");
        li.innerHTML = `${task} <button class="done-btn">✔</button>`;
        
        // คลิกแล้วขีดฆ่าข้อความ
        li.querySelector(".done-btn").addEventListener("click", function () {
            li.classList.toggle("done");
        });

        todoList.appendChild(li);
        input.value = "";
    }

    addButton.addEventListener("click", addTodo);
    
    // กด Enter เพื่อเพิ่มรายการ
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });

    // ลบรายการที่เสร็จแล้ว
    clearDoneButton.addEventListener("click", function () {
        document.querySelectorAll(".done").forEach(item => item.remove());
    });

    // ลบทั้งหมด
    clearAllButton.addEventListener("click", function () {
        todoList.innerHTML = "";
    });
});
