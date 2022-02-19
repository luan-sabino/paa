import './App.css';
import BubbleSortCommon from './components/BubbleSortCommon';
import BubbleSortPlus from './components/BubbleSortPlus';
import QuickSortFirstElement from './components/QuickSortFirstElement';
import QuickSortMiddleElement from './components/QuickSortMiddleElement';
import InsertionSort from './components/InsertionSort';
import ShellSort from './components/ShellSort';
import SelectionSort from './components/SelectionSort';
import HeapSort from './components/HeapSort';
import MergeSort from './components/MergeSort';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BSC" element={<BubbleSortCommon />} />
      <Route path="/BSP" element={<BubbleSortPlus />} />
      <Route path="/QSFE" element={<QuickSortFirstElement />} />
      <Route path="/QSME" element={<QuickSortMiddleElement />} />
      <Route path="/IS" element={<InsertionSort />} />
      <Route path="/SS" element={<ShellSort />} />
      <Route path="/SnS" element={<SelectionSort />} />
      <Route path="/HS" element={<HeapSort />} />
      <Route path="/MS" element={<MergeSort />} />
    </Routes>
  );
}

export default App;
