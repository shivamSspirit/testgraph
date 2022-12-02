import React from 'react'
import Addpeople from '../forms/addpeopleForm.tsx/addpeople'
import MakeRelation from '../forms/makeRelationform/makeRelation'
import Findsepration from '../forms/findDegreeform/findsepration'
import './people.css'

const People: React.FC = () => {
    return (
        <>
            <div className='app-block'>
                <div className='peoples-block'>
                <Addpeople />
                <MakeRelation />
                <Findsepration />
                </div>
            </div>
        </>
    )
}

export default People
