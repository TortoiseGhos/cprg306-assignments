export default function PropsPage() {
            
    let studentOne = {
        studentName: 'john',
        studentAge: 59,
        hasGraduated: false,
        schedule: ["cprg250", "cprg245", "crpg123"],
        address: {
            line1: "123 main",
            city: "calgary",
            province: "ab"
        }
    };
    let {studentName, studentAge, address: {city, province}, schedule: [,,fakeclass3]} = studentOne;

    let studentTwo = {
        studentName: "Alice", 
        studentAge: 23,
        address:{
            city:"agaga",
            province:"aagagagaa"
        }
    }


    return(
        <main>
            <StudentComponent sName={studentName} sAge={studentAge} sCity={address.city} sProvince={address.province}/>
            <StudentComponentNew studentObj = {studentOne}/>
            <StudentComponentNew studentObj = {studentTwo}/>

            <h1>Objects</h1>
            <h2>Dot notation</h2>
            <p>Name: {studentOne.studentName}</p>
            <p>Age: {studentOne.studentAge}</p>
            <p>Schedule: {studentOne.schedule[0]}</p>
            <p>Address: {studentOne.address.line1}</p>
            <p>City: {studentOne.address.city}</p>
            <h2>Destructuring</h2>
            <p>Name: {studentName}</p>

        </main>
    );
}