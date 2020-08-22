let header = `
    <div id="load-container">
        <div id="loader"></div>
    </div>

    <div class="container" id="container">

        <div id="message-container"></div>
        
        <div id="modal">
            <div id="modal-wrapper">
                <div id="modal-close"><i class="fas fa-times"></i></div>
                <div id="modal-content"></div>
            </div>
        </div>

        </div>
        <nav class="navigation">
            <a href="/">
                <img class="logo" src="pics/traker-logo-dark.png"/>
            </a>
            <a href="#why">Зошто</a>
            <a href="#features">Како</a>
            <a href="#price">Цена</a>
            <a href="#contact">Контакт</a>
            <!-- <span>
                <i class="fas fa-mobile-alt icon-gap"></i>
                +389 76 270 270
            </span> -->
            <button class="btn-demo btn-small btn-blue">Закажете Демо</button>
        </nav>

        <div class="content">

            <div class="main">

                <div class="main-cta">
                    <h1>Целосна контрола врз Вашата компанија</h1>
                    <p>Следете <b style="color: black;">настани</b>, <b style="color: black;">задачи</b>, <b style="color: black;">зделки</b> и <b style="color: black;">контакти</b> со неверојатна прегледност</p>
                    <div class="button-wrap">
                        <a href="#why" style="margin-right:30px">
                            <button class="btn-medium btn-green">Дознајте повеќе</button>
                        </a>
                        <button class="btn-demo btn-medium btn-blue">Закажете Демо</button>
                    </div>
                </div>

                <img class="main-devices" src="pics/devices-resized.png"/>
            </div>

            <div class="title">
                <a id="why" class="anchor"></a>
                <span>Зошто Ви треба?</span>
            </div>


            <div id="why" class="use-cases">

                <div class="use-case">
                <h1>Извештаи</h1>
                    <p>Дали секојдневно се пишуваат извештаи за сработеното?</p>
                </div>

                <div class="use-case">
                    <h1>Историја</h1>
                    <p>Дали сите случки и потсетници се во нотеси и маилови?</p>
                </div>

                <div class="use-case">
                    <h1>Одговорност</h1>
                    <p>Колку често се заборава да се исполнат обврските?</p>
                </div>

                <div class="use-case">
                    <h1>Податоци</h1>
                    <p>Што се случува со податоците кога ќе си замине вработен?</p>
                </div>

                <div class="use-case">
                    <h1>Анализи</h1>
                    <p>Дали секојдневно се справувате со многубројни и неефикасни Excel извештаи?</p>
                </div>

                <div class="use-case">
                    <h1>Организација</h1>
                    <p>Се случува ли еден ист клиент да биде контактиран за иста работа повеќе пати?</p>
                </div>

                <div class="use-case">
                    <h1>Пристап</h1>
                    <p>Ви затребал ли некој критичен податок кој е достапен само на работа?</p>
                </div>

            </div>

            <div class="title">
                <a id="features" class="anchor"></a>
                <span>Како функционира?</span>
            </div>

            <div class="features">

                <div class="feature">
                    <img src="pics/feature_event.jpg"/>
                    <h1>Настан</h1>
                    <p>Внесете што се случило во компанијата, и поврзете ја информацијата со лице, компанија и проект.</p>
                </div>
                
                <div class="feature">
                    <img src="pics/feature_task.jpg"/>
                    <h1>Задача</h1>
                    <p>Внесете што треба да се случи, и изберете кој е одговорен за задачата.</p>
                </div>

                <div class="feature">
                    <img src="pics/feature_events.jpg"/>
                    <h1>Настани</h1>
                    <p>Историја на сите настани, со ефикасно пребарување.</p>
                </div>

                <div class="feature">
                    <img src="pics/feature_tasks.jpg"/>
                    <h1>Задачи</h1>
                    <p>Историја на сите задачи, идни и минати.</p>
                </div>

                <div class="feature">
                    <img src="pics/feature_people.jpg"/>
                    <h1>Лица</h1>
                    <p>Сите информации за Вашите <b>контакти</b> на едно место и настаните/задачите поврзани со нив.</p>
                </div>

                <div class="feature">
                    <img src="pics/feature_companies.jpg"/>
                    <h1>Компании</h1>
                    <p>Сите информации за Вашите <b>клиенти</b> на едно место и настаните/задачите поврзани со нив.</p>
                </div>

                <div class="feature">
                    <img src="pics/feature_companies.jpg"/>
                    <h1>Проекти</h1>
                    <p>Сите информации за Вашите <b>проекти</b> на едно место и настаните/задачите поврзани со нив.</p>
                </div>

                <div class="feature">
                    <img src="pics/feature_reports.jpg"/>
                    <h1>Извештаи</h1>
                    <p>Генератор на извештаи со групирање на податоците за поголема прегледност.</p>
                </div>


            </div>

            <div class="title">
                <a id="price" class="anchor"></a>
                <span>Цена</span>
            </div>
            
            <div class="pricing">
                <div class="price">
                    <span style="display: flex; align-items: center;">
                        <span class="price-amount">899</span>
                        <span class="price-currency">Денари</span>
                    </span>
                    <br>
                    <span class="price-info">по корисник / месечно <span class="price-info-vat">без ДДВ</span></span>
                </div>

                <div class="benefits">
                    <div class="benefit"><i class="fas fa-wallet"></i><span> Без дополнителни трошоци</span></div>
                    <div class="benefit"><i class="fas fa-headset"></i><span> Поддршка 24/7/365</span></div>
                    <div class="benefit"><i class="fas fa-database"></i><span> Пристап до податоците во секое време</span></div>
                    <div class="benefit"><i class="fas fa-code"></i><span> Најнова верзија од апликацијата</span></div>
                </div>

            </div>

            <div class="title">
                <button class="btn-demo btn-large btn-blue">Закажете Демо</button>
            </div>

            <a id="contact" class="anchor"></a>
            <div class="contact">
                <span class="contact-info"><i class="fas fa-mobile-alt icon-gap"></i>+389 76 270 270</span>
                <br>
                <div class="input-group">
                    <label>Емаил</label>
                    <input id="contact-email" type="email">
                </div>
                <br>
                <br>
                <div class="input-group">
                    <label>Порака</label>
                    <textarea id="contact-message"></textarea>
                </div>
                <br><br>
                <button id="message-send-button" class="btn-medium btn-gray">Испрати</button>
            </div>
            
        </div>

    </div>
`;

/*
- : ?
- Наплата: Кога последен пат сте го побарале должникот?
- Набавки: До каде е набавката на роба?
- Логистика: Дали е испорачана пратката?
- Финансии: Колку имаме потрошено за телефон минатата година?
- Човечки Ресурси: Кој и кога е на годишен одмор?
- Плата: Кој колку бонус/казна има минатиот месец?
- Администрација: Електронски деловодник.
*/

module.exports = header;
