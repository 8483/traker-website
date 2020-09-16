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
                    <p>
                        Следете 
                        <b style="color: black;">активности</b>, 
                        <b style="color: black;">зделки</b>, 
                        <b style="color: black;">контакти</b> и 
                        <b style="color: black;">клиенти</b> 
                        со неверојатна прегледност
                    </p>
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
                    <img src="pics/activity.jpg"/>
                    <h1>Активност</h1>
                    <p>Внесете што треба да се случи, кој е одговорен и со кого е поврзана активноста. По извршувањето, обележете дека е сработено и внесете коментар.</p>
                </div>
                
                <div class="feature">
                    <img src="pics/dashboard.jpg"/>
                    <h1>Работна табла</h1>
                    <p>Преглед на сите активности и зделки поврзани со вас.</p>
                </div>

                <div class="feature">
                    <img src="pics/activities.jpg"/>
                    <h1>Активности</h1>
                    <p>Историја на сите активности, минати и идни, во целата компанија.</p>
                </div>

                <div class="feature">
                    <img src="pics/people.jpg"/>
                    <h1>Контакти</h1>
                    <p>Преглед на сите Ваши <b>контакти</b>.</p>
                </div>

                <div class="feature">
                    <img src="pics/person.jpg"/>
                    <h1>Контакт</h1>
                    <p>Преглед на <b>контакт</b>, и сите активности и зделки поврзани со него, како и контакт информации.</p>
                </div>

                <div class="feature">
                    <img src="pics/companies.jpg"/>
                    <h1>Компании</h1>
                    <p>Преглед на сите Ваши <b>клиенти</b>.</p>
                </div>

                <div class="feature">
                    <img src="pics/company.jpg"/>
                    <h1>Компанија</h1>
                    <p>Преглед на <b>клиент</b>, и сите активности и зделки поврзани со него, како и контакт информации.</p>
                </div>

                <div class="feature">
                    <img src="pics/products.jpg"/>
                    <h1>Производи</h1>
                    <p>Преглед на сите Ваши <b>производи</b>.</p>
                </div>

                <div class="feature">
                    <img src="pics/product.jpg"/>
                    <h1>Производ</h1>
                    <p>Преглед на <b>производ</b>, и сите активности и зделки поврзани со него.</p>
                </div>

                <div class="feature">
                    <img src="pics/types.jpg"/>
                    <h1>Подесувања</h1>
                    <p>Видови на активности, лица, клиенти и статуси на зделки.</p>
                </div>

                <div class="feature">
                    <img src="pics/users.jpg"/>
                    <h1>Корисници</h1>
                    <p>Преглед на сите корисници, и ажурирање на истите.</p>
                </div>

            </div>

            <div class="title">
                <a id="price" class="anchor"></a>
                <span>Цена</span>
            </div>
            
            <div class="pricing">
                <div class="price">
                    <span style="display: flex; align-items: center;">
                        <span class="price-amount">15</span>
                        <span class="price-currency">EUR</span>
                    </span>
                    <br>
                    <span class="price-info">по корисник / месечно <span class="price-info-vat">без ДДВ</span></span>
                </div>

                <div class="benefits">
                    <div class="benefit"><i class="fas fa-wallet"></i><span> Без дополнителни трошоци</span></div>
                    <div class="benefit"><i class="fas fa-headset"></i><span> Поддршка 24/7/365</span></div>
                    <div class="benefit"><i class="fas fa-database"></i><span> Пристап до податоците во секое време</span></div>
                    <div class="benefit"><i class="fas fa-code"></i><span> Најнова верзија на апликацијата</span></div>
                </div>

            </div>

            <div class="title">
                <button class="btn-demo btn-large btn-blue">Закажете Демо</button>
            </div>

            <div class="clients">

                <div class="client" style="width: 400px;">
                    <a href="https://bioteklab.com.mk/" target="_blank">    
                        <img src="pics/logo_biotek.png"/>
                    </a>
                </div>

                <div class="client" style="width: 200px;">
                    <a href="https://officeplus.mk/" target="_blank">   
                        <img src="pics/logo_officeplus.png"/>
                    </a>
                </div>

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
