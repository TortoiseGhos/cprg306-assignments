

export default function StudentComponentNew({studentObj}) {

    let {studentName, studentAge, address, address:{city,province}} = studentObj;
    return(
        <div className="bg-red-400 border-yellow-50 p-5 mb-5 mx-5">
            <h3>{studentName}</h3>
            <p>Age: {studentAge}</p>
            <p>{city}, {province}</p>
        </div>
    );
}