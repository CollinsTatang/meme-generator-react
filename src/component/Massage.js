import { useState } from "react";

const Massage  = () => {
    const [massages, setMassages] = useState(["Mark Man Comming", "Keep the check up"])


    return(
        <div>
            {massages.length === 0 ? <h1>You're all caught up!</h1> : <h1>You have {massages.length} unread {massages.length > 1 ? "messages" : "message"}</h1>}
        </div>
    )
}

export default Massage;