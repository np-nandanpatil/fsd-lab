import React,{useState} from "react";
const VotingApp =() => {
     const [candidtes, setCandidates] = useState([
          {name: "rama", votes:0},
          {name: "krishna", votes:0}, 
          {name: "sita", votes:0}, 
     ]);
     const [voted,setVoted]=useState(false);

     const handleVote = ()=>{
          if(voted) return;
          const newCandidiate= [...candidates];
          newCandidiate[index].votes +=1;
          setCandidates(newCandidates);
          setVoted(true);
     };

     return(
          <div>
               <h1>Voting Application </h1>
               <ul>
                    {candidates.map((candidates,index) => (
                         <li
                         key={index}>
                         <span>{candidates.name}</span>
                         <span>{candidates.votes}votes</span>
                         <button onClick = {() => handleVote(index)}
                         disabled={voted}
                         >vote
                         </button>
                         </li>

                    ))}
                </ul>
                {voted && <p>You have voted</p>}
          </div>
     );
};
export default VotingApp;