import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home(){

    return(
    <div className="w-screen h-screen flex flex-col justify-center items-center">
        <p className="text-5xl font-semibold tracking-widest p-7"> Algoritmos de Ordenação </p>
        <div className="grid grid-cols-3 p-10">
            <button className="button">
                <Link to="BSC">Bubble Sort Normal</Link>
            </button>
            <button className="button">
                <Link to="BSP">Bubble Sort Aprimorado</Link>
            </button>
            <button className="button">
                <Link to="QSFE">QuickSort Primeiro Elemento</Link>
            </button>
            <button className="button">
                <Link to="QSME">Quicksort Elemento Central</Link>
            </button>
            <button className="button">
                <Link to="IS">Insertion Sort</Link>
            </button>
            <button className="button">
                <Link to="SS">Shell Sort</Link>
            </button>
            <button className="button">
                <Link to="SnS">Selection Sort</Link>
            </button>
            <button className="button">
                <Link to="HS">Heap Sort</Link>
            </button>
            <button className="button">
                <Link to="MS">Merge Sort</Link>
            </button>
        </div>    
    </div>
    );
}