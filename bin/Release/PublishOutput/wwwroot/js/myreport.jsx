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
var Content = React.createClass({
    render: function () {
        return (
            <div className="content">
                <div className="content-report">
                <h1 style={{ textAlign: 'center'}}>Основы React.JS</h1>
                <h2>Вступление</h2>                
                <p>React &#8212; это библиотека JavaScript, которая используется для&nbsp;создания пользовательского интерфейса.
                   React был создан компанией Facebook, а&nbsp;первый релиз библиотеки увидел свет в&nbsp;марте 2013 года.
                   Текущей версий на&nbsp;данный момент (октябрь 2017 года) является версия React v16.0.
                   Первоначально React предназначался для&nbsp;веба, для&nbsp;создания веб-сайтов, однако позже появилась платформа React Native, которая уже предназначалась для&nbsp;мобильных устройств.
                   React представляется идеальный инструмент для&nbsp;создания масштабируемых веб-приложений (в&nbsp;данном случае речь идет о&nbsp;фронтенде), особенно в&nbsp;тех ситуациях, когда приложение представляет SPA (одностраничное приложение).
                   React относительно прост в&nbsp;освоении, имеет понятный и&nbsp;лаконичный синтаксис.</p>
                <h2>Особенности React</h2> 
                <p>Отличительной чертой библиотеки является концентрация на&nbsp;компонентах - мы можем создать отдельные компоненты и&nbsp;затем их легко переносить из&nbsp;проекта в&nbsp;проект.
                   Еще одна особенность React - использование JSX. JSX представляет комбинацию кода JavaScript и&nbsp;XML и&nbsp;предоставляет простой и&nbsp;интуитивно понятный способ для определения кода визуального интерфейса.</p>

                <h2>Рендеринг элементов</h2>
                <p> Для рендеринга элемента на&nbsp;веб-странице применяется метод <code>ReactDOM.render()</code>, который принимает два параметра.
                    Первый параметр представляет компонент, который мы хотим оторазить на&nbsp;веб-странице.
                    В&nbsp;данном случае это обычный заголовок. В&nbsp;этот метод передается элемент, который надо добавить на&nbsp;веб-страницу.
                    Второй параметр - это тот элемент веб-страницы, в&nbsp;котором будет производиться рендеринг компонента из&nbsp;первого параметра.
                    В&nbsp;данном случае это элемент <code>&#60;div id="content"&#62;</code>. Это как раз тот элемент, в&nbsp;который и&nbsp;будет помещаться заголовок. </p>
                <iframe
                    height='180'
                    scrolling='no'
                    title='YeRbbe'
                    src='//codepen.io/Kalistratov/embed/YeRbbe/?height=265&theme-id=dark&default-tab=js,result&embed-version=2'
                    frameborder='no'
                    allowtransparency='true'
                    allowfullscreen='true'
                    style={{ width: '100%' }}>
                    See the Pen <a href='https://codepen.io/Kalistratov/pen/YeRbbe/'>YeRbbe</a> by Anton (<a href='https://codepen.io/Kalistratov'>@Kalistratov</a>) on <a href='https://codepen.io'>CodePen</a>.
                </iframe>
                <p>
                    Если рассмотреть поэтапно, то&nbsp;рендеринг будет происходить следующим образом:
                    <ol>
                        <li> Для рендеринга вызывается функция <code>ReactDOM.render()</code></li>
                        <li> React вызывает элемент<code>&#60;h1&#62;Hello ReactJS&#60;/h1&#62;</code></li>
                        <li>React DOM обновляет стандартный DOM веб-страницы, чтобы она содержала этот элемент</li>
                    </ol>
                </p>
                <h2>JSX</h2>
                <p>JSX представляет способ описания визуального кода посредством комбинации кода на&nbsp;JavaScript и&nbsp;разметки XML. JSX является рекомендуемым способом создания интерфейса.
                    В&nbsp;предыдущем примере было показано самое примитивное приложение, где использовался код JSX. 
                    В&nbsp;данном случае с&nbsp;помощью JSX определялся элемент <code>h1</code>, то есть заголовок.
                    Так же JSX позволяет вводить в&nbsp;эти элементы код JavaScript. </p>
                <p>При работе с&nbsp;JSX следует учитывать ряд моментов, в&nbsp;частности, в&nbsp;JSX для установки класса применяется атрибут <code>className</code>, а&nbsp;не&nbsp;<code>class</code>. 
                    Второй момент: атрибут <code>style</code> в&nbsp;качестве значения принимает объект <code>json</code>. 
                    И&nbsp;третий момент: в&nbsp;JSX используется camel-case, то есть если мы хотим определить стилевое свойство для шрифта, 
                    например, свойство <code>font-family</code>, то соответствующее свойство в&nbsp;объекте стиля будет называться <code>fontFamily</code>, то есть дефис отбрасывается, а&nbsp;следующая часть слова начинается с&nbsp;заглавной буквы.
                    </p>
                <iframe
                    height='465'                    
                    scrolling='no'
                    title='second_example'
                    src='//codepen.io/Kalistratov/embed/xYQvLB/?height=449&theme-id=dark&default-tab=js,result&embed-version=2'
                    frameborder='no'
                    allowtransparency='true'
                    allowfullscreen='true'
                    style={{ width: '100%'}}>
                    See the Pen <a href='https://codepen.io/Kalistratov/pen/xYQvLB/'>second_example</a> by Anton (<a href='https://codepen.io/Kalistratov'>@Kalistratov</a>) on <a href='https://codepen.io'>CodePen</a>.
                </iframe>
                <p>
                    В&nbsp;данном случае элемент, который будет отображаться на&nbsp;веб-странице, вынесен в&nbsp;отдельный класс <code>Test</code>, который наследуется от&nbsp;класса <code>React.Component</code>.
                    То есть в&nbsp;данном случае уже применяются возможности ES6. Подобное определение компонента позволяет работать с&nbsp;ним и&nbsp;развивать его отдельно от другого кода.
                    А&nbsp;чтобы его использовать, в&nbsp;функцию <code>ReactDOM.render()</code> в&nbsp;качестве первого параметра передается одноименный элемент <code>&#60;Test /&#62;</code>.
                    Но без компилятора Babel мы естественно это все не&nbsp;смогли бы использовать.
                </p>
                <h2>Компоненты</h2>
                <p>
                    Компоненты позволяют разделять интерфейс на&nbsp;самостоятельные повторно применяемые части и&nbsp;анализировать каждую из&nbsp;них в&nbsp;отдельности.
                    По идее, компоненты это функции JavaScript. Они принимают произвольное свойство и&nbsp;отдают обратно React элементы, описывающие то, что должно отображаться на&nbsp;экране.
                    В&nbsp;предыдущем примере был опеределён компонент Test с&nbsp;использованием классов ES6. Так же для определения компонента можно использовать стрелочные функции или функциональный способ.
                    Чаще всего при определении компонента используется возможности ES6. При этом для&nbsp;рендеринга компонента в&nbsp;классе компонента
                    обязательно должен быть определен метод <code>render()</code>, который возвращает создаваемый элемент на&nbsp;JSX.<br />
                    Если рассмотреть поэтапно данный пример, то рендеринг будет происходить следующим образом:
                    <ol>
                        <li> Для рендеринга компонента <code>&#60;Test/&#62;</code> вызывается функция <code>ReactDOM.render()</code></li>
                        <li> React вызывает компонент Test</li>
                        <li> Компонент Test возвращает элементы описанные в&nbsp;блоке <code>return()</code></li>
                        <li>React DOM обновляет стандартный DOM веб-страницы, чтобы она содержала эти элементы</li>
                    </ol>
                </p>
                <h2>Props</h2>
                <p>
                    Props представляет коллекцию значений, которые ассоциированы с&nbsp;компонентом.
                    Эти значения позволяют создавать динамические компоненты, которые не&nbsp;зависят от жестко закодированных статических данных.
                    При&nbsp;рендеринге React передает значения атрибутов в&nbsp;виде единого объекта "props".
                    Например, если есть в атрибуте <code>name</code> значение "Tom", то оно перейдет в свойство <code>props.data.name</code>.
                </p>
                <iframe
                    height='384'
                    scrolling='no'
                    title='third_example'
                    src='//codepen.io/Kalistratov/embed/jZdEVy/?height=384&theme-id=dark&default-tab=js,result&embed-version=2'
                    frameborder='no'
                    allowtransparency='true'
                    allowfullscreen='true'
                    style={{width: '100%'}}
                >
                    See the Pen <a href='https://codepen.io/Kalistratov/pen/jZdEVy/'>third_example</a> by Anton (<a href='https://codepen.io/Kalistratov'>@Kalistratov</a>) on <a href='https://codepen.io'>CodePen</a>.
                </iframe>
                <p> Props является неизменяемым объектом, который предназначен только для&nbsp;чтения.
                    Поэтому, он определяется только один раз и&nbsp;при&nbsp;работе приложения не&nbsp;изменяется.
                    Для&nbsp;хранения изменяемых объектов есть специальный объект - <code>state</code>. </p>
                <h2>State</h2>   
                <p>
                    Объект state описывает внутреннее состояние компонента, он похож на&nbsp;props за&nbsp;тем исключением, что состояние определяется внутри компонента и&nbsp;доступно только из&nbsp;компонента.
                    Если props представляет входные данные, которые передаются в&nbsp;компонент извне, то&nbsp;состояние хранит такие объекты, которые создаются в&nbsp;компоненте и полностью зависят от&nbsp;компонента.
                    Также в отличие от&nbsp;props значения в&nbsp;state можно изменять.
                    И&nbsp;еще важный момент - значения из&nbsp;state должны использоваться при&nbsp;рендеринге. Если какой-то объект не используется в&nbsp;рендерниге компонента, то нет смысла сохранять его в&nbsp;state.
                    Нередко state описывает какие-то визуальные свойства элемента, которые могут изменяться при взаимодействие с&nbsp;пользователем. 
                    Например, кнопку нажали, и&nbsp;соответственно можно изменить ее состояние - придать ей какой-то другой цвет, тень и&nbsp;так&nbsp;далее. Кнопку нажали повторно - можно вернуть исходное состояние.
                    Единственное место, где можно установить объект state - это конструктор класса.
                </p>
                <h3>Обновление состояния</h3>
                <p>Для обновления состояния вызывается функция <code>setState()</code>. Изменение состояния вызовет повторный рендеринг компонента, в&nbsp;соответствии с&nbsp;чем&nbsp;веб-страница будет обновлена.
                В&nbsp;то&nbsp;же&nbsp;время не стоит изменять свойства состояния напрямую, просто присваивая ему новое значение. В&nbsp;данном случае изменения повторного рендеринга компонента происходить не&nbsp;будет. 
                При этом нам не&nbsp;обязательно обновлять все его значения. В&nbsp;процессе работы программы мы можем обновить только некоторые свойства. Тогда необновленные свойства будут сохранять старые значения.
                </p>
                <iframe
                    height='300'
                    scrolling='no'
                    title='fourth_example'
                    src='//codepen.io/Kalistratov/embed/ZrNjxP/?height=300&theme-id=0&default-tab=js,result&embed-version=2'
                    frameborder='no'
                    allowtransparency='true'
                    allowfullscreen='true'
                    style={{ width: '100%' }}
                >
                    See the Pen <a href='https://codepen.io/Kalistratov/pen/ZrNjxP/'>fourth_example</a> by Anton (<a href='https://codepen.io/Kalistratov'>@Kalistratov</a>) on <a href='https://codepen.io'>CodePen</a>.
                </iframe>
                <p>Здесь определён компонент <code>TestButton</code>, который представляет кнопку. В состоянии данного компонента хранится четыре состояния:
                    <ul>
                        <li>Класс</li>
                        <li>Надпись</li>
                        <li>Стиль</li>
                        <li>Уведомление</li>
                    </ul>
                    Класс влияет на то, какой стиль будет применён к кнопке &#8212; <code>.on</code> или <code>.off</code>. При&nbsp;нажатии на неё мы будем переключать с&nbsp;одного класса на&nbsp;другой.
                    Так же при нажатии меняются состояния <code>Стиль</code> и&nbsp;<code>Уведомления</code>, которые показывают, в&nbsp;каком статусе сейчас находится всё состояние кнопки в&nbsp;целом.
                    Событие нажатия кнопки через атрибут <code>onClick</code> связано с&nbsp;методом <code>press()</code>, в&nbsp;котором переключается класс кнопки.
                    При&nbsp;этом свойство <code>state.label</code> остаётся неизменным.
                    </p>

                <h3>Обработка событий</h3>
                <p>
                    Обработка событий элементов в&nbsp;React во&nbsp;многом похожа на&nbsp;обработку событий элементов DOM с&nbsp;помощью обычного JavaScript. В&nbsp;то&nbsp;же&nbsp;время есть небольшие отличия:
                    <ul>
                        <li>События в React используют camelCase</li>
                        <li>В JSX в обработчик события передается функция компонента, а&nbsp;не&nbsp;строка</li>
                    </ul>
                    В&nbsp;прошлом блоке для обновления состояний кнопки и&nbsp;текста применялось событие нажатия кнопки, которое задается через атрибут <code>onClick</code>.
                    Этому атрибуту в&nbsp;качестве обработчика события передавалась функция <code>this.click</code>, которая определена в&nbsp;классе компонента. 
                    И&nbsp;при&nbsp;нажатии на кнопку будет вызываться функция <code>click</code>.
                    Главная сложность, которая может возникнуть при использовании событий, это работа с ключевым словом <code>this</code>, которое указывает на&nbsp;текущий объект, в&nbsp;данном случае компонент. 
                    По умолчанию в&nbsp;функцию обработчика не&nbsp;передается текущий объект, поэтому <code>this</code> будет иметь значение <code>undefined</code>.
                    И&nbsp;ни&nbsp;к&nbsp;каким свойствам и&nbsp;методам компонента через <code>this</code> мы обратиться не&nbsp;сможем. 
                    И чтобы в&nbsp;метод <code>click</code> корректно передавалась ссылка на текущий объект через <code>this</code>, в&nbsp;конструкторе класса прописывается вызов:<br />
                    <code>this.click = this.click.bind(this);</code> <br />
                    <iframe
                        height='410'
                        scrolling='no'
                        title='five_example'
                        src='//codepen.io/Kalistratov/embed/mXNaPR/?height=265&theme-id=0&default-tab=js,result&embed-version=2'
                        frameborder='no'
                        allowtransparency='true'
                        allowfullscreen='true'
                        style={{ width: '100%' }}>See the Pen <a href='https://codepen.io/Kalistratov/pen/mXNaPR/'>five_example</a> by Anton (<a href='https://codepen.io/Kalistratov'>@Kalistratov</a>) on <a href='https://codepen.io'>CodePen</a>.
                    </iframe>
                    В&nbsp;данном примере был рассмотрен компонент формы <a href="/Home/Contact">обратной связи</a>, которая есть на&nbsp;данном сайте.
                    Каждый компонент обрабатывается событием <code>onClick</code> и меняет состояния, нужные для&nbsp;отправки данных в&nbsp;контроллер, а так же для валидации.
                    Так как у нас три разных элемента <code>input</code>, то для каждого описан свой обработчик событий и&nbsp;своя функция-валидатор. 
                    При каждом изменении элемента обрабатывается событие <code>onClick</code> и вызывается функция-валидатор. После чего данные изменяют состояние компонента.
                </p>
                <h3>В качестве заключения</h3>
                <p>
                    В&nbsp;данном докладе я рассмотрел основные моменты JavaScript библиотеки&#8212;ReactJS.
                    Во время изучения главным помощником была <a href="https://reactjs.org/docs/hello-world.html">официальная документация</a> и&nbsp;некоторые статьи на&nbsp;Habrahabr.
                    Когда я готовил доклад мне очень понавилось работать с&nbsp;React, поэтому я решил представление данного сайта сделать при помощи данной технологии. 
                </p>
                </div>
           </div>
        );

    }
});
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
class ScrollButton extends React.Component {
    constructor() {
        super();
        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render() {
        return <button title='Back to top' className='scroll'
            onClick={() => { this.scrollToTop(); }}>
            <span>Up</span>
        </button>;
    }
} 


var Report = React.createClass({
    render: function () {
        return (
            <div className="index-page">
                <MenuWave />
                <Content />
                <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
                <Footer />
            </div>              
        );
    }
});

ReactDOM.render(
    <Report />,
    document.getElementById('react-report')
);