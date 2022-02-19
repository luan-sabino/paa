const short = 500;
const medium = 1000;
const long = 2500;

class SortingServices {

    setResultOnLocalStorage(){

    }

    setResultFromSort(vetor){
        let rs = {shr:0, med:0, lon:0}; 
        vetor.forEach((obj)=>{
            rs.shr += obj.short;
            rs.med += obj.medium;
            rs.lon += obj.long;
        });
        rs.shr = rs.shr/10;
        rs.med = rs.med/10;
        rs.lon = rs.lon/10;
        return rs;
    }

    generateArrays(type, vetorS = [], vetorM = [], vetorL = []){
        switch (type) {
            case 'asc':
                vetorS = (Array.from({length: short}, () => Math.floor(Math.random() * short))).sort((a,b)=> a - b);
                vetorM = (Array.from({length: medium}, () => Math.floor(Math.random() * medium))).sort((a,b)=> a - b);
                vetorL = (Array.from({length: long}, () => Math.floor(Math.random() * long))).sort((a,b)=> a - b);
                return [vetorS, vetorM, vetorL];
            case 'ran':
                vetorS = Array.from({length: short}, () => Math.floor(Math.random() * short));
                vetorM = Array.from({length: medium}, () => Math.floor(Math.random() * medium));
                vetorL = Array.from({length: long}, () => Math.floor(Math.random() * long));
                return [vetorS, vetorM, vetorL];
            case 'des':
                vetorS = (Array.from({length: short}, () => Math.floor(Math.random() * short))).sort((a,b)=> b - a);
                vetorM = (Array.from({length: medium}, () => Math.floor(Math.random() * medium))).sort((a,b)=> b - a);
                vetorL = (Array.from({length: long}, () => Math.floor(Math.random() * long))).sort((a,b)=> b - a);
                return [vetorS, vetorM, vetorL];
            default:
                break;
        }
    }
}

const sortingServices = new SortingServices();
export default sortingServices