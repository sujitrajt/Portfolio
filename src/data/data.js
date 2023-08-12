// import WorkIm from '../assets/workImg.jpeg'
// import RealEst from '../assets/realestate.jpg'
import insta from "../assets/instawash.png"
import sorting from "../assets/Sorting.png"
import secure from "../assets/secure.png"
import Database from "../assets/DB.png"
// export const data=[
//     {
//         id:1,
//         name:"",
//         image:insta,
//         github:"",
//         live:"",
//     },
//     {
//         id:2,
//         name:"React JS Application",
//         image:RealEst,
//         github:"",
//         live:"",
//     },
//     {
//         id:3,
//         name:"React JS Application",
//         image:WorkIm,
//         github:"",
//         live:"",
//     },
//     {
//         id:4,
//         name:"React JS Application",
//         image:RealEst,
//         github:"",
//         live:"",
//     },


// ]

export const projects = [
    {
        title: "Instawash",
        subtitle: "ReactJS Project",
        description:
            "The project’s primary goal was to develop a web application which allows user to place an order to pick up / deliver their laundry from their home and allow customer to subscribe to services offered by Instawash. Developed an Inventory registry which keeps tracks of all the equipment’s in the laundry company. The application was developed using HTML, CSS, JavaScript",
        image: insta,
        link: "",
    },
    {
        title: "Comparing the runtime of different sorting algorithms and visualizing the results",
        subtitle: "Sorting Algorithms Analysis and Visualization",
        description:
            "Developed a GUI-based application using Python and Tkinter to perform a comprehensive runtime analysis of various sorting algorithms. To facilitate easy interpretation, Matplotlib was employed to present the data using visually appealing line charts and bar graphs. This data visualization allowed users to gain valuable insights into the efficiency and performance of each algorithm for different input sizes.",
        image: sorting,
        link: "https://github.com/sujitrajt/Sorting-Algorithms",
    },
    {
        title: "Secure Web Applications and Programming",
        subtitle: "secure programming project",
        description:
            "Using Python Flask, a secure online application was created and developed, with protections against common security flaws like buffer overflow and session hijacking. credentials were hashed using the Secure Hash Algorithm 256, and a secure session token was kept active throughout the program. The application was developed using HTML, SQLite, Python Flask, Azure Cloud",
        image: secure,
        link: "https://github.com/sujitrajt/secureShare",
    },
    {
        title: "Automobile Spares Inventory Management System",
        subtitle: "React Hook",
        description:
            "Developed a SQL database to maintain an inventory of Automobile Spare Parts of different vehicle categories and developed business queries to analyze the sales of the spare parts.",
        image: Database,
        link: "https://github.com/sujitrajt/DB1",
    },
];