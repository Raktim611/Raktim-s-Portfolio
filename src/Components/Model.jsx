import React, { useEffect,useRef } from "react";
import {Canvas, useThree} from "@react-three/fiber"
import {OrbitControls,useGLTF,useAnimations} from"@react-three/drei";
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"





export default function Model(){

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    const model=useGLTF("/models/destiny_2_character_bust.glb");


    const {actions}=useAnimations(model.animations,model.scene);

    useEffect(()=>{
        actions["Take 001"].play();
    },[actions])

    useThree(({scene,camera,gl})=>{
        camera.position.z=30
    })

    const threemodel=useRef(model);



    useGSAP(()=>{
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:".section1",
                start:"top top",
                endTrigger:".section7",
                end:"bottom bottom",
                scrub:true
            }
        })
        tl
        .to(threemodel.current.scene.position,{
            z:"-=30",
            x:"+=20"
        })
        .to(threemodel.current.scene.rotation,{
            y:`+=${-Math.PI*2}`
        },"second")
        .to(threemodel.current.scene.position,{
            x:"-=20"
        },"second")
        .to(threemodel.current.scene.position,{
            z:"+=40"
        })
        
        
    },[])







    
    return(

        <>
            <primitive object={model.scene} position={[0,5,0]} rotation={[0,Math.PI*2,0]} ></primitive>
            <directionalLight position={[0,5,5]} color={0xFFFFFF} intensity={10}/>
           

        </>
    )
}