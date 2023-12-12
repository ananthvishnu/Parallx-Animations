import { Component } from '@angular/core';

@Component({
  selector: 'app-cloudy',
  templateUrl: './cloudy.component.html',
  styleUrls: ['./cloudy.component.css']
})
export class CloudyComponent {
// function Parallax() {

//     const [background, setBackground] = useState(20)

//     const parallaxRef = useRef(null);
//     const mountain3 = useRef(null);
//     const mountain2 = useRef(null);
//     const mountain1 = useRef(null);
//     const cloudsBottom = useRef(null);
//     const cloudsLeft = useRef(null);
//     const cloudsRight = useRef(null);
//     const stars = useRef(null);
//     const sun = useRef(null);
//     const copy = useRef(null);
//     const btn = useRef(null);

//     useEffect(() => {
//         let ctx = gsap.context(() => {
//             gsap.registerPlugin(ScrollTrigger);
//             var tl = gsap.timeline({
//                 defaults: { duration: 1 },
//                 scrollTrigger: {
//                     trigger: parallaxRef.current,
//                     start: "top top",
//                     end: "5000 bottom",
//                     scrub: true,
//                     pin: true,
//                     onUpdate: (self) => {
//                         setBackground(Math.ceil(self.progress * 100 + 20))
//                     },
//                 },
//             });
//             tl.to(
//                 mountain3.current,
//                 {
//                     y: "-=80",
//                 },
//                 0
//             );
//             tl.to(
//                 mountain2.current,
//                 {
//                     y: "-=30",
//                 },
//                 0
//             );
//             tl.to(
//                 mountain1.current,
//                 {
//                     y: "+=50",
//                 },
//                 0
//             );
//             tl.to(
//                 stars.current,
//                 {
//                     top: 0,
//                 },
//                 0.5
//             );
//             tl.to(
//                 cloudsBottom.current,
//                 {
//                     opacity: 0,
//                     duration: 0.5
//                 },
//                 0
//             );
//             tl.to(
//                 cloudsLeft.current,
//                 {
//                     x: "-20%",
//                     opacity: 0,
//                 },
//                 0
//             );
//             tl.to(
//                 cloudsRight.current,
//                 {
//                     x: "20%",
//                     opacity: 0,
//                 },
//                 0
//             );
//             tl.to(
//                 sun.current,
//                 {
//                     y: "+=210",
//                 },
//                 0
//             );
//             tl.to(
//                 copy.current,
//                 {
//                     y: "-250%",
//                     opacity: 1
//                 },
//                 0
//             );
//             tl.to(
//                 btn.current,
//                 {
//                     opacity: 1,
//                 },
//                 1.5
//             );
//         });
//         return () => ctx.revert();
//     }, []);
// }
// function useState(arg0: number): [any, any] {
//     throw new Error('Function not implemented.');
// }

// function useRef(arg0: null) {
//     throw new Error('Function not implemented.');
// }

// function useEffect(arg0: () => () => void, arg1: never[]) {
//     throw new Error('Function not implemented.');
// }

}