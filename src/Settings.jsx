import { Link } from "react-router-dom";
import "./css/Settings.css"
import { useState } from "react";


function Settings() {
    const [tourName, setTourName] = useState("");
    const [newPlayer, setNewPlayer] = useState("");
    const [playerList, setPlayerList] = useState(["Player1", "Player2", "Player4", "Player4"]);
    const [editingPlayerIndex, setEditingPlayerIndex] = useState(null);  
    const [editedPlayerName, setEditedPlayerName] = useState(""); 

    const handleChangeTourName = (e) => {
        setTourName(e.target.value);
    };

    const handleChangeNewPlayer = (e) => {
        setNewPlayer(e.target.value);
    };

    const handleChangeEditedPlayerName = (e) => {
        setEditedPlayerName(e.target.value);
    };

    function addPlayer() {
        if (newPlayer.trim() !== "") {
            setPlayerList((p) => [...p, newPlayer]);
            setNewPlayer("");
        }
    }

    function deletePlayer(index) {
        const updatedPlayerList = playerList.filter((_, i) => i !== index);
        setPlayerList(updatedPlayerList);
    }

    function startEditingPlayer(index) {
        setEditingPlayerIndex(index);
        setEditedPlayerName(playerList[index]);
    }

    function changePlayer() {
        if (editedPlayerName.trim() !== "") {
            const updatedPlayerList = [...playerList];
            updatedPlayerList[editingPlayerIndex] = editedPlayerName;
            setPlayerList(updatedPlayerList);
            setEditingPlayerIndex(null); 
            setEditedPlayerName(""); 
        }
    }

    const colors = ['#FF5733', '#0EA800', '#3357FF', '#F33FFF', '#FF8333', '#33FFF5', '#F5F533', "#6C00EF"];

    
    const getPlayerColor = (index) => {
        return colors[index % colors.length];
    };

    return (
        <>
            <div className="container">
                <div className="tourName">
                    <h3 className="tourNameTittle">Name of the tournament</h3>
                    <input className="tournNameInput" type="text" placeholder="Unknown" value={tourName} onChange={handleChangeTourName} />
                </div>

                <div className="tourPlayerList">
                    <h3 className="tourPlayerListTittle">Player names</h3>
                    
                    <div className="tourPlayerListMainInput">
                        <input className="tourPlayerListInput" type="text" placeholder="Player" value={newPlayer} onChange={handleChangeNewPlayer} />
                        <img className="playerNameSubmit" src="/tick.png" alt="" onClick={addPlayer} />
                    </div>

                    <ol className="tourPlayerListOl">
                        {playerList.map((player, index) => (
                            <ul key={index} className="tourPlayerListLi" >
                                <div className="playerBoard">
                                    {editingPlayerIndex === index ? (
                                        <>
                                            
                                            <input
                                                className="editInput"
                                                type="text"
                                                value={editedPlayerName}
                                                onChange={handleChangeEditedPlayerName}
                                                placeholder="Edit player name"
                                            />
                                            <button className="editButton" onClick={changePlayer}>
                                                <img src="/tick2.png" alt="" />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <h3 className="player">
                                                <div className="count" style={{backgroundColor: getPlayerColor(index)}}>
                                                    {index + 1}
                                                </div>
                                                <div className="playerName">{player}</div>
                                            </h3>
                                            
                                            <div className="playerBoardButtons">
                                                <button className="changeButton" onClick={() => startEditingPlayer(index)}>
                                                    <img src="/pencil.png" alt="" />
                                                </button>
                                                <button className="deleteButton" onClick={() => deletePlayer(index)}>
                                                    <img src="/trash.png" alt="" />
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </ul>
                        ))}
                    </ol>
                </div>

                <div className="randomOrNot">
                    <div className="randomInput">
                        <input type="checkbox" name="" id="" />
                        <h5>Generate randomly</h5>
                    </div>
                    
                    <div className="examples">
                        <div className="randomVariation exampleItem">
                            <img className="randomImage" src="/randomTable.png" alt="" />
                            <h3 className="randomH3">RANDOMLY</h3>
                        </div>

                        <div className="notRandomVariation exampleItem">
                            <img className="randomImage" src="/notRandomTable.png" alt="" />
                            <h3 className="randomH3">NOT RANDOMLY</h3>
                        </div>
                    </div>
                </div>

                <Link to="/">
                    <button className='startButton'>Generate</button>
                </Link>
            </div>
        </>
    );
}
export default Settings