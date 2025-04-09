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
          <div className="p-4 max-w-md mx-auto text-center bg-white rounded-xl shadow-md space-y-4">
               <h1 className="text-xl font-b text-center">Voting Application </h1>
               <ul>
                    {candidates.map((candidates,index) => (
                         <li
                         key={index}
                         className="flex justify-between intems-center border-b py-2">
                         <span>{candidates.name}</span>
                         <span>{candidates.votes}votes</span>
                         <button onClick = {() => handleVote(index)}
                         disabled={voted}
                         className={'ml-4 px-4 py-2 rounded bg-white ${voted ? "bg-grey-500": "bg-blue-500 hover:bg-blue-700"}'}
                         >vote
                         </button>
                         </li>

                    ))}
                </ul>
                {voted && <p className="text-green-400 text-center">You have voted</p>}
          </div>
     );
};
export default VotingApp;