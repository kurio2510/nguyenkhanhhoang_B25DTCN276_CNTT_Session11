let students = [
    { id: 1, name: "Nguyen Van A", score: 8.5, gender: "Nam" },
    { id: 2, name: "Trân Thị B", score: 4.2, gender: "Nữ" },
    { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
    { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
    { id: 5, name: "Hoang Van E", score: 3.8, gender: "Nam" }
];
function GoodStudents(students) {
    return students.filter(student => student.score >= 8.0);
}
function WeakStudent(students) {
    const hasWeak = students.some(student => student.score < 4.0);
    return hasWeak ? "Có sinh viên yếu" : "Không có sinh viên yếu";
}
function StudentLabels(students) {
    return students.map(student =>
        `Tên: ${student.name} - Điểm: ${student.score}`
    );
}
console.log("Danh sách sinh viên xuất sắc:");
console.log(GoodStudents(students));

console.log(WeakStudent(students));

console.log("Danh sách hiển thị:");
console.log(StudentLabels(students));