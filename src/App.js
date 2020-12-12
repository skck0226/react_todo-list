import react, {useState, useEffect} from 'react';
import List from './List';
import Maplist from './Maplist';
import './App.css';
import {useRecoilState, useRecoilValue} from 'recoil';
import {listState, todoGetter } from './Atoms';
function App() {
	const [value,setValue] = useState('');
	const [list,setList] = useRecoilState(listState);
	const submit = ()=>{
		//list.concat(value)
		setList(prevItems=>[...prevItems,{
			id:prevItems.length,
			value:value
		}]);
		setValue('');	
	}

	return(
		<div className='App'>
			<Maplist list={list} />
			<div className='form'>
				<input type='text' value={value} onKeyPress={(e)=>{if(e.key=='Enter') submit();}} onChange={(e)=>{setValue(e.target.value)}} />
				<button onClick={submit}>submit</button>
			</div>
		</div>
	);	
}

export default App;