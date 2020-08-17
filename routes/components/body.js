let header = `
    <div class="container" id="container">
        <div id="picBox"></div>
        <nav class="navigation">
            <a href="/">
                <img class="logo" src="pics/traker-logo-dark.png"/>
            </a>
            <a href="#features">Функционалности</a>
            <a href="#price">Цена</a>
            <a href="#contact">Контакт</a>
            <!-- <span>
                <i class="fas fa-mobile-alt icon-gap"></i>
                +389 76 270 270
            </span> -->
            <button id="demo" class="btn-small btn-blue">Закажете Демо</button>
        </nav>

        <div class="content">

            <div class="main">

                <div class="main-cta">
                    <h1>Целосна контрола врз Вашата компанија</h1>
                    <p>Сите информации на едно место, со неверојатна прегледност</p>
                    <div class="button-wrap">
                        <a href="#features" style="margin-right:30px">
                            <button class="btn-medium btn-green">Дознајте повеќе</button>
                        </a>
                        <button id="demo" class="btn-medium btn-blue">Закажете Демо</button>
                    </div>
                </div>

                <img class="main-devices" src="pics/devices-resized.png"/>
            </div>

            <!--
            <div id="why" class="use-cases">

                <div class="use-case">
                    <h1>Продажба</h1>
                    <p>Следете што, кога и кој разговарал со Вашите клиенти</p>
                </div>

                <div class="use-case">
                    <h1>Набавки</h1>
                    <p>Знајте во секој момент до каде е набавката на роба</p>
                </div>

                <div class="use-case">
                    <h1>Финансии</h1>
                    <p>Проверете колку имате потрошено на телефон минатиот месец</p>
                </div>

                <div class="use-case">
                    <h1>Човечки Ресурси</h1>
                    <p>Едноставно следење кој и кога е на годишен одмор</p>
                </div>

                <div class="use-case">
                    <h1>Плата</h1>
                    <p>Преглед на исплатени бонуси/казни на вработените</p>
                </div>

                <div class="use-case">
                    <h1>Администрација</h1>
                    <p>Водење на електронски деловодник</p>
                </div>

            </div>
-->

            <div class="title">
                <a id="features" class="anchor"></a>
                <span>Функционалности</span>
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
                    <span>
                        <span class="price-amount">899</span>
                        <span class="price-currency">Денари</span>
                    </span>
                    <br>
                    <br>
                    <span class="price-info">по корисник / месечно <span class="price-info-vat">без ДДВ</span></span>
                </div>

                <div class="benefits">
                    <div class="benefit"><i class="fas fa-wallet"></i><span> Без дополнителни трошоци</span></div>
                    <div class="benefit"><i class="fas fa-headset"></i><span> Поддршка 24/7/365</span></div>
                    <div class="benefit"><i class="fas fa-database"></i><span> Пристап до податоците во секое време</span></div>
                    <div class="benefit"><i class="fas fa-code"></i><span> Последна верзија од апликацијата</span></div>
                </div>

            </div>

            <div class="title">
                <button id="demo" class="btn-large btn-blue">Закажете Демо</button>
            </div>

            <a id="contact" class="anchor"></a>
            <div class="contact">
                <h3 style="font-weight: 600; color: #999;">...или поставете прашање</h3>
                <br>
                <div class="input-group">
                    <label>Емаил</label>
                    <input id="message-email">
                </div>
                <br>
                <div class="input-group">
                    <label>Порака</label>
                    <textarea id="message"></textarea>
                </div>
                <br>
                <button id="message-send-button" class="btn-medium btn-gray">Испрати</button>
                <br>
                <br>
                <span class="contact-info"><i class="fas fa-mobile-alt icon-gap"></i>+389 76 270 270</span>
                <br>
                <br>
                <span class="footer">Traker - 2020</span>
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
