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
                        <li className="menu-li"><a href="/Home/Calc" className="menu-link">Кальк</a></li>
                        <li className="menu-li"><a href="/Home/ObList" className="menu-link">Список</a></li>
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
                
                    <div className="home-content">                    
                    <h1 style={{textAlign:'center'}}>Разработка интернет-технологий</h1>
                    <p>При разработке данного сайта были применены технологии ASP.NET Core, HTML, CSS, React.</p>
                    <h3>ASP.NET Core</h3>
                        <div className="info-block">
                            <img src="https://docs.microsoft.com/ru-ru/dotnet/images/hub/netcore.svg" alt="asp_net" className="left-img"></img>                        
                            <div className="info-left">
                                <p>ASP.NET Core является кроссплатформенной, высокопроизводительной средой с&nbsp;<a href="https://github.com/aspnet/home" target="_blank">открытым исходным кодом</a> для создания современных облачных приложений,
                                подключенных к&nbsp;Интернету. ASP.NET Core позволяет выполнять следующие задачи:</p>
                                <ul>
                                    <li>Создавать веб-приложения и&nbsp;службы, приложения IoT и&nbsp;серверные части для&nbsp;мобильных приложений.</li>
                                    <li>Использовать избранные средства разработки в&nbsp;Windows, macOS и&nbsp;Linux.</li>
                                    <li>Выполнять развертывания в&nbsp;облаке или&nbsp;локальной среде.</li>
                                    <li>Работать в&nbsp;.NET Core или&nbsp;.NET&nbsp;Framework.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                 
                
                    <div className="home-content">  
                        <h3>HTML</h3> 
                        <div className="info-block">                                                       
                            <img src="https://image.freepik.com/free-icon/no-translate-detected_318-53222.jpg" alt="Html" className="right-img"></img>
                            <div className="info-right">
                                <p>HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — HTML. Язык HTML интерпретируется браузерами.
                               Полученный в&nbsp;результате интерпретации форматированный текст отображается на&nbsp;экране монитора компьютера или&nbsp;мобильного устройства.</p>
                            </div>
                        </div> 
                    </div>             
                    <div className="home-content">  
                        <h3>CSS</h3>
                        <div className="info-block">                                
                            <img src="https://image.freepik.com/free-icon/no-translate-detected_318-27978.jpg" alt="css" className="left-img"></img>                        
                            <div className="info-left">
                                <p>CSS (от англ. Cascading Style Sheets — каскадные таблицы стилей) — формальный язык описания внешнего вида документа, написанного с&nbsp;использованием языка разметки.
                                Преимущественно используется как&nbsp;средство описания, оформления внешнего вида веб-страниц, написанных с&nbsp;помощью языков разметки HTML.</p>
                            </div>
                        </div>
                    </div>
                    <div className="home-content">
                        <h3>React</h3>
                        <div className="info-block">                            
                            <img src="https://geekbrains-uploads.s3.amazonaws.com/courses/images/000/000/119/original/ReactJs-01.png" alt="Reactjs" className="right-img"></img>
                            <div className="info-right">
                                <p>React (старые названия: React.js , ReactJS ) - открытая JavaScript библиотека для&nbsp;создания интерфейсов,
                                        которая призвана решать проблемы частичного обновления содержания веб-страницы,
                                        с&nbsp;которыми сталкиваются в&nbsp;разработке одностраничных приложений.
                                        React позволяет разработчикам создавать большие веб-приложения, которые используют данные, которые меняются со&nbsp;временем,
                                        без&nbsp;перезагрузки страницы. Его цель состоит в&nbsp;том, чтобы быть быстрым, простым, масштабируемым. React обрабатывает только интерфейс в&nbsp;приложениях.</p>
                            </div>
                        </div>
                    </div>
                 </div>
              
            );

    }
});
var Footer = React.createClass({
    render: function () {
        return(
        <div className="footer-main">
            <footer>
                    <p>&#169; Copyright Kalistratov Anton</p>
                    <p>Лабораторные работы</p>
                    <p>Студент группы РИЗ - 440018</p>
                    <p><a href="/Home/ObListAdmin">Админ</a></p>
            </footer>
        </div>
        )
    }
});

var HomePage = React.createClass({
    render: function () {
        return (
            <div className="index-page">
                <MenuWave />
                <Content />
                <Footer />
            </div>                       
        );
    }
});

ReactDOM.render(
    <HomePage />,
    document.getElementById('react-content')
);