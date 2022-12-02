import React from 'react'
import { Context } from '../../../peopleContext'
import { ProviderType } from '../../../peopleContext'
import { Input, Button } from '@chakra-ui/react'
import './addpeople.css'

function Addpeople() {
    const { peoples, setpeoples } = React.useContext(Context) as ProviderType;
    const [peoplename, setPeopleName] = React.useState<string>('')

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPeopleName(e.target.value)
    }

    const generateId = (): number => {
        const maxId = peoples.length > 0
            ? Math.max(...peoples.map(n => n.id))
            : 0
        return maxId + 1
    }

    const onAddPeopleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setpeoples([...peoples, { id: generateId(), name: peoplename, relationtype: 1 }])
        setPeopleName('')
    }
    return (
        <>
            <div className='add-people-form'>
                <div className='first-form'>
                    <form className='add-people-form' onSubmit={onAddPeopleSubmit}>
                        <h2 className='head-add-title'>For Adding new people</h2>
                        <div className='form-block'>
                            <label className='people-name' htmlFor='name'>ADD People Name:</label>
                            <Input className='people-input' placeholder='add people..' size={'md'} width='80' type={'text'} onChange={handleNameChange} value={peoplename} />
                            <Button className='people-btn' size='sm' variant='outline' type='submit'>Add people</Button>
                        </div>
                    </form>

                    <div className='peoples-name'>
                        <ul>
                            {peoples.map((item, id) => (
                                <li key={id}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addpeople
