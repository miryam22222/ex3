export default function Intro({ changeHandler }) {
    return (
        <div className="row">
            <div className="content">
                <strong>This is an app to search for nobel prize laureates and some information about them :)</strong>
            </div>
            <div className="item intro">
                <div className="row">
                    <div className="item control-container">
                        <div className="content">
                            <div className="row">
                                <div className="item control">
                                    <div>Sort by</div>
                                </div>
                                <div className="item control">
                                    <select id="data-sort" onChange={changeHandler}>
                                        <option value="name">name</option>
                                        <option value="year">year</option>
                                        <option value="country">birth country</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item control-container">
                        <div className="content">
                            <div className="row">
                                <div className="item control">
                                    <div>Filter by</div>
                                </div>
                                <div className="item control">
                                    <select id="category-filter" onChange={changeHandler}>
                                        <option value="---">---</option>
                                        <option value="Chemistry">chemistry</option>
                                        <option value="Literature">literature</option>
                                        <option value="Peace">peace</option>
                                        <option value="Physics">physics</option>
                                        <option value="Physiology or Medicine">physiology or medicine</option>
                                        <option value="Economic Sciences">economic sciences</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item control-container">
                        <div className="content">
                            <div className="row">
                                <div className="item control">
                                    <div>Filter by</div>
                                </div>
                                <div className="item control">
                                    <select id="gender-filter" onChange={changeHandler}>
                                        <option value="---">---</option>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}