
// เลือกองค์ประกอบหลัก
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnail");

// เพิ่ม Event Listener ให้กับรูปย่อย
thumbnails.forEach(thumbnail => {
    // เมื่อคลิกที่รูปย่อย -> เปลี่ยนรูปหลัก
    thumbnail.addEventListener("click", function() {
        mainImage.src = this.src;
    });

    // เมื่อเอาเมาส์ไปวาง -> แสดงพรีวิวในรูปหลัก
    thumbnail.addEventListener("mouseover", function() {
        mainImage.src = this.src;
    });

    // เมื่อเอาเมาส์ออก -> คืนค่ารูปหลักเป็นรูปก่อนหน้า
    thumbnail.addEventListener("mouseout", function() {
        mainImage.src = "https://picsum.photos/400/300?random=1";
    });
});