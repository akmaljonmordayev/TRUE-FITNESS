import "./cardgoal.css"


function Cardgoal({img, text1, text2}) {
  return (
    <>
    <div className="cardsGoal">
        <img src={img} alt="" />
        <h6>{text1}</h6>
        <p>{text2}</p>
    </div>
    </>
  )
}

export default Cardgoal