import Image from "next/image";
const IMAGE_BASE_GENDER = "./gender_icons/";

//<Image alt="gender" src={`${IMAGE_BASE_GENDER}${extractData.gender}.png`} className="content" width="30" height="30"/>

export default function Laureate({ laureate }) {

    return (
        <div className="item flip-card">
            <div className="flip-card-inner">
               <div className="content flip-card-front">
                    <div className="row">
                        <div className="item card-title">
                            <h2 className="laureate-name">{laureate.fullName}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="item card-gender-year">
                        {/* <Image alt="gender" src={`${laureate.gender}.png`} className="content" width="30" height="30"/> */}
                        {/* <Image alt="gender" src={`${IMAGE_BASE_GENDER}${laureate.gender}.png`} className="content" width="30" height="30"/> */}
                        <Image alt="gender" src="/male.png" className="content" width="40" height="40"/>
                        <p className="year">{`${laureate.year}`}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="item card-country">
                            <p>{`${laureate.birthCountry}`}</p>
                        </div>
                    </div>
                </div> 
                <div className="content flip-card-back">
                    <div className="row">
                        <div className="item card-info">
                            <h3 className="category">{laureate.category}</h3>
                            <br />
                            <p className="reason">{laureate.reason}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}






