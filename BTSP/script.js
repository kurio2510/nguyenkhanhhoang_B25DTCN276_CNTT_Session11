let students = [];

while (true) {
  let choice = prompt(
`===== STUDENT MANAGEMENT =====
1. Create Student
2. Read All Students
3. Filter Scholarship Candidates (GPA > 8.0)
4. Update Student Profile
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization (UPPERCASE Name)
0. Exit
Enter your choice:`
  );

  if (choice === null || choice === "0") break;

  switch (choice) {

    case "1": {
      let id = Number(prompt("Enter ID:"));
      let name = prompt("Enter Name:");
      let age = Number(prompt("Enter Age:"));
      let gpa = Number(prompt("Enter GPA:"));
      let status = prompt('Enter Status ("active" or "inactive"):');

      students.push({ id: id, name: name, age: age, gpa: gpa, status: status });
      alert("Student created.");
      break;
    }

    case "2": {
      if (students.length === 0) {
        alert("No students.");
        break;
      }

      let result = "ID | Name | Age | GPA | Status\n";
      result += "----------------------------------\n";

      students.forEach(function(s) {
        result += s.id + " | " + s.name + " | " + s.age + " | " + s.gpa + " | " + s.status + "\n";
      });

      console.log(result);
      alert("Check console.");
      break;
    }

    case "3": {
      let list = students.filter(function(s) {
        return s.gpa > 8.0;
      });

      console.table(list);
      alert("Check console.");
      break;
    }

    case "4": {
      let id = Number(prompt("Enter ID to update:"));
      let student = students.find(function(s) {
        return s.id === id;
      });

      if (!student) {
        alert("Not found.");
      } else {
        student.name = prompt("New name:");
        student.gpa = Number(prompt("New GPA:"));
        alert("Updated.");
      }
      break;
    }

    case "5": {
      let id = Number(prompt("Enter ID to delete:"));
      let index = students.findIndex(function(s) {
        return s.id === id;
      });

      if (index === -1) {
        alert("Not found.");
      } else {
        students.splice(index, 1);
        alert("Deleted.");
      }
      break;
    }

    case "6": {
      let hasUnder18 = students.some(function(s) {
        return s.age < 18;
      });

      let allActive = students.every(function(s) {
        return s.status === "active";
      });

      console.log("Any student age < 18:", hasUnder18);
      console.log("All students active:", allActive);
      alert("Check console.");
      break;
    }

    case "7": {
      if (students.length === 0) {
        alert("No data.");
        break;
      }

      let total = students.reduce(function(sum, s) {
        return sum + s.gpa;
      }, 0);

      let avg = total / students.length;

      console.log("Average GPA:", avg.toFixed(2));
      alert("Check console.");
      break;
    }

    case "8": {
      let normalizedList = students.map(function(s) {
        return {
          id: s.id,
          name: s.name.toUpperCase(),
          age: s.age,
          gpa: s.gpa,
          status: s.status
        };
      });

      console.table(normalizedList);
      alert("Check console.");
      break;
    }

    default:
      alert("Invalid choice.");
  }
}