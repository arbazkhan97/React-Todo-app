
import { useState } from "react"
export default function LudoBoard(){

    
    let [moves,setMoves]=useState({blue:0,yellow:0,red:0,green:0})

    // pass array in use state
    // let [arr, setArr]=useState([])

    let blueUpdate=()=>{

        setMoves((previousMoves)=>{

            return{...previousMoves, blue:previousMoves.blue+1 }
        })

        // pass arry in set varriables
        // setArr((preArr)=>{

        //     return[
        //         ...preArr,['blue moves']
        //     ]
            
        // }
            
            
        // )


    

        };
        let yellowUpdate=()=>{

            setMoves((previousMoves)=>{
    
                return{...previousMoves, yellow:previousMoves.yellow+1 }
            })
    
            };

            let redUpdate=()=>{

                setMoves((previousMoves)=>{
        
                    return{...previousMoves, red:previousMoves.red+1 }
                })
        
                };

                let greenUpdate=()=>{

                    setMoves((previousMoves)=>{
            
                        return{...previousMoves, green:previousMoves.green+1 }
                    })
            
                    };
    
    return(
        <>

        <div >
            
            <p>blue moves={moves.blue}</p>
            <button style={{backgroundColor:'blue'}} onClick={blueUpdate} >+1</button>

            <p>yellow moves={moves.yellow}</p>
            <button style={{backgroundColor:'yellow',color:'black'}} onClick={yellowUpdate} >+1</button>

            <p>red moves={moves.red} </p>
            <button style={{backgroundColor:'red'}} onClick={redUpdate} >+1</button>
            <p>green moves={moves.green}</p>
            <button style={{backgroundColor:'green'}} onClick={greenUpdate} >+1</button>
        </div>

        </>
    )
}