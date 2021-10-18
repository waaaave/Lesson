import React from 'react';
import { Route, Link } from 'react-router-dom'
import Skill1 from './workplace/Skill1';
import Skill2 from './workplace/Skill2';
import Skill3 from './workplace/Skill3';


function WorkPlace() {
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to='/workplace/skill1'>技能1</Link></li>
                    <li><Link to='/workplace/skill2'>技能2</Link></li>
                    <li><Link to='/workplace/skill3'>技能3</Link></li>
                </ul>
            </div>
            <div className='videoContent'>
                <div><h3>职场技能</h3></div>
                <Route path='/workplace/skill1' component={Skill1} />
                <Route path='/workplace/skill2' component={Skill2} />
                <Route path='/workplace/skill3' component={Skill3} />
            </div>
        </div>
    )
}

export default WorkPlace