import React from 'react'
import "./Manager.css"
import ManagerBio from './ManagerBio'
import ManagerExtra from './ManagerExtra'

const Manager = ({pic,name,date,active,clubs,description,worldCup,clubsLeagues,clubsChampionsLeague,CLRunnersUp,clubsEuropaLeague,ELRunnersUp,video,played,win,draw,lose,percentage}) => {
    return (
        <div className='manager__page'>
            <ManagerBio 
            pic={pic} 
            name={name} 
            date={date} 
            active={active} 
            clubs={clubs} 
            description={description} 
            worldCup={worldCup}
            clubsLeagues={clubsLeagues}
            clubsChampionsLeague={clubsChampionsLeague}
            CLRunnersUp={CLRunnersUp}
            clubsEuropaLeague={clubsEuropaLeague}
            ELRunnersUp={ELRunnersUp}
            />
            
            <ManagerExtra video={video} played={played} win={win} draw={draw} lose={lose} percentage={percentage} />
        
        </div>
    )
}

export default Manager
