import { useState } from "react";

const VotingApp = () => {
     const [candidates, setCandidates] = useState([
          { name: "rama", votes: 0 },
          { name: "krishna", votes: 0 },
          { name: "sita", votes: 0 },
     ]);
     const [voted, setVoted] = useState(false);

     const handleVote = (index) => {
          if (voted) return;

          const newCandidates = [...candidates];
          newCandidates[index].votes += 1;

          setCandidates(newCandidates);
          setVoted(true);
     };

     return (
          <div>
               <h1>Voting Application</h1>
               <ul>
                    {candidates.map((candidate, index) => (
                         <li key={index}>
                              <span>{candidate.name} - </span>
                              <span>{candidate.votes} votes </span>
                              <button onClick={() => handleVote(index)} disabled={voted}>
                                   Vote
                              </button>
                         </li>
                    ))}
               </ul>
               {voted && <p>You have voted</p>}
          </div>
     );
};

export default VotingApp;
