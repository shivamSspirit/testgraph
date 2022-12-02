import React, { useState } from 'react'
import { Context } from '../../../peopleContext'
import { ProviderType } from '../../../peopleContext'
import { Select, Button } from '@chakra-ui/react'
import './makerelation.css'

function MakeRelation() {
    const { relationships, setRelationships, peoples } = React.useContext(Context) as ProviderType;
    const [showRelation, setShowRelation] = useState<string[]>([])
    const [makeFriend, setMakeFriend] = React.useState({
        firstFriend: '', secondFriend: ''
    })

    const handleRelationName = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let friendtargetname = e.target.name;
        if (friendtargetname === 'peoplefirstname') {
            setMakeFriend({
                ...makeFriend, firstFriend: e.target.value
            })
        }
        if (friendtargetname === 'peoplesecondname') {
            setMakeFriend({
                ...makeFriend, secondFriend: e.target.value
            })
        }
    }

    const findID = (val1: string, val2: string) => {
        const first: any = peoples.find(item => item.name === val1)
        const second: any = peoples.find(item => item.name === val2)
        return [first, second]

    }

    const onAddRelation = (e: React.FormEvent) => {
        e.preventDefault();
        const [first, second] = findID(makeFriend?.firstFriend, makeFriend?.secondFriend)
        setShowRelation([...showRelation, `${first?.name} is friend of ${second?.name}`])
        setRelationships([...relationships, [first?.id, second?.id]])
    }

    return (
        <div>
            <div className='make-relation'>
                <form onSubmit={onAddRelation}>
                    <h2 className='relation-head-title'>For Making Relation</h2>
                    <div className='relation-block'>
                        <label className='relation-select' htmlFor='name'>First Name:</label>
                        <Select placeholder='Select first people' className='select-relation' width='80' onChange={handleRelationName} name="peoplefirstname" id="people">
                            {peoples.map((item, id) => (
                                <option key={id} value={item.name}>{item.name}</option>
                            ))}
                        </Select>

                        <label className='relation-select' htmlFor='name'>Second Name:</label>
                        <Select placeholder='Select second people' className='select-relation' width='80' onChange={handleRelationName} name="peoplesecondname" id="people">
                            {peoples.map((item, id) => (
                                <option key={id} value={item.name}>{item.name}</option>
                            ))}
                        </Select>
                        <Button className='relation-btn' size='sm' variant='outline' type='submit'>Add relation</Button>
                    </div>
                </form>

                <div className='peoples-relations'>
                    <ul>
                        {showRelation.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MakeRelation
