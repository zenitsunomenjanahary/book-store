import onlineTestImage from "../images/online-test.png"
import examImg from "../images/exam 1.png"
import certification from "../images/certification 1.png"
import beginnerImg from "../images/beginner.png"
import advancedImg from "../images/advanced.png"
import intermediateImg from "../images/intermediate.png"
import heartImg from "../images/hearts 1.png";
import puzzleImg from "../images/jigsaw 1.png";
import studentImg  from "../images/etudiant.png";
import prof1 from "../images/prof1.png";
import prof2 from "../images/prof2.png";
import prof3 from "../images/prof3.png";


export const headerItems = [
    {
        id:1,
        label: "home"
    },
    {
        id:2,
        label: "about us"
    },
    {
        id:3,
        label: "courses"
    },
    {
        id:4,
        label: "our service"
    },
    {
        id:5,
        label: "contact us"
    },
]

export const heroFooterItems = [
    {
        id: 1,
        image: onlineTestImage ,
        title: "Learn The Latest Skills",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
    },
    {
        id: 2,
        image: examImg ,
        title: "Get Ready For a Career",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
    },
    {
        id: 3,
        image: certification ,
        title: "Earn a Certificate",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
    },
]

export const tracksData = [
    {
        id:1,
        category: "UI/UX Design",
        title: "UI/UX Design for Beginners",
        price: "98",
        hours: "22hr 30min",
        courses: "28",
        sales: 250,
        image:beginnerImg,
    },
    {
        id:2,
        category: "UI/UX Design",
        title: "UI/UX Design Intermediate",
        price: "109",
        hours: "22hr 30min",
        courses: "33",
        sales: 689,
        image: intermediateImg,
    },
    {
        id:3,
        category: "UI/UX Design Advanced",
        title: "UI/UX Design",
        price: "120",
        hours: "22hr 30min",
        courses: "12",
        sales: 123,
        image:advancedImg,
    },
]

export const premiumData = [
    {
        id:1,
        title:"Easily Accessible",
        description: "Learning Will fell Very Comfortable With Courslab",
        image: heartImg
    },
    {
        id:2,
        title:"Fun learning experience",
        description: "Learning Will fell Very Comfortable With Courslab",
        image: puzzleImg
    },
]

export const testimonialsData = [
    {
        id:1,
        message: "Teaching of the great explore of truth, the maser builder of human happinness. No one rejects, dislikes or avoid pleasure itself",
        image: studentImg,
        name: "Finlay Kirk",
        parcours: "Web developper",
    },
    {
        id:2,
        message: "Teaching of the great explore of truth, the maser builder of human happinness. No one rejects, dislikes or avoid pleasure itself",
        image: beginnerImg,
        name: "Zenitsu",
        parcours: "Web developper",
    },
    {
        id:3,
        message: "Teaching of the great explore of truth, the maser builder of human happinness. No one rejects, dislikes or avoid pleasure itself",
        image: advancedImg,
        name: "Nomenjanahary",
        parcours: "Web developper",
    },
    {
        id:4,
        message: "Teaching of the great explore of truth, the maser builder of human happinness. No one rejects, dislikes or avoid pleasure itself",
        image: intermediateImg,
        name: "Finlay Kirk",
        parcours: "Web developper",
    },
    {
        id:5,
        message: "Teaching of the great explore of truth, the maser builder of human happinness. No one rejects, dislikes or avoid pleasure itself",
        image: studentImg,
        name: "Finlay Kirk",
        parcours: "Web developper",
    },
    {
        id:6,
        message: "Teaching of the great explore of truth, the maser builder of human happinness. No one rejects, dislikes or avoid pleasure itself",
        image: advancedImg,
        name: "Finlay Kirk",
        parcours: "Web developper",
    },
]

export const teachersTracksData = [
    {
        id:1,
        image:prof1,
        name: "Matthew E. McNatt",
        email: "Professor@gmail.com",
        bio: "Move in Silence, let your success speak in your place",
        degree: "Engineering physics"
    },
    {
        id:2,
        image:prof2,
        name: "Tracy D.Write",
        email: "Professortracy@gmail.com",
        bio: "Move in Silence, let your success speak in your place",
        degree: "Engineering physics"
    },
    {
        id:3,
        image: prof3,
        name: "Cynthia Neslon",
        email: "Professornelson@gmail.com",
        bio: "Move in Silence, let your success speak in your place",
        degree: "Engineering physics"
    },
]