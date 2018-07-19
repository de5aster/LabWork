var MenuWave = React.createClass({
    render: function () {
        return (
            <div className="menu">
                <nav role="navigation" className="main-menu">
                    <input type="checkbox" name="gamb-menu" id="btn-menu" />
                    <label htmlFor="btn-menu">Меню</label>
                    <ul className="menu-list">
                        <li className="menu-li"><a href="/Home/Index" className="menu-link">Главная</a></li>
                        <li className="menu-li"><a href="/Home/Myreport" className="menu-link">Доклад</a></li>
                        <li className="menu-li"><a href="/Home/Life" className="menu-link">Игра "Жизнь"</a></li>
                        <li className="menu-li"><a href="/Home/Hh" className="menu-link">HeadHunter</a></li>
                        <li className="menu-li"><a href="/Home/Contact" className="menu-link">Обратная связь</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
});


class HeadHunter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            professions: [],
            skills: [],
            download: false,
            visible: false,
            allVocations: ''
        };
        //this.onRequest = this.onRequest.bind(this);
        //this.button_press = this.button_press.bind(this);
        //this.loadData = this.loadData.bind(this); 
    }

    
    //loadData() {
    //    var xhr = new XMLHttpRequest();
    //    xhr.open("get", this.props.apiUrl, true);
    //    xhr.onload = function () {
    //        var s = JSON.parse(xhr.responseText);
    //        this.setState({
    //            download: true,
    //            visible: true,
    //            professions: s.proff,
    //            skills: s.skill,
    //            allVocations: s.all                
    //        });
    //        console.log(s);
    //    }.bind(this);
    //    xhr.send();
    //}
    //button_press(parametr) {
    //    this.onRequest(parametr);
    //    setTimeout(this.button_press, 3000);  
    //    //this.setState({
    //    //    count_param: parametr.VacancyCount
    //    //});
    //}
    //onRequest (parametr) {
    //    if (parametr) {
    //        var xhr = new XMLHttpRequest();
    //        xhr.open("post", this.props.apiUrl, true);
    //        xhr.setRequestHeader("Content-type", "application/json");
    //        xhr.send(JSON.stringify({
    //            "MinSalary": parametr.MinSalary,
    //            "MaxSalary": parametr.MaxSalary
    //        }));            
    //        xhr.onreadystatechange = function () {            
    //            if (xhr.readyState == 4)
    //            {
    //                var s = JSON.parse(xhr.responseText);
    //                console.log(s);
                    
    //                if (s.status == 4)
    //                {
    //                    this.setState({
    //                        download: true                            
    //                    });
    //                }                    
    //            }                
    //        }
    //    }
    //}
    
    render() {  
        return (
            <div className= "content">
                <h1>Работа с API HeadHunter</h1>                             
                <table style={{ display: this.props.visible ? 'block' : "none", marginBottom : "20px"}}>
                    <thead>
                        <tr>
                            <td> # </td>
                            <td>Профессия</td>
                            <td>Количество упоминаний</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.proffs.slice(
                                0,
                                this.props.input_count < this.props.proffs.length ?
                                    this.props.input_count
                                    : this.props.proffs.length
                            ).map(function (prof, index) {
                                return <tr>
                                    <td> {index+1} </td>
                                    <td>{prof.name}</td>
                                    <td>{prof.count}</td>
                                </tr>
                            }) 
                        }
                        
                    </tbody>
                </table>
                <table style={{ display: this.props.visible ? 'block' : "none" }}>
                    <thead>
                        <tr>
                            <td> # </td>
                            <td>Навык</td>
                            <td>Количество упоминаний</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.skills.slice(
                                0,
                                this.props.input_count < this.props.skills.length ?
                                    this.props.input_count
                                    : this.props.skills.length
                            ).map(function (skill, index) {
                                return <tr>
                                    <td> {index+1} </td>
                                    <td>{skill.name}</td>
                                    <td>{skill.count}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );

    }
}

class RequestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            min_salary: '',
            max_salary: '',
            vacancy_count: '',
            error_message: '',
            professions: [],
            skills: [],
            download: false,
            visible: false,
            allVocations: '',


        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onMinSalaryChange = this.onMinSalaryChange.bind(this);
        this.onMaxSalaryChange = this.onMaxSalaryChange.bind(this);
        this.onVacancyCountChange = this.onVacancyCountChange.bind(this);
        this.onRequest = this.onRequest.bind(this);
        this.loadData = this.loadData.bind(this);
    }
    onMinSalaryChange(e) {
        let minSalary = e.target.value;       
        this.setState({
            min_salary: minSalary
        });
    }
    onMaxSalaryChange(e) {
        let maxSalary = e.target.value;
        this.setState({
            max_salary: maxSalary
        });
    }
    onVacancyCountChange(e) {
        let vacancyCount = e.target.value;
        this.setState({
            vacancy_count: vacancyCount
        });
    }
    onSubmit(e) {
        e.preventDefault();
        var Min_Salary = this.state.min_salary;
        var Max_Salary = this.state.max_salary;
        var Vacancy_Count = this.state.vacancy_count;
        if (!Min_Salary || !Max_Salary || !Vacancy_Count != "") {
            this.setState({
                error_message: "Не заполнены данные"
            });
        } else {
            this.onRequest();
            this.setState({
                error_message: "запрос поехал"
            });
        }
    }

    loadData() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", this.props.apiUrl, true);
        xhr.onload = function () {
            var s = JSON.parse(xhr.responseText);
            this.setState({
                download: true,
                visible: true,
                professions: s.proff,
                skills: s.skill,
                allVocations: s.all,
                error_message: "загружаю"
            });
            console.log(s);
        }.bind(this);
        xhr.send();
    }

    onRequest() {        
        var xhr = new XMLHttpRequest();
        xhr.open("post", this.props.apiUrl, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify({
            "MinSalary": this.state.min_salary,
            "MaxSalary": this.state.max_salary
        }));
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var s = JSON.parse(xhr.responseText);
                console.log(s);

                if (s.status == 4) {
                    this.setState({
                        download: true
                    });
                }
            }
        }        
    }


    render() {
        return (
            <div>                
                <form onSubmit={this.onSubmit}>
                    <label> Зарплата от: <input type="number" onChange={this.onMinSalaryChange} value={this.state.min_salary} placeholder="Введите значение"></input></label> <br />
                    <label> Зарплата до: <input type="number" onChange={this.onMaxSalaryChange} value={this.state.max_salary} placeholder="Введите значение"></input></label> <br />
                    <label> Количество вакансий: <input type="number" onChange={this.onVacancyCountChange} value={this.state.vacancy_count} placeholder="Введите значение"></input></label> <br />
                    <button type="submit">Запрос</button>                    
                    <span style={{ color: 'red' }}> {this.state.error_message}</span> <br />
                    <button onClick={this.loadData}>Загрузить</button>
                    <HeadHunter
                        salary_to={this.state.max_salary}
                        salary_from={this.state.min_salary}
                        input_count={this.state.vacancy_count}
                        proffs={this.state.professions}
                        skills={this.state.skills}
                        visible={this.state.visible}
                    />
                </form>
            </div>
        );
    }

}

var Footer = React.createClass({
    render: function () {
        return (
            <div className="footer-main">
                <footer>
                    <p>&#169; Copyright Kalistratov Anton</p>
                    <p>Лабораторные работы</p>
                    <p>Студент группы РИЗ - 440018</p>
                </footer>
            </div>
        )
    }

});

var HeadHunterPage = React.createClass({
    render: function () {
        return (
            <div className="index-page">
                <MenuWave />
                <RequestForm apiUrl="/home/hh/api/hh" />
                <Footer />
            </div>
        );
    }
});

ReactDOM.render(
    <HeadHunterPage />,
    document.getElementById('react-hh')
);