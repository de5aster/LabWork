var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var MenuItem = ReactBootstrap.MenuItem;
var DropdownButton = ReactBootstrap.DropdownButton;
var Badge = ReactBootstrap.Badge;

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

class Box extends React.Component {
    selectBox = () => {
        this.props.selectBox(this.props.row, this.props.col);        
    }    
    render() {
        return (
            <div
                className={this.props.boxClass}
                id={this.props.boxId}
                onClick={this.selectBox}
            />

        );
    }
}

class Grid extends React.Component {
    render() {
        const width = (this.props.cols * 14);
        var rowsArr = [];
        var boxClass = "";
        for (var i = 0; i < this.props.rows; i++) {
            for (var j = 0; j < this.props.cols; j++) {
                let boxId = i + "_" + j;
                boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
                rowsArr.push(                    
                    <Box
                        boxClass={boxClass}
                        key={boxId}
                        boxId={boxId}
                        row={i}
                        col={j}
                        selectBox={this.props.selectBox}
                    />
                );
            }
        }
        return (
            <div className="grid" style={{ width: width }}>
            {rowsArr}
            </div>
        );
    }
}

class Buttons extends React.Component {

    handleSelect = (evt) =>{
        this.props.gridSize(evt);
    }
    render() {
        return (
            <div className="center">
                <ButtonToolbar>
                    <button className="btn btn-success" onClick={this.props.playButton} style={{ marginBottom: '5px' }}>
                        Играть
                    </button>
                    <button className="btn btn-warning" onClick={this.props.pauseButton} style={{ marginBottom: '5px' }}>
                        Пауза
                    </button>
                    <button className="btn btn-danger" onClick={this.props.clear} style={{ marginBottom: '5px' }}>
                        Очистить
                    </button>
                    <button className="btn btn-info" onClick={this.props.slow} style={{ marginBottom: '5px' }}>
                        Медленно
                    </button>
                    <button className="btn btn-info" onClick={this.props.fast} style={{ marginBottom: '5px' }}>
                        Быстро
                    </button>
                    <button className="btn btn-primary" onClick={this.props.randomize} style={{ marginBottom: '5px' }}>
                        Заполнить
                    </button>
                    <DropdownButton
                        bsStyle='primary'
                        title="Размер поля"
                        id="size-menu"
                        onSelect={this.handleSelect}
                    >
                        <MenuItem eventKey="1">20x10</MenuItem>
                        <MenuItem eventKey="2">40x25</MenuItem>
                        <MenuItem eventKey="3">60x40</MenuItem>
                    </DropdownButton>
                </ButtonToolbar> 
            </div>
            )
    }
}

class Life extends React.Component {
    constructor() {
        super();
        this.speed = 100;
        this.cols = 20; 
        this.rows = 10;               
        this.state = {
            generation: 0,
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        }
    }

    selectBox = (row, col) => {
        let gridCopy = arrayClone(this.state.gridFull);
        gridCopy[row][col] = !gridCopy[row][col];
        this.setState({
            gridFull: gridCopy
        });
    }
   
    randomize = () => {
        
        let gridCopy = arrayClone(this.state.gridFull);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (Math.floor(Math.random() * 4) === 1) {
                    gridCopy[i][j] = true;
                }
            }
        }
        this.clear();
        this.setState({
            gridFull: gridCopy
        });
    }

    playButton = () => {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.play, this.speed);
    }
    pauseButton = () => {
        clearInterval(this.intervalId);
    }

    slow = () => {
        this.speed = 500;
        this.playButton();
    }
    fast = () => {
        this.speed = 100;
        this.playButton();
    }
    clear = () => {
        var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
        this.setState({
            gridFull: grid,
            generation: 0
        });
        this.pauseButton();
    }
    gridSize = (size) => {
        switch (size) {
            case "1":
                this.cols = 20;
                this.rows = 10;
            break;
            case "2":
                this.cols = 40;
                this.rows = 25;
            break; 
            default:
                this.cols = 60;
                this.rows = 40;        
        }
        this.clear();
    }

    play = () => {
        let g = this.state.gridFull;
        let g2 = arrayClone(this.state.gridFull);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let count = 0;
                if (i > 0) if (g[i - 1][j]) count++;
                if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
                if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
                if (j < this.cols - 1) if (g[i][j + 1]) count++;
                if (j > 0) if (g[i][j - 1]) count++;
                if (i < this.rows - 1) if (g[i + 1][j]) count++;
                if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
                if (i < this.rows - 1 && this.cols - 1) if (g[i + 1][j + 1]) count++;
                if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
                if (!g[i][j] && count === 3) g2[i][j] = true;
            }
        }
        this.setState({
            gridFull: g2,
            generation: this.state.generation + 1
        });

    }

    componentDidMount() {
        this.randomize();        
    }

    render() {
        return (
            <div className="content">
                <h1>Игра "Жизнь"</h1>
                <Buttons
                    playButton={this.playButton}
                    pauseButton={this.pauseButton}
                    slow={this.slow}
                    fast={this.fast}
                    clear={this.clear}
                    randomize={this.randomize}
                    gridSize={this.gridSize}

                />
                <Grid
                    gridFull={this.state.gridFull}
                    rows={this.rows}
                    cols={this.cols}
                    selectBox={this.selectBox}
                />
                <h2> Поколение: <Badge>{this.state.generation}</Badge></h2>
                <About />
            </div>
        );
    }
};

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
}


class About extends React.Component {

    render() {
        return (
        <div className="rule-container">
                
                <h3 style={{textAlign:'left'}}>Правила игры</h3>
                <ul className="rule-list">
                    <li>Место действия этой игры — «вселенная» — это размеченная на&nbsp;клетки поверхность или&nbsp;плоскость. В&nbsp;нашем случае — ограниченную плоскость</li>
                    <li>Каждая клетка на&nbsp;этой поверхности может находиться в&nbsp;двух состояниях: быть «живой» (заполненной) или&nbsp;быть «мёртвой» (пустой). Клетка имеет восемь соседей, окружающих её.</li>
                    <li>Распределение живых клеток в&nbsp;начале игры называется первым поколением. Каждое следующее поколение рассчитывается на&nbsp;основе предыдущего по&nbsp;таким правилам:
                        <li>в&nbsp;пустой (мёртвой) клетке, рядом с&nbsp;которой ровно три живые клетки, зарождается жизнь;</li>
                        <li>если у&nbsp;живой клетки есть две или три живые соседки, то&nbsp;эта клетка продолжает жить; в&nbsp;противном случае, если соседей меньше двух или&nbsp;больше трёх, клетка умирает («от&nbsp;одиночества» или «от&nbsp;перенаселённости»)</li>
                    </li>
                </ul>
                <p>Эти простые правила приводят к&nbsp;огромному разнообразию форм, которые могут возникнуть в&nbsp;игре.</p>
                <p>Игрок не&nbsp;принимает прямого участия в&nbsp;игре, а&nbsp;лишь расставляет или&nbsp;генерирует начальную конфигурацию «живых» клеток, которые затем взаимодействуют согласно правилам уже без его участия (он является наблюдателем).</p>
       </div>
        )
    }
}
var Footer = React.createClass({
    render: function () {
        return (
            <div className="footer">
                <div className="footer-main">
                    <footer>
                        <p>&#169; Copyright Kalistratov Anton</p>
                        <p>Лабораторные работы</p>
                        <p>Студент группы РИЗ - 440018</p>
                    </footer>
                </div>
            </div>
        )
    }

});

var LifePage = React.createClass({
    render: function () {
        return (
            <div className="index-page">
                <MenuWave />
                <Life />                
                <Footer />
            </div>
        );
    }
});

ReactDOM.render(
    <LifePage />,
    document.getElementById('react-life')
);