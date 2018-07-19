var Table = ReactBootstrap.Table;
var Button = ReactBootstrap.Button;
var FormGroup = ReactBootstrap.FormGroup;
var FormControl = ReactBootstrap.FormControl;
var HelpBlock = ReactBootstrap.HelpBlock;
var Panel = ReactBootstrap.Panel;
var PanelHeading = ReactBootstrap.Panel.Heading;
var PanelBody = ReactBootstrap.Panel.Body;
var regions = [
    "01 Республика Адыгея",
    "02 Республика Башкортостан",  
    "03 Республика Бурятия",
    "04 Республика Алтай",
    "05 Республика Дагестан",
    "06 Республика Ингушетия",
    "07 Кабардино-Балкарская Республика",                    
    "08 Республика Калмыкия",                                      
    "09 Карачаево-Черкесская Республика",
    "10 Республика Карелия",
    "11 Республика Коми",
    "12 Республика Мария Эл",
    "13 Республика Мордовия",
    "14 Республика Саха (Якутия)",
    "15 Республика Северная Осетия",
    "16 Республика Татарстан",
    "17 Республика Тыва",
    "18 Республика Удмуртская Республика",
    "19 Республика Хакассия",
    "20 Чеченская Республика",
    "21 Чувашская Республика",
    "22 Алтайский край",
    "23 Краснодарский край",
    "24 Красноярский край",
    "25 Приморский край",
    "26 Ставропольский край",
    "27 Хабаровский край",
    "28 Амурская область",
    "29 Архангельская область",
    "30 Астраханская область",
    "31 Белгородская область",
    "32 Брянская область",
    "33 Владимирская область",
    "34 Волгоградская область",
    "35 Вологодская область",
    "36 Воронежская область",
    "37 Ивановская область",
    "38 Иркутская область",
    "39 Калининградская область",
    "40 Калужская область",
    "41 Камчатская область",
    "42 Кемеровская область",
    "43 Кировская область",
    "44 Костромская область",
    "45 Курганская область",
    "46 Курская область",
    "47 Ленинградская область",
    "48 Липецкая область",
    "49 Магаданская область",
    "50 Московская область",
    "51 Мурманская область",
    "52 Нижегородская область",
    "53 Новгородская область",
    "54 Новосибирская область",
    "55 Омская область",
    "56 Оренбургская область",
    "57 Орловская область",
    "58 Пензенская область",
    "59 Пермская область",
    "60 Псковская область",
    "61 Ростовская область",
    "62 Рязанская область",
    "63 Самарская область",
    "64 Саратовская область",
    "65 Сахалинская область",
    "66 Свердловская область",
    "67 Смоленская область",
    "68 Тамбовская область",
    "69 Тверская область",
    "70 Томская область",
    "71 Тульская область",
    "72 Тюменская область",
    "73 Ульяновская область",
    "74 Челябинская область",
    "75 Забайкальский край",
    "76 Ярославская область",
    "77 город Москва",
    "78 город Санкт- Петербург",
    "79 Еврейская АО",
    "80 Агинский Бурятский АО",
    "83 Ненецкий АО",
    "86 Ханты-Мансийский АО",
    "87 Чукотский АО",
    "89 Ямало-Ненецкий АО",
    "91 Симферополь",
    "92 Севастополь",
    "99 Байконур"
];

var specializations = [
    "Салоны парикмахерские",
    "Рестораны",
    "IT услуги",
    "Прочие услуги",
    "Медицинские услуги",
    "Транспортные услуги",
    "Образовательные услуги",
    "Оптовая торговля",
    "Розничная торговля",
    "Интернет- торговля",
    "Агентская торговля",
    "Турагентства",
    "Строительство и монтаж",
    "Производство"
];

var Footer = React.createClass({
    render: function () {
        return (
            <div className="footer-main">
                <footer>
                    <p>&#169; Copyright Kalistratov Anton</p>
                    <p>2018</p>                    
                </footer>
            </div>
        );
    }
});

class ContentCalc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            name: '',
            message: '',
            bank: [],
            info: [],            
            visible: false,
            equaring: 0
        };
    }

    
    onFSubmit = (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('file', this.state.file);
        fetch(this.props.apiUrlUpload, {
            mode: 'no-cors',
            method: "POST",
            body: formData
        }).then(function (res) {
            if (res.status == 200) {                
                return res.json();
            }
            if (res.status == 400) {                
                alert("Выписка некорректного формата. Выберите другой файл.");     
            }
        }, function (e) {
            alert("Что-то пошло не так. Попробуйте обновить страницу и повторить попытку");
        }).then((data) => {
            this.setState({
                bank: data.document,
                info: data.info,
                visible : true
            });
        });
    }
    onChangeFile = (e) => {
        
        this.setState({
            file: e.target.files[0],
            name: e.target.files[0].name
        
        });        
    }
   
         
    render() {

        return <div className="content" style={{ marginTop: '50px', padding: "10px 30px" }}>
            <h1>Расчёт операций в банковской выписке</h1>
            <p>Для начала работы нужно загрузить выписку из Интернет-Банка</p>            
            <form onSubmit={this.onFSubmit} enctype="multipart/form-data" style={{ marginBottom: "10px"}}>
                <FormGroup>
                <FormControl
                type="file"
                id="file"
                name="file"
                accept=".txt"                
                onChange={this.onChangeFile}
                />
                <HelpBlock>Выписка в формате 1С с типом файла .*txt</HelpBlock>
                </FormGroup>
                <Button bsStyle="primary" type="submit" disabled={!this.state.file}>Загрузить</Button>
            </form>            
            <Restore
                regions={regions}
                specializations={specializations}
                urlApiRestore="calc/api/restore"
                bank={this.state.bank}
                info={this.state.info}
                visible={this.state.visible}                
                />
        </div>;
    }
}

class Restore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: "",
            taxactionSystem: "",
            specialization: 1,
            employers: 0,
            documentCoeficient: 2,
            cashbox: 0,
            cashboxDoc: 0,
            cashboxCloseDoc: 0,
            month: "",
            documents: 0,
            result: 0,
            visible: false,
            monthVisible: false
    };
    }
    onRegionChange = (e) => {
        this.setState({
            region: e.target.value.slice(0, 2)            
        });
    }
    onTaxactionSystemChange = (e) => {
        this.setState({
            taxactionSystem: e.target.value
        });
    }

    onKkmChange = (e) => {  
        let kkm = Boolean(e.target.value);
        if (kkm) {
            this.setState({
                cashbox: 30 * this.props.info.month,
                cashboxCloseDoc: this.props.info.month,
                monthVisible: true
            });
        } else {
            this.setState({
                cashbox: 0,
                cashboxCloseDoc: 0,
                monthVisible: false
            });
        }         
    }
    onDirectorChange = (e) => {
        
        let dir = Boolean(e.target.value);
        if (dir) {
            this.setState({
                documentCoeficient: 1.5
            });
        } else {
            this.setState({
                documentCoeficient: 2
            });
        }        
    }
    onEmployersChange = (e) => {
        this.setState({
            employers: parseInt(e.target.value)
        });
    }
    onChangeMonth = (e) => {
        this.setState({
            cashboxCloseDoc: parseInt(e.target.value),
            cashbox: 30 * parseInt(e.target.value)
        });
    }
    onSpecializationChange = (e) => {
        let res = parseInt(e.target.value);
        if (res == 0 || res == 1) {
            this.setState({
                specialization: 0.5
            });
        } else if (res == 2 || res == 3) {
            this.setState({
                specialization: 0.6
            });
        } else {
            this.setState({
                specialization: 1
            });
        }
    }
    //onRestoreRequest = (e) => {
    //    e.preventDefault();
    //    fetch(this.props.urlApiRestore, {
    //        method: "POST",
    //        mode: "cors",
    //        body: JSON.stringify({
    //            "Region": this.state.region,
    //            "TaxactionSystem": this.state.taxactionSystem,
    //            "Document": 3 /*this.state.documents*/
    //        })
    //    }).then(function (res) {
    //        if (res.status == 200) {
    //            console.log("Perfect");
    //            return res.json();                
    //        }
    //        if (res.status == 400) {
    //            console.log("oops");
    //        }
    //    }, function (e) {
    //        console.log("Что-то пошло не так. Попробуйте обновить страницу и повторить попытку");
    //    }).then((data) => {
    //        this.setState({
    //            result: data
    //        });
    //    });
    //}
    onRestoreRequest2 = (e) => {
        e.preventDefault();
        this.restoreDocumentCalculate();
        setTimeout(this.requestOnServer, 100);

    }

    requestOnServer = () => {
        var xhr = new XMLHttpRequest();
        xhr.open("post", this.props.urlApiRestore, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify({
            "Region": this.state.region,
            "TaxactionSystem": this.state.taxactionSystem,
            "Document": this.state.documents
        }));
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {                   
                    var s = JSON.parse(xhr.responseText);
                    this.setState({
                        result: s,
                        visible: true
                    });
                }
                if (xhr.status == 400) {
                    alert("Произошла ошибка, повторите попытку.");
                }
            }
        };
    }
    
    calculateDocs = () => { 
        
        return this.state.cashbox + this.state.cashboxCloseDoc + (this.props.bank.buy + this.props.bank.sell) * this.state.documentCoeficient + this.state.employers * 3 * this.props.info.month + this.props.bank.equaring + this.props.bank.order*0.25 + this.props.bank.tax;
    }
    restoreDocumentCalculate = () => {
        this.setState({
            documents: this.calculateDocs()
        });
    }
    isValid = () => {
        if (this.state.region !== "")
        {
            if (this.state.taxactionSystem !== "") {
                return false;
            }
            return true;
        }
        return true;
    }
    render() { 
        let validation = this.isValid();
        return (
            <div className={"docs" + (this.props.visible ? '_none' : '')}>
                <div className="restore-content" >
                    <div className="info-panel">
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3" style={{fontSize:"28px"}}>Информация </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body> 
                                <div className="restore">   
                                    <form onSubmit={this.onRestoreRequest2}>
                                        <label> Регион </label>
                                        <input className="input-calc" name="region" list="regions" placeholder="Введите код региона или название" onChange={this.onRegionChange} />
                                        <datalist id="regions">
                                            { this.props.regions.map((item, index) => {
                                                return (<option value={item}/>);
                                            }) }
                                        </datalist>
                                        <br />
                                        <label> СНО </label>
                                        <select name="taxactionSystem" onChange={this.onTaxactionSystemChange}>
                                            <option value="osno">ОСНО</option>
                                            <option value="usnd">УСН доходы</option>
                                            <option value="usndr">УСН д-р или УСН+ЕНВД</option>
                                            <option value="envd">ЕНВД</option>
                                            <option selected className="option_display">Выберите СНО</option>
                                        </select>
                                        <br />                                   
                                        <div className="kkm">    
                                            <label> Наличие ККМ </label>
                                            <select id="half" name="kkm" onChange={this.onKkmChange}>
                                                <option value={true}>Да</option>
                                                <option value="">Нет</option>
                                                <option selected className="option_display">Выберите из списка</option>
                                            </select>
                                            <span className={"month" + (this.state.monthVisible ? '_none' : '') }>
                                                <label id="half-label">месяцев: </label>
                                                <input className="input-calc-half" type="number" value={this.state.cashboxCloseDoc} onChange={this.onChangeMonth}></input>
                                            </span>
                                        </div>
                                        <label>Директор сам заводит документы</label>
                                        <select name="director" onChange={this.onDirectorChange}>
                                            <option value={true}>Да</option>
                                            <option value="">Нет</option>
                                            <option selected className="option_display">Выберите из списка</option>
                                        </select>
                                        <br />
                                        <label> Сотрудники </label>
                                        <input className="input-calc" type="number" onChange={this.onEmployersChange} onMouseOver={this.restoreDocumentCalculate} value={this.state.employers} placeholder="Введите значение"></input>
                                        <br /> 
                                        <Button bsStyle="primary" type="submit" disabled={validation} style={{marginTop: "10px"}}> Посчитать </Button>
                                    </form>
                                </div>
                            </Panel.Body>                        
                        </Panel>
                        <Panel className={"summary" + (this.state.visible ? '_none' : '')}>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3" style={{ fontSize: "28px" }}>Стоимость восстановления</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <span > {parseInt(this.state.result, 10)} рублей </span>
                            </Panel.Body>
                        </Panel>
                    </div>
                    <Documents
                        bank={this.props.bank}
                        info={this.props.info}
                        visible={this.props.visible}
                        documents={this.state.documents}
                        documentCoeficient={this.state.documentCoeficient}
                        cashbox={this.state.cashbox}
                        cashboxCloseDoc={this.state.cashboxCloseDoc}
                    /> 
                </div>
            </div>
        );
    }
}

class Documents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bank: {
                buy: 0,
                sell: 0,
                equaring: 0,
                order: 0,
                tax: 0
            }
        };
    }
    
    onEquaringChange = (e) => {
        this.setState({
            equaring: parseInt(e.target.value, 10)
        });
    }
    onOrderActChange = (e) => {
        this.setState({
            order: parseInt(e.target.value, 10)
        });
    }

    onBuyChange = (e) => {
        this.setState({
            bank: {
                buy: parseInt(e.target.value, 10),
                sell: 0,
                equaring: 0,
                order: 0,
                tax: 0
            }

        });
    }
    onSellChange = (e) => {
        this.setState({
            sell: parseInt(e.target.value, 10)
        });
    }

    calculateCloseDocument = () => {
        return (this.props.bank.buy + this.props.bank.sell) * (this.props.documentCoeficient - 1) + this.props.cashboxCloseDoc;
    }
    calculateBankDocument = () => {
        return this.props.bank.buy + this.props.bank.sell + this.props.bank.equaring + this.props.bank.order + this.props.bank.tax + this.props.cashbox;
    }
    calculateRestoreDocument = () => {
        return (this.props.bank.buy + this.props.bank.sell) * this.props.documentCoeficient + this.props.bank.equaring + this.props.bank.order * 0.25 + this.props.bank.tax + this.props.cashbox + this.props.cashboxCloseDoc;
    }
    render() {
        var orderCoeficient = 0.25;

        return (
            <div>
                <Panel className="document-panel">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3" style={{ fontSize: "28px" }}>Документы</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <div>
                            <p>Период выписки с {this.props.info.startDate} по {this.props.info.endDate}</p>
                            <p>Месяцев в выписке: {this.props.info.month}</p>
                        </div>

                        <Table striped bordered condensed hover style={{ maxWidth: "550px" }}>
                            <thead>
                                <tr>
                                    <th className="row-name">Наименование</th>
                                    <th>Кол-во операций в&nbsp;банковской выписке </th>
                                    <th>Кол-во закрывающих документов </th>
                                    <th>Кол-во бухгалтерских операций в&nbsp;расчете</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="row-name">Покупки</td>
                                    <td>{this.props.bank.buy}</td>
                                    <td><input className="input-table" type="number" value={this.props.bank.buy * (this.props.documentCoeficient - 1)} onChange={this.onBuyChange} disabled></input></td>
                                    <td>{this.props.bank.buy * this.props.documentCoeficient}</td>
                                </tr>
                                <tr>
                                    <td className="row-name">Продажи</td>
                                    <td>{this.props.bank.sell}</td>
                                    <td><input className="input-table" type="number" value={this.props.bank.sell * (this.props.documentCoeficient - 1)}  onChange={this.onSellChange} disabled></input></td>
                                    <td>{this.props.bank.sell * this.props.documentCoeficient}</td>
                                </tr>
                                <tr>
                                    <td className="row-name">Эквайринг</td>
                                    <td>{this.props.bank.equaring}</td>
                                    <td><input className="input-table" type="number" value="0" onChange={this.onEquaringChange} disabled></input></td>
                                    <td>{this.props.bank.equaring}</td>
                                </tr>
                                <tr>
                                    <td className="row-name">Комиссия банка</td>
                                    <td>{this.props.bank.order}</td>
                                    <td><input className="input-table" type="number" value="0" onChange={this.onOrderActChange} disabled></input></td>
                                    <td>{this.props.bank.order * orderCoeficient}</td>
                                </tr>
                                <tr>
                                    <td className="row-name"><p>Прочее <br />(налоговые платежи)</p></td>
                                    <td>{this.props.bank.tax}</td>
                                    <td>0</td>
                                    <td>{this.props.bank.tax}</td>
                                </tr>
                                <tr>
                                    <td className="row-name"><p>Касса</p></td>
                                    <td>{this.props.cashbox}</td>
                                    <td>{this.props.cashboxCloseDoc}</td>
                                    <td>{this.props.cashbox + this.props.cashboxCloseDoc }</td>
                                </tr>
                                <tr>
                                    <td colSpan="5"></td>
                                </tr>
                                <tr>
                                    <td className="row-name">Итого</td>
                                    <td>{this.calculateBankDocument()}</td>
                                    <td>{this.calculateCloseDocument()}</td>
                                    <td>{this.calculateRestoreDocument()}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}



var CalculatorPage = React.createClass({
    render: function () {
        return (
            <div className="index-page">
                
                <ContentCalc apiUrlUpload="calc/api/load" />
                
            </div>
        );
    }
});

ReactDOM.render(
    <CalculatorPage />,
    document.getElementById('react-contact-me')
);