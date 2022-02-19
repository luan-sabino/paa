import { useState } from "react";
import { YAxis, ResponsiveContainer, AreaChart, Area, Tooltip } from "recharts";
import sortingServices from "../services/SortingServices";

export default function ShellSort(){

    const [resultsRandom, setResultsRandom] = useState([]);
    const [resultsAscend, setResultsAscend] = useState([]);
    const [resultsDescend, setResultsDescend] = useState([]);
    const [mediumTimeRandom, setMediumTimeRandom] = useState({short: 0, medium: 0, long:0})
    const [mediumTimeAscend, setMediumTimeAscend] = useState({short: 0, medium: 0, long:0})
    const [mediumTimeDescend, setMediumTimeDescend] = useState({short: 0, medium: 0, long:0})
    const title = 'Shell Sort';

    function ShellSort(vetor) {
        let n = vetor.length;

        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
            for (let i = gap; i < n; i += 1)  {
                let temp = vetor[i];
                
                let j;
                for (j = i; j >= gap && vetor[j-gap] > temp; j-=gap)  {
                    vetor[j] = vetor[j-gap];
                }
    
                vetor[j] = temp;
            }
        }
    
        return vetor;
    }

    function Sorting(vetor){

        let startTime = performance.now()
        let result = ShellSort(vetor);
        let endTime = performance.now()

        return (endTime - startTime);

    }
    
    function runTests(type, resultVetor){

        let [vetorS, vetorM, vetorL] = sortingServices.generateArrays(type);
        let resultHandler  = [];

        for(let i = 0; i < 10; i++){
    
            let resultShort = Sorting([...vetorS]);
            let resultMedium = Sorting([...vetorM]);
            let resultLong = Sorting([...vetorL]);
            
            resultHandler.push({name: (i+1) , short: resultShort, medium: resultMedium, long:resultLong});
        }
        switch (type) {
            case 'asc':
                setResultsAscend([...resultHandler]);
                setMediumTimeAscend(getMediumTime(resultHandler))
                break;
            case 'ran':
                setResultsRandom([...resultHandler]);
                setMediumTimeRandom(getMediumTime(resultHandler))
                break;
            case 'des':
                setResultsDescend([...resultHandler]);
                setMediumTimeDescend(getMediumTime(resultHandler));
                break;
            default:
                break;
        }

    }

    function getMediumTime(vetor){
        let resulthandler = {short: 0, medium: 0, long:0};
        vetor.forEach((value) => {
            resulthandler.short += value.short;
            resulthandler.medium += value.medium;
            resulthandler.long += value.long;
        })
        resulthandler.short /= 10;
        resulthandler.medium /= 10;
        resulthandler.long /= 10;
        return(resulthandler);
    }

    if(resultsAscend.length === 0 && resultsRandom.length === 0 && resultsDescend.length === 0)  {
        runTests('asc', resultsAscend);
        runTests('ran', resultsRandom);
        runTests('des', resultsDescend);
    }

    const renderLineChart = (data) => {
        return (
        <ResponsiveContainer height={300} className="lg:w-1/3 lg:px-6 w-full">
            <AreaChart data={data}>
                <Area type='monotone' stackId='1' dataKey='short' stroke="#4FC3F7" fill="#4FC3f7" />
                <Area type='monotone' stackId='1' dataKey='medium' stroke="#4db6ac" fill="#4db6ac" />
                <Area type='monotone' stackId='1' dataKey='long' stroke="##81c784" fill="#81c784" />
                <YAxis
                    tickLine={true}
                    tickFormatter={(value)=>value+'ms'}
                    tickCount={10}
                />    
                <Tooltip/>
            </AreaChart>
        </ResponsiveContainer>
        )
    }
    
    function ReRunTests(type){
        switch (type) {
            case 'asc':
                setResultsAscend([]);
                runTests('asc', resultsAscend);
                break;
            case 'ran':
                setResultsRandom([]);
                runTests('ran', resultsRandom);
                break;
            case 'des':
                setResultsDescend([]);
                runTests('des', resultsDescend);
                break;
            default:
                break;
        }
    }

    return(
        <div className="component-body">
            <p className="page-title">{title}</p>
            <div className="card-graph">
                <p className="card-title">Vetor Crescente</p>
                {renderLineChart(resultsAscend)}
                <div className="medium-time-container">
                    <p className="col-span-3">Tempo Médio</p>
                    <p>Short:  {mediumTimeAscend.short.toFixed(2).toString()}ms </p>
                    <p>Medium: {mediumTimeAscend.medium.toFixed(2).toString()}ms </p>
                    <p>Long:   {mediumTimeAscend.long.toFixed(2).toString()}ms </p>
                </div>
                <button onClick={()=>ReRunTests('asc')} className="button">Run Test</button>
            </div>
            <div className="card-graph">
                <p className="card-title">Vetor Aleatorio</p>
                {renderLineChart(resultsRandom)}
                <div className="medium-time-container">
                    <p className="col-span-3">Tempo Médio</p>
                    <p>Short:  {mediumTimeRandom.short.toFixed(2).toString()}ms </p>
                    <p>Medium: {mediumTimeRandom.medium.toFixed(2).toString()}ms </p>
                    <p>Long:   {mediumTimeRandom.long.toFixed(2).toString()}ms </p>
                </div>
                <button onClick={()=>ReRunTests('ran')} className="button">Run Test</button>
            </div>
            <div className="card-graph">
                <p className="card-title">Vetor Decrescente</p>
                {renderLineChart(resultsDescend)}
                <div className="medium-time-container">
                    <p className="col-span-3">Tempo Médio</p>
                    <p>Short:  {mediumTimeDescend.short.toFixed(2).toString()}ms </p>
                    <p>Medium: {mediumTimeDescend.medium.toFixed(2).toString()}ms </p>
                    <p>Long:   {mediumTimeDescend.long.toFixed(2).toString()}ms </p>
                </div>
                <button onClick={()=>ReRunTests('des')} className="button">Run Test</button>
            </div>
        </div>
    )

}