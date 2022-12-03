import React from 'react'
import { Context } from '../../../peopleContext'
import { ProviderType } from '../../../peopleContext'
import { Select, Button } from '@chakra-ui/react'
import './findsap.css'

function Findsepration() {
    const { relationships, peoples } = React.useContext(Context) as ProviderType;

    const [selectRealtion, setSelectRelation] = React.useState({
        firstselect: 0,
        secondselect: 0
    })

    const [instruction,setInstruction] = React.useState('')

    let relationnonstateArray = Array.from(relationships);

    const handledegrreval = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let relationtargetname = e.target.name;
        if (relationtargetname === 'peoplefirstname') {
            setSelectRelation({
                ...selectRealtion, firstselect: Number(e.target.value)
            })
        }
        if (relationtargetname === 'peoplesecondname') {
            setSelectRelation({
                ...selectRealtion, secondselect: Number(e.target.value)
            })
        }
    }

    function printAllPaths(s: number, d: number) {
        if (relationnonstateArray) {
            let isVisited = new Array(relationnonstateArray.length);
            for (let i = 0; i < relationnonstateArray.length; i++)
                isVisited[i] = false;
            let pathList = [];
            pathList.push(s);
            printAllPathsUtil(s, d, isVisited, pathList);
        }

    }

    function printAllPathsUtil(u: number, d: number, isVisited: any, localPathList: number[]) {
        if (u === (d)) {
            console.log('pathlist', localPathList.join('>'))
            return;
        }
        isVisited[u] = true;
        for (let i = 0; i < 2; i++) {
            if (!(isVisited[relationnonstateArray[u][i]])) {
                localPathList.push(relationnonstateArray[u][i]);
                printAllPathsUtil(relationnonstateArray[u][i], d, isVisited, localPathList);
                localPathList.splice(localPathList.indexOf(relationnonstateArray[u][i]), 1);
            }
        }
        isVisited[u] = false;
    }

    const handledegrrevalues = (e: React.FormEvent) => {
        e.preventDefault();
        printAllPaths(Number(selectRealtion.firstselect), Number(selectRealtion.secondselect))
        setInstruction("please open console for pathlist(degree of separation)")
    }

    return (
        <div>
            <div className='select-people'>
                <form onSubmit={handledegrrevalues}>
                    <h2 className='select-head-title'>For Finding Sepration</h2>
                    <div className='degree-block'>
                        <label className='name-select' htmlFor='name'>First Name:</label>
                        <Select placeholder='select first people' width='80' className='select-name' onChange={handledegrreval} name="peoplefirstname" id="people">
                            {peoples.map((item, id) => (
                                <option key={id} value={item.id}>{item.name}</option>
                            ))}
                        </Select>

                        <label className='name-select' htmlFor='name'>Second Name:</label>
                        <Select placeholder='select Second people' className='select-name' width='80' onChange={handledegrreval} name="peoplesecondname" id="people">
                            {peoples.map((item, id) => (
                                <option key={id} value={item.id}>{item.name}</option>
                            ))}
                        </Select>
                        <Button className='degree-btn' size='sm' variant='outline' type='submit'>Show degree</Button>
                    </div>
                </form>
                {instruction&&(<div className='instruction'>{instruction}</div>)}
                
            </div>
        </div>
    )
}

export default Findsepration
